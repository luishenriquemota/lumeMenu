import { useEffect, useState } from "react"
import { useCart } from "../../providers/cart"
import { CartPageStyled } from "./style"
import { Header } from "../../components/header_component"





export const Cartpage = () => {
    const {itemCart, editItemQuantity, removeItemtocart, listCartItems} = useCart()
    const [total, setTotal] = useState(0)

    useEffect(() => {
        listCartItems()
    }, [])

    useEffect(() => {
        
        const sum = itemCart.reduce((acu, item) => {
            return acu + (item.plate.price * item.quantity)
        }, 0)
        setTotal(sum)
    }, [itemCart])


    const handlechangeQuantity = async (item_id, operators, prev_value) => {
        if (operators == "add"){
            await editItemQuantity(item_id, prev_value + 1)
        }else{
            await editItemQuantity(item_id, prev_value - 1)
        }

        await listCartItems()
    }

    const handleRemoveToCart = async (item_id) => {
        await removeItemtocart(item_id)
        await listCartItems()
    }



    return (
        <>
        <Header/>
        <CartPageStyled>
            <div>
                <ul>
                    {itemCart.map((item) => {
                        return(
                        <li>
                            <div className="info-plate">
                                <img src={item.plate.image} alt={item.plate.image} />
                                <p>{item.plate.name}</p>
                                <span>{item.plate.price}</span>
                            </div>
                            <div className="buttons">
                                <button className="btn-remove" onClick={() => handleRemoveToCart(item.id)}>remover do carrinho</button>
                                <div>
                                    <button className="btn-edit" onClick={() => handlechangeQuantity(item.id, "add", item.quantity)}>+</button>
                                    <span>{item.quantity}</span>
                                    <button className="btn-edit" onClick={() => handlechangeQuantity(item.id, "sub", item.quantity)}>-</button>
                                </div>
                            </div>
                        </li>)
                    })}
                </ul>
            </div>
            <div>
                <h3>Total:</h3>
                <span>{total}</span>
            </div>
        </CartPageStyled>
        </>
    )
}