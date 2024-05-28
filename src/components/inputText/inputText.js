import "./index.css";

const inputText = () => {
    return (
        <div className = "envolve__input"> 
            <label>Nome</label>
            <input
                type='text'
                placeholder="Digite seu nome"
            />
        </div>

    );
};

export default inputText;