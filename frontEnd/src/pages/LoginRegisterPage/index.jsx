import { LoginRegisterPageStyled } from "./style"
import { useState } from "react";
import { InputForm } from "../../components/input-form";
import { useForm } from "react-hook-form";
import { useClient } from "../../providers/client";
import toast from "react-hot-toast";



export const LoginRegisterPage = () => {
    const [showRegister, setShowRegister] = useState(false);
    const {register, handleSubmit, reset} = useForm({})
    const {registerClient, login} = useClient()

    const handleShowRegister = () => {
        setShowRegister(!showRegister);
    }

    const submitRegister = handleSubmit((data) => {
        registerClient(data)
    })

    const submitLogin = handleSubmit((data) => {
        login(data)
    })


    return (
        <LoginRegisterPageStyled>
            <div className="container">
                {showRegister == true ? 
                <div className="content-left">
                    <span>Ja posui conta?</span>
                    <span className="btn-login" onClick={(e) => handleShowRegister()}>Faça Login</span>
                </div> 
                :
                <div className="form-login">
                    <h2>Entrar</h2>
                    <form onSubmit={submitLogin}>
                        <InputForm type="text" placeholder="Nome Usuario" {...register("username")} size="200px"/>
                        <InputForm type="password" placeholder="Senha" {...register("password")} size="200px"/>
                        <span><a href="">Esqueci minha senha</a></span>
                        <button type="onSubmit">Entrar</button>
                    </form>
                </div> 
              }
                {showRegister == false ? 
                  <div className="content-right">
                      <h1>Olá, amigo</h1>      
                      <p>Se ainda não possui uma conta</p> 
                      <a>registre-se agora</a>
                      <button className="btn-subscribe" onClick={() => handleShowRegister()}>Inscrever-se</button>
                    </div>
                :
                <div className="form-register">
                    <h2>Registre-se</h2>
                    <form onSubmit={submitRegister}>
                        <InputForm type="text" placeholder="Nome do usuario" {...register("username")}/>
                        <InputForm type="email" placeholder="Email" {...register("email")}/>
                        <InputForm type="password" placeholder="Senha" {...register("password")}/>
                        <InputForm type="password" placeholder="Confirmar Senha" {...register("Confirm_password")}/>
                        <button type="onSubmit">Cadastrar</button>
                    </form>
                    <span></span>          
                </div>
                }
            </div>
        </LoginRegisterPageStyled>
    )
}