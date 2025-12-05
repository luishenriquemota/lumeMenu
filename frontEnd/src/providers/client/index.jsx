import { useContext, createContext, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { api } from "../../services/api"
import { toast } from "react-hot-toast";


const ClientContext = createContext()

export const ClientProvider = ({children}) => {
const [clients, setClients] = useState(JSON.parse(localStorage.getItem("token")) || "")

const navigate = useNavigate()

const registerClient = async (data) => {
        if(data.password !== data.Confirm_password){
        toast.error("As senhas nao coincidem")
        }
        await api.post("clients/", {username: data.username, email: data.email, password: data.password}).then(res => {
            toast.success("Usuario cadastrado com sucesso")
            setTimeout(() => {
                navigate("/home")
            }, 2000);
        }).catch(err => {
            toast.error("Erro ao cadastrar usuario")
        })
}


const login = async (data) => {
    try{
        console.log(data)
        const res = await api.post("login/", data)
        localStorage.setItem("Token", JSON.stringify(res.data))
        toast.success("login realizado")
        setTimeout(() => {
            navigate("/home")
        }, 2000);


    }catch (err) {
        toast.error("Nome de usuário ou senha incorretos.")
    }
}

return(
    <ClientContext.Provider value={{registerClient, login}}>
        {children}
    </ClientContext.Provider>
)

}
export const useClient = () => useContext(ClientContext)