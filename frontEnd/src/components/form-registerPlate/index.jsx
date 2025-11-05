import { InputForm } from "../input-form"
import { FormRegisterPlateStyled } from "./style"
import {useplate} from "../../providers/plates"
import { useForm } from "react-hook-form"
import { Modal } from "../modal"
import { useModal } from "../../providers/modal"




export const FormRegisterPlate = () => {

    const {handleSubmit, register} = useForm()
    const {createPlate} = useplate()
    const {changeModal} = useModal()


    const submit = handleSubmit(async (data) => {
      
        const formData = new FormData()
        const file = data.image[0]

        formData.append("image", file)
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", data.price)

        try {
            await createPlate(formData)
            changeModal()
        } catch (error) {
            console.log(error)
        }

    })

    return (
        <Modal>
            <FormRegisterPlateStyled>
                <form onSubmit={submit}>
                        <InputForm type="text" placeholder="Receita" size={"100%"} {...register("name")}/>
                        <InputForm type="text" placeholder="descrição" size={"100%"} {...register('description')}/>
                        <InputForm type="number" placeholder="Valor" size={"100%"} {...register('price')}/>
                        <InputForm type='file' placeholder="Imagem" size={"100%"} {...register("image")}/>
                    <button type="submit">Cadastrar</button>
                </form>
            </FormRegisterPlateStyled>
        </Modal>
    )
}