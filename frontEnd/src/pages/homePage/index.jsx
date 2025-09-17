import { FormregisterClient } from "../../components/form-registerClient";
import { HomePageStyled } from "./style";
import img from '../../assets/image_2.png'




export const HomePage = () => {

    return <HomePageStyled>
                <img src={img} alt="imagem de comida" />
                <FormregisterClient/>
            </HomePageStyled>;
}

