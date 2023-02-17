import produtos from "../../Store/Modules/Products/produtos";
import Card from "../Cards";
import Container from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { thunkAddCart } from "../../Store/Modules/Cart/thunks";

const Vitrine = () => {
  return (
    <Container>
      {produtos.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          preco={item.price}
          image={item.image}
          item={item}
        />
      ))}
    </Container>
  );
};
export default Vitrine;
