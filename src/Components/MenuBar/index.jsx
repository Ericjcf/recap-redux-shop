import { useState } from "react";
import { Container } from "./styles";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Drawer";

const MenuBar = () => {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);

  return (
    <Container>
      <FaBars onClick={showSideBar} />
      {sidebar && <Sidebar active={setSideBar} />}
    </Container>
  );
};
export default MenuBar;
