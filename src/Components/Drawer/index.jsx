import { Container, Content } from "./styles";
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import CardCarrinho from "../CardCarrinho";
import Button from "../Button";
import { thunkClearCart } from "../../Store/Modules/Cart/thunks";
// import SidebarItem from "../SidebarItem";

const Sidebar = ({ active }) => {
  const dispatch = useDispatch();
  const itensCarrinho = useSelector((state) => state.cart);
  const subTotal = itensCarrinho.reduce((total, item) => {
    return item.price + total;
  }, 0);
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <div className="carrinho-topo">
        <h2>Carrinho de compras</h2>
        <FaTimes onClick={closeSidebar} />
      </div>

      <div className="carrinho-itens">
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

      <div className="carrinho-subtotal">
        <div>
          <span>Subtotal</span>
          <span>R$: {subTotal}</span>
        </div>
        <Button
          onClick={() => dispatch(thunkClearCart())}
          tipo="botao-finalizar"
        >
          Finalizar Pedido
        </Button>
      </div>
    </Container>
  );
};
export default Sidebar;
