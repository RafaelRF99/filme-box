import './CampoTextoCadastro.css'

const CampoTextoCadastro = (props) => {
    console.log(props)
    return (
        <section className="campo-texto">
            <label>{props.label}</label>
            <input type={props.labeltype} placeholder={props.placeholder}/>
        </section>
    );
};

export default CampoTextoCadastro;