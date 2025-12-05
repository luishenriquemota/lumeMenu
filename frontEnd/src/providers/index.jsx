import { AuthProvider } from "./auth"
import { CartProvider } from "./cart"
import { ClientProvider } from "./client"
import { ModalProvider } from "./modal"
import { PlateProvider } from "./plates"


export const Providers = ({children}) => {
    return(
    <AuthProvider>
        <ModalProvider>
            <ClientProvider>
                <CartProvider>
                    <PlateProvider>
                        {children}
                    </PlateProvider>
                </CartProvider>
            </ClientProvider>
        </ModalProvider>
    </AuthProvider>
    )
}