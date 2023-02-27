import Container from "./styles";
import { useState } from "react";
import Sidebar from "../Drawer";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <Container>
      <h1>
        James<span>Shop</span>
      </h1>
      <div>
        <p onClick={showSidebar}>Carrinho</p>
        {sidebar && <Sidebar active={setSidebar} />}
        <hr></hr>
        <p>Entrar</p>
      </div>
    </Container>
  );
};
export default Header;
