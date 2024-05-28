import './App.css';
import '../src/App.css'
import Banner from "./components/banner/banner.js";
import InputText from './components/inputText/inputText.js';

function App() {
  return (
    <div className="App">
      <Banner />
      <InputText label = "Nome" placeholder = "Digite seu nome"/>
      <InputText label = "Cargo" placeholder = "Digite seu cargo"/>
      <InputText  label = "Imagem" placeholder = "Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
