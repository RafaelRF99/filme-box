import './CampoTexto.css'

const CampoTexto = (props) => {
    console.log(props)
    return (
        <section className="campo-texto">
            <label>{props.labelEmail}</label>
            <input type="text" placeholder={props.placeholder}/>
            <label>{props.labelPass}</label>
            <input type="password" placeholder={props.password}/>
        </section>
    );
};

export default CampoTexto;