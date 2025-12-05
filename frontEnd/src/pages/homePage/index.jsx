import { useEffect } from "react"
import { FormRegisterPlate } from "../../components/form-registerPlate"
import { useModal } from "../../providers/modal"
import { useplate } from "../../providers/plates"
import { HomeStyled } from "./style"
import { Header } from "../../components/header_component"
import { useCart } from "../../providers/cart"



export const HomePage = () => {

    const {openModal, changeModal} = useModal()
    const {getPlates, plates} = useplate()
    const {addItemToCart} = useCart()

    useEffect(() => {
        getPlates()
    }, [])

 
    const handleBuy = (plate_id) => {
        addItemToCart(plate_id)
    }



    return (
        <>
        <Header/>
        {openModal? 
        <FormRegisterPlate/>
        :
        <HomeStyled>
            <div className="intro">
                <div className="content">
                <h1>O sabor que você imagina, a gente prepara.</h1>
                <p>Aqui, cada prato é único — feito do seu jeito, com os ingredientes que você ama. Personalize, experimente e descubra um novo conceito de gastronomia sob medida.</p>
                <div className="buttons">
                    <button>Peça um prato exclusivo</button>
                    <button>Descubra nossos sabores</button>
                </div>
                </div>
            </div>
            <div className="featured-section">
                <div>
                    <img src="src\assets\ingredientes_frescos.png"/>
                    <h5>Ingredientes Frescos</h5>
                    <p>Trabalhamos apenas com produtos selecionados e de qualidade garantida.</p>
                </div>
                <div>
                    <img src="src\assets\monte_seu_prato.png"/>
                    <h5>Monte Seu Prato</h5>
                    <p>Escolha cada detalhe — do tempero à finalização. Você é o chef!</p>
                </div>
                <div>
                    <img src="src\assets\entrega_rapida_segura.png"/>
                    <h5>Entrega Rápida e Segura</h5>
                    <p>Pedidos preparados e entregues com agilidade e cuidado.</p>
                </div>
                <div>
                    <img src="src\assets\sabores_ilimitado.png"/>
                    <h5>Sabores Ilimitados</h5>
                    <p>Do tradicional ao exótico — criamos qualquer prato que você imaginar.</p>
                </div>
                <div>
                    <img src="src\assets\peca_com_facilidade.png"/>
                    <h5>Peça com Facilidade</h5>
                    <p>Nosso cardápio digital é simples e seu pedido fica pronto em poucos cliques.</p>
                </div>
                <div>
                    <img src="src\assets\atendimento_personalizado.png"/>
                    <h5>Atendimento Personalizado</h5>
                    <p>Nossa equipe entende o que você deseja e transforma em sabor.</p>
                </div>
            </div>
            <div className="container-plateList">
                {plates.map((item) => (
                <div className="card-plate" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="info-plate">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span>Preço: R$ {item.price}</span>
                        <button onClick={(e) => handleBuy(item.id)}>Comprar</button>
                    </div>
                </div>
                ))}  
            </div>
        </HomeStyled>}
        </>
    )
}