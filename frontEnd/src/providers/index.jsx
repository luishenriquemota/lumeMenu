import { ClientProvider } from "./client"
import { ModalProvider } from "./modal"
import { PlateProvider } from "./plates"


export const Providers = ({children}) => {
    return(
    <ModalProvider>
        <ClientProvider>
            <PlateProvider>
                {children}
            </PlateProvider>
        </ClientProvider>
    </ModalProvider>
    )
}