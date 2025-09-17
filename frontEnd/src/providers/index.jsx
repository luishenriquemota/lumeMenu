import { ClientProvider } from "./client"


export const Providers = ({children}) => {
    return(
    <ClientProvider>
        {children}
    </ClientProvider>
    )
}