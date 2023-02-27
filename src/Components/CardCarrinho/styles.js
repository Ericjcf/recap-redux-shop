import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 300px;
  margin: 5px;
  padding: 5;
  align-items: center;
  justify-content: space-around;
  border-radius: 12px;
  box-shadow: 0px 0px 4px 0px rgba(58, 134, 255, 0.8);
  img {
    margin: 0 10px;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    background-color: var(--cinza-claro);
  }
  .item-nome-preco {
    display: flex;
    flex-direction: row;
    font-size: 20px;
    padding: 5px;
    align-items: center;
    justify-content: space-evenly;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .tag-preco {
    padding: 2px;
    border-radius: 5px;
    color: var(--preto);
    font-weight: 900;
  }
`;
export default Container;
