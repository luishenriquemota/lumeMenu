import { LandingPageStyled } from "./style";
import { Header } from "../../components/header_component";




export const LandingPage = () => {

    return (
        <LandingPageStyled>
            <Header/>
            <div className="container">
                <div className="content">
                    <h1>Excelência Culinária. Onde Você Estiver.</h1>
                    <p>Conectando apaixonados pela culinária a pratos criados com arte e excelência.</p>
                    <div className="buttons">
                        <button>Explorar Pratos</button>
                        <button>Registre-se Agora</button>
                    </div> 
            </div>
            </div>
            <footer></footer>
        </LandingPageStyled>
    )
}









{/* <LandingPageStyled>
                <img src={img} alt="imagem de comida" />
                <FormregisterClient/>
            </LandingPageStyled>; */}