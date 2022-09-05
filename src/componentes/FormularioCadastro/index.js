import './FormularioCadastro.css'
import CampoTexto from '../CampoTexto';
import Botao from '../Botao'
import { useState } from 'react';

const FormularioCadastro = () => {
    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log("Foi Submetido!", nome, email, senha)
    }
    return (
        <section onSubmit={aoSalvar} className="background">
            <h2 className="titulo">Cadastro FilmeBox</h2>
            <form>
                <CampoTexto label="Nome Completo" placeholder="Digite seu nome aqui"
                    labeltype="text" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto label="Email" placeholder="exemplo@gmail.com" labeltype="text" 
                valor={email} aoAlterado={valor => setEmail(valor)}/>
                <CampoTexto label="Senha" placeholder="Digite sua senha" labeltype="password" 
                valor={senha} aoAlterado={valor => setSenha(valor)}/>
                <Botao>Cadastrar</Botao>
            </form>
        </section>
    );
};

export default FormularioCadastro;