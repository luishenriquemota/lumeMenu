import { useContext, createContext, useState } from "react"
import { api } from "../../services/api"
import { toast } from "react-hot-toast";


const ClientContext = createContext()

export const ClientProvider = ({children}) => {
const [clients, setClients] = useState([])

const createClient = (data) => {
    
    api.post("clients/", data).then(res => {
        toast.success("Usuario cadastrado com sucesso")
    }).catch(err => {
        toast.error("Erro ao cadastrar usuario")
    })
}


return(
    <ClientContext.Provider value={{createClient}}>
        {children}
    </ClientContext.Provider>
)

}
export const useClient = () => useContext(ClientContext)