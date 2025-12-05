import { createContext, useContext, useState } from "react";



const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(localStorage.getItem("Token") || false)


    const handleAuth = () =>{
        setAuth(localStorage.getItem("Token") || false)
    }



    return (
        <AuthContext value={{auth, handleAuth}}>
            {children}
        </AuthContext>
    )
}

export const useAuth = () => useContext(AuthContext)