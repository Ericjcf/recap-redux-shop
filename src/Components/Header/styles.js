import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0px 0px 10px 0px rgba(58, 134, 255, 0.57);

  span:first-child {
    color: var(--azul-claro);
  }

  .header-botoes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 700;
    p {
      margin: 0 5px;
      padding: 5px;
    }
    p:hover {
      background-color: var(--azul-claro);
      color: white;
      border-radius: 4px;
    }
  }
`;
export default Container;
