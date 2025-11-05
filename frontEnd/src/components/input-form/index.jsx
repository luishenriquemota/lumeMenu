import { Input } from "./style"




export const InputForm = ({label, size,  ...rest}) => {

    return (
        <Input width={size} {...rest}/>
    )

}