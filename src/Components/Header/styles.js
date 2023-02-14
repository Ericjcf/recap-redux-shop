import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0px 0px 10px 0px rgba(58, 134, 255, 0.57);
  span {
    color: var(--azul-claro);
  }
  hr {
    border: none;
    width: 4px;
    background-color: var(--azul-claro);
  }
  div {
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export default Container;
