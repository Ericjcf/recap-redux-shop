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
      {/* <div className="carrinho-topo"></div> */}
      <FaTimes onClick={closeSidebar} />
      <h2>Carrinho de compras</h2>
      <Content>
        {itensCarrinho.map((item, index) => (
          <CardCarrinho
            key={index}
            name={item.name}
            preco={item.price}
            image={item.image}
            item={item}
          />
        ))}
        <hr />
        <div className="carrinho-subtotal">
          <span>Subtotal</span>
          <span>R$: {subTotal}</span>
        </div>
        <Button
          onClick={() => dispatch(thunkClearCart())}
          tipo="botao-finalizar"
        >
          Finalizar Pedido
        </Button>
      </Content>
    </Container>
  );
};
export default Sidebar;
