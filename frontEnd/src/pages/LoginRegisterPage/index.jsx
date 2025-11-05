import { LoginRegisterPageStyled } from "./style"
import { useState } from "react";
import { InputForm } from "../../components/input-form";
import { useForm } from "react-hook-form";
import { useClient } from "../../providers/client";
import toast from "react-hot-toast";



export const LoginRegisterPage = () => {
    const [showRegister, setShowRegister] = useState(false);
    const {register, handleSubmit, reset} = useForm({})
    const {createClient} = useClient()

    const submitForm = handleSubmit((data) => {
        if(data.password !== data.Confirm_password){
        toast.error("As senhas nao coincidem")
    }
    else
        createClient({username: data.username, email: data.email, password: data.password})
        setTimeout(() => {
            reset()
        }, 2000);
    })

    const handleShowRegister = () => {
        setShowRegister(!showRegister);
    }

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
                    <form action="">
                        <InputForm type='text' placeholder='Email' size="200px"/>
                        <InputForm type="password" placeholder="Senha" size="200px"/>
                        <span>Esqueceu sua senha?</span>
                        <button type="onSubmit">Entrar</button>
                    </form>
                </div>
                }
                {showRegister == false ? 
                <di className="content-right">
                  <h1>Olá, amigo</h1>      
                  <p>Se ainda não possui uma conta registre-se agora</p>
                  <button className="btn-subscribe" onClick={() => handleShowRegister()}>Inscrever-se</button>
                </di>
                :
                <div className="form-register">
                    <h2>Registre-se</h2>
                    <form onSubmit={submitForm}>
                        <InputForm type="text" placeholder="Nome do usuario" {...register('username')}/>
                        <InputForm type="email" placeholder="Email" {...register('email')}/>
                        <InputForm type="password" placeholder="Senha" {...register('password')}/>
                        <InputForm type="password" placeholder="Confirmar Senha" {...register('Confirm_password')}/>
                        <button type="onSubmit">Cadastrar</button>
                    </form>
                    <span></span>
                </div>
                }
            </div>
        </LoginRegisterPageStyled>
    )
}