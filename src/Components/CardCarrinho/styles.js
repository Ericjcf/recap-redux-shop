import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 150px;
  margin: 10px;
  padding: 10px;

  border-radius: 12px;
  box-shadow: 0px 0px 4px 0px rgba(58, 134, 255, 0.8);
  img {
    margin: 5px;
    border-radius: 8px;
    background-color: var(--cinza-claro);
  }
  .item-nome-preco {
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    justify-content: space-between;
  }
  .item-descricao-botao {
    padding: 5px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    span {
      font-size: 12px;
      margin: 4px 0;
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
