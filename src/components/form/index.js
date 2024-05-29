import InputText from "../inputText/inputText";
import MenuDropdown from "../menuDropdown";
import "./Form.css";

const Form = () => {
    
    //Lista de Items
    //cada item precisa de uma chave unica, para a renderização ser controlada
    const items =[
        'Programação',
        'Front End',
        'Data Science',
        'DevOps',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]


    return (
        <section className = "formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText label="Nome" placeholder="Digite seu nome" />
                <InputText label="Cargo" placeholder="Digite seu cargo" />
                <InputText
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                />
                <MenuDropdown itens = {items} label="time"/>
            </form>
        </section>
    );
};

export default Form;
