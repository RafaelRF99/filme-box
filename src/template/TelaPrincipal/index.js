import React from 'react';
import BotaoEntrar from '../../componentes/BotaoEntrar';
import BotaoCadastrar from '../../componentes/BotaoCadastrar';
import './estilo.css';

const TelaPrincipal = () => {
return(
    <div className='tela'>
    <BotaoEntrar/>
    <BotaoCadastrar/>
    </div>
    
)
}


export default TelaPrincipal;