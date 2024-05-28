import "./index.css";
import imgBanner from "../../imagens/banner.png";

const Banner = () => {
  return (
    <header className = "banner">
      <img src={imgBanner} alt="Imagem do banner Projeto Organa"/>
    </header>
  );
};

export default Banner;