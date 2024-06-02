import Botao from "../botao";
import InputText from "../inputText/inputText";
import MenuDropdown from "../menuDropdown";
import "./Form.css";

const Form = () => {
    
    //Lista de Items
    //cada item precisa de uma chave unica, para a renderização ser controlada
    const items =[
        undefined,
        'Programação',
        'Front End',
        'Data Science',
        'DevOps',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        //responavel por evitar o comportamento padrão do form
        evento.preventDefault();
        console.log("form Submetido")
    }


    return (
        <section className = "formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText obrigatorio ={true} label="Nome" placeholder="Digite seu nome" />
                <InputText obrigatorio ={true} label="Cargo" placeholder="Digite seu cargo" />
                <InputText
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                />
                <MenuDropdown obrigatorio ={true} itens = {items} label="time"/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
};

export default Form;
