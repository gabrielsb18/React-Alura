import "./index.css";

const inputText = (props) => {

    //Criando uma concatenação com props
    const placeHolderModificada = `${props.placeholder}...`

    return (
        <div className = "envolve__input"> 
            <label>
                {props.label}
            </label>
            <input
                type='text'
                placeholder={placeHolderModificada}
            />
        </div>

    );
};

export default inputText;