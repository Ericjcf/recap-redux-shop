import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 300px;
  margin: 10px;
  padding: 5px;
  justify-content: space-around;
  border-radius: 12px;
  box-shadow: 0px 0px 4px 0px rgba(58, 134, 255, 0.8);

  .item-nome-preco {
    display: flex;
    flex-direction: row;
    font-size: 15px;
    align-items: center;
    justify-content: space-evenly;

    img {
      width: 80px;
      height: 80px;
      border-radius: 5px;
      background-color: var(--cinza-claro);
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      width: 150px;
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
