import { FaInstagram, FaDeviantart, FaTwitter, FaGithub } from "react-icons/fa";
import imagem1 from "../../Assets/assinado.png";
import Container from "./styles";

const Sobre = () => {
  return (
    <Container className="section-autor">
      <img src={imagem1} alt="Uma arte de @magikarpii" />
      <div className="div-autor">
        <h1>Quem é Magikarpii??</h1>
        <p>
          Olá, me chamo Eric James, atualmente sou ilustrador freelancer, mais
          voltado para o público furry, faço arte com várias temáticas, confere
          o meu trabalho logo abaixo tem mais do meu trabalho caso queira
          conhecer tudo
        </p>

        <div className="div-social-media">
          <FaInstagram />
          <FaDeviantart />
          <FaTwitter />
          <FaGithub />
        </div>
      </div>
    </Container>
  );
};
export default Sobre;
