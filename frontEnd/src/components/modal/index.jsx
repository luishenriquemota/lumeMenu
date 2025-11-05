import { ModalStyled } from "./style"



export const Modal = ({children, ...props}) => {

    return (
        <ModalStyled {...props}>
            {children}
        </ModalStyled>
    )
}