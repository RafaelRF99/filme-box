import CampoTexto from '../CampoTexto';
import Botao from '../Botao'
import './Formulario.css'

const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Foi Submetido!")
}

const Formulario = () => {
    return (
        <section onSubmit={aoSalvar} className="background">
            <h2>Tela de Login</h2>
            <form>
                <CampoTexto labelEmail="Email" labelPass="Senha"
                placeholder="exemplo@gmail.com" password="Digite sua senha"/>
                <Botao>Logar</Botao>
            </form>
        </section>
    )
}

export default Formulario;