import CampoTexto from '../CampoTexto';
import Botao from '../Botao'
import './FormularioLogin.css'

const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Foi Submetido!")
}

const FormularioLogin = () => {
    return (
        <section onSubmit={aoSalvar} className="background">
            <h2 className="titulo">Tela de Login</h2>
            <form>
                <CampoTexto label="Email" placeholder="exemplo@gmail.com" labeltype="email" />
                <CampoTexto label="Senha" placeholder="Digite sua senha" labeltype="password" />
                <Botao>Logar</Botao>
            </form>
        </section>
    )
}

export default FormularioLogin;