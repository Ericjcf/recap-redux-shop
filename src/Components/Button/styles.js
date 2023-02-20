import styled from "styled-components";
const Container = styled.button`
  border: none;
  border-radius: 5px;
  min-width: 150px;
  width: ${(props) => (props.tipo === "botao-finalizar" ? "70%" : "")};
  height: ${(props) => (props.tipo === "botao-icone" ? "30px" : "")};
  min-height: 30px;
  font-size: 12px;
  color: var(--background);
  font-weight: 300;
  padding: 5px;
`;
export default Container;
