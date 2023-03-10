import produtos from "../../Store/Modules/Products/produtos";
import Card from "../Cards";
import CardCarrinho from "../CardCarrinho";
import Container from "./styles";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { thunkAddCart, thunkClearCart } from "../../Store/Modules/Cart/thunks";

const Carrinho = () => {
  const dispatch = useDispatch();
  const itensCarrinho = useSelector((state) => state.cart);
  const subTotal = itensCarrinho.reduce((total, item) => {
    return item.price + total;
  }, 0);

  return (
    <Container>
      <h2>Carrinho de compras</h2>
      <div className="secao-itens">
        {itensCarrinho.map((item, index) => (
          <CardCarrinho
            key={index}
            name={item.name}
            preco={item.price}
            image={item.image}
            item={item}
          />
        ))}
      </div>
      <hr />
      <div className="carrinho-footer">
        <div className="carrinho-subtotal">
          <h3>Sutotal: </h3>
          <span>R$: {subTotal}</span>
        </div>
        <Button
          onClick={() => dispatch(thunkClearCart())}
          tipo="botao-finalizar"
        >
          Finalizar pedido
        </Button>
      </div>
    </Container>
  );
};
export default Carrinho;
