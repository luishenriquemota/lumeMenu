import { useContext, createContext, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../auth";
import toast from "react-hot-toast";




const CartContext = createContext()

export const CartProvider = ({children}) => {
    const {auth} = useAuth()
    const [itemCart, setItemCart] = useState([])


    const token = ("Token "+ JSON.parse(auth).token)


    const listCartItems = async ()  => {
        const response = await api.get("/items/", {headers:{"Authorization": token}})
        setItemCart(response.data)
    }


    const addItemToCart = async (plate_id) => {
        const request = {"plate_id": plate_id, "quantity": 1}
        

        try {
            await api.post("/addItemToCart/", request, {headers:{"Authorization": token}})
            toast.success("Item adicionado ao carrinho")
        } catch (error) {
            toast.error("erro ao adicionar ao carrinho")
        }
    }

    const editItemQuantity = async (item_id, data) => {
        const request = {"quantity": data}
        console.log(request)
        try {
            const response = await api.patch(`/edit/${item_id}/`, request, {headers:{"Authorization": token}})
            toast.success("Deu bom - retirar essa not depois")
        } catch (error) {
            toast.error("Algo deu errado, tente novamente.")
        }
    }


    const removeItemtocart = async (item_id) => {
        try {
            await api.delete(`/delete/${item_id}/`, {headers:{Authorization: token}})
            toast.success("Item removido do carrinho.")
        } catch (error) {
            toast.error("Algo deu errado.")
        }
    }


    return (
        <CartContext value={{itemCart, listCartItems, addItemToCart, editItemQuantity, removeItemtocart}}>
            {children}
        </CartContext>
    )
}

export const useCart = () => useContext(CartContext)