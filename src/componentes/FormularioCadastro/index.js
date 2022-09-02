import CampoTexto from '../CampoTexto';
import Botao from '../Botao'
import './FormularioCadastro.css'

const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Foi Submetido!")
}

const Formulario = () => {
    return (
        <section onSubmit={aoSalvar} className="background">
            <h2 className="titulo">Cadastro FilmeBox</h2>
            <form>
                <CampoTexto label="Nome Completo" placeholder="Digite seu nome aqui"
                labeltype="text" />
                <CampoTexto label="Seu Email" placeholder="exemplo@gmail.com" labeltype="text"/>
                <CampoTexto label="Senha" placeholder="Digite sua senha" labeltype="password"/>
                <Botao>Cadastrar</Botao>
            </form>
        </section>
    );
};

export default Formulario;