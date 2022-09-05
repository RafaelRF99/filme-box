import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    
    return (
        <section className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} type={props.labeltype} placeholder={props.placeholder}/>
        </section>
    );
};

export default CampoTexto;