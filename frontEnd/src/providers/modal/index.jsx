import { useContext, createContext, useState } from "react"


const ModalContext = createContext()


export const ModalProvider = ({children}) => {

    const [openModal, setOpenModal] = useState(false)


    const changeModal = () => {
        setOpenModal(!openModal)
    }


    return (
        <ModalContext value={{openModal, changeModal}}>
            {children}
        </ModalContext>
    )

}


export const useModal = () => useContext(ModalContext)