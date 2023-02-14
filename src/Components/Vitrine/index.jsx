import produtos from "../../Store/Modules/Products/produtos";
import Card from "../Cards";
import Container from "./styles";

const Vitrine = () => {
  return (
    <Container>
      {produtos.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          preco={item.price}
          image={item.image}
        />
      ))}
    </Container>
  );
};
export default Vitrine;
