import "./index.css";

const inputText = (props) => {

    //Criando uma concatenação com props
    const placeHolderModificada = `${props.placeholder}...`

    let valor = "teste"

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className = "envolve__input"> 
            <label>
                {props.label}
            </label>
            <input
                value = {valor}
                onChange = {aoDigitado}
                type='text'
                placeholder={placeHolderModificada}
                required={props.obrigatorio}
            />
        </div>

    );
};

export default inputText;