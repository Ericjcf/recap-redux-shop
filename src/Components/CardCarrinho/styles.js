import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 300px;
  margin: 10px;
  padding: 5px;

  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0px 0px 4px 0px rgba(58, 134, 255, 0.8);
  img {
    width: 30%;
    border-radius: 5px;
    background-color: var(--cinza-claro);

    align-self: flex-start;
  }
  .item-nome-preco {
    display: flex;
    flex-direction: row;
    font-size: 15px;

    align-items: center;
    justify-content: space-evenly;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .tag-preco {
        padding: 2px;
        border-radius: 5px;
        color: var(--preto);
        font-weight: 900;
      }
    }
  }
`;
export default Container;
