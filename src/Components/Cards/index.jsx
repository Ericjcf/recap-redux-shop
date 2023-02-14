import Container from "./styles";
import Button from "../Button";

const Card = ({ name, preco, image }) => {
  return (
    <Container>
      <img src={image} />
      <div className="item-nome-preco">
        <h4>{name}</h4>
        <span className="tag-preco">R$ {preco}</span>
      </div>
      <div className="item-descricao-botao">
        <p>Descrição</p>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</span>
        <Button>Adicionar ao carrinho</Button>
      </div>
    </Container>
  );
};

export default Card;
