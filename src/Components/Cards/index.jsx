import Container from "./styles";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { thunkAddCart } from "../../Store/Modules/Cart/thunks";

const Card = ({ name, preco, image, item }) => {
  const dispatch = useDispatch();
  const carrinho = useSelector((state) => state.cart);

  function handleAddCart() {
    console.log(item);
    dispatch(thunkAddCart(item, carrinho));
  }

  return (
    <Container>
      <img src={image} />
      <div className="item-nome-preco">
        <h5>{name}</h5>
        <span className="tag-preco">R$ {preco}</span>
      </div>
      <div className="item-descricao-botao">
        <p>Descrição</p>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</span>
        <Button onClick={() => handleAddCart()}>Adicionar ao carrinho</Button>
      </div>
    </Container>
  );
};

export default Card;
