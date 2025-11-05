import { useContext, createContext, useState } from "react"
import { api } from "../../services/api"
import {toast} from "react-hot-toast"
import { data } from "react-router-dom"

const PlateContext = createContext()

export const PlateProvider = ({children}) => {
    const [plates, setplates] = useState([])

    const createPlate = async (data) => {
        try {
            await api.post("plates/", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
            toast.success("Prato criado com sucesso!")
        } catch (err) {
            toast.error("Erro ao criar prato")
            console.error(err)
        }
    };


    const getPlates = async () => {
        try {
            const response = await api.get("plates/")

            setplates(response.data)
            
        } catch (error) {
            console.error(error)
        }
    }


    return(
        <PlateContext.Provider value={{createPlate, getPlates, plates}}>
            {children}
        </PlateContext.Provider>
    )

}

export const useplate = () => useContext(PlateContext)

