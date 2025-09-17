import { useForm } from "react-hook-form";
import { FormStyled } from "./style";
import { useClient } from "../../providers/client";
import toast from "react-hot-toast";



export const FormregisterClient = () => {

const {register, handleSubmit, reset} = useForm({})
const {createClient} = useClient()


const submit = handleSubmit((data) => {
    if(data.password !== data.Confirm_password){
        toast.error("As senhas nao coincidem")
    }
    else
        createClient({username: data.username, email: data.email, password: data.password})
        setTimeout(() => {
            reset()
        }, 2000);
})


    return (<FormStyled onSubmit={submit}>
                <h3>Registre-se</h3>
                <input type="text" placeholder="nome usuario" required={true} {...register('username')}/>
                <input type="email" placeholder="Email" required={true} {...register('email')}/>
                <input type="password" placeholder="Senha" required={true} {...register('password')}/>
                <input type="password" placeholder="Confirmar Senha" required={true} {...register('Confirm_password')}/>
                <button type="submit">Cadastrar</button>
            </FormStyled>)
}