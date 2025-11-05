import logo from "../../assets/logo.svg"
import { useNavigate, useLocation } from "react-router-dom"
import { HeaderStyled } from "./style"
import { useModal } from "../../providers/modal"




export const Header = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const currentPath = location.pathname;

  const {changeModal} = useModal()
  
  const handleclickLogin = () => {
    navigate("/login")
  }
  
  const handleclickcreatePlate = () => {
    changeModal()
  }
  

  




    return (
      <HeaderStyled>
        <img src={logo} alt="logo" />
        <nav>
            <span>Home</span>
            <span>Menu</span>
            <span>Sobre</span>
            <span>contato</span>
        </nav>
        {currentPath === "/home" ? (
          <button onClick={(e) => handleclickcreatePlate()}>Criar prato</button>
        ): <button onClick={(e) => handleclickLogin()}>login</button>}
      </HeaderStyled>
    )
}