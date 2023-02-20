import Container from "./styles";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { thunkRemoveCart } from "../../Store/Modules/Cart/thunks";

const CardCarrinho = ({ name, preco, image, item }) => {
  const itensCarrinho = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleRemoveCart() {
    console.log("removendo item:  ", item);
    dispatch(thunkRemoveCart(item, itensCarrinho));
  }
  return (
    <Container>
      <img src={image} />
      <div className="item-nome-preco">
        <h4>{name}</h4>
        <span className="tag-preco">R$ {preco}</span>
        <Button tipo="botao-icone" onClick={() => handleRemoveCart()}>
          remover do carrinho
        </Button>
      </div>
    </Container>
  );
};
export default CardCarrinho;
