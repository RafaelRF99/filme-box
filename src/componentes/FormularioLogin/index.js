import './FormularioLogin.css'
import CampoTexto from '../CampoTexto';
import Botao from '../Botao'
import { useState } from 'react';

const FormularioLogin = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log("Foi Submetido!", email, senha)
    }

    return (
        <section onSubmit={aoSalvar} className="background">
            <h2 className="titulo">Tela de Login</h2>
            <form>
                <CampoTexto label="Email" placeholder="exemplo@gmail.com" labeltype="email"
                    valor={email} aoAlterado={valor => setEmail(valor)} />
                <CampoTexto label="Senha" placeholder="Digite sua senha" labeltype="password"
                    valor={senha} aoAlterado={valor => setSenha(valor)} />
                <Botao>Logar</Botao>
            </form>
        </section>
    )
}

export default FormularioLogin;