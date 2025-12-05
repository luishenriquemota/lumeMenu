import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/landingPage";
import { HomePage} from "../pages/homePage"
import { LoginRegisterPage } from "../pages/LoginRegisterPage";
import { FormRegisterPlate } from "../components/form-registerPlate";
import { Cartpage } from "../pages/Cart";



export const RoutesApp = () => {
    
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginRegisterPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/teste" element={<FormRegisterPlate/>}/>
            <Route path="/cart" element={<Cartpage/>}/>            
        </Routes>
    )
}