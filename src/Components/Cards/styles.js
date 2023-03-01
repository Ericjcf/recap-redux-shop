import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  margin: 10px;
  padding: 5px;
  border-radius: 12px;
  box-shadow: 0px 0px 4px 0px rgba(58, 134, 255, 0.8);
  img {
    margin: 5px;
    border-radius: px;
    height: 40%;
    background-color: var(--cinza-claro);
  }
  .item-nome-preco {
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      word-wrap: break-word;
    } */
  }
  .item-descricao-botao {
    padding: 5px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 15px;
    }
    span {
      font-size: 12px;
      margin: 4px 0;
    }
  }
  .tag-preco {
    min-width: 50px;
    margin: 0 5px;
    text-align: center;
    padding: 2px;
    border-radius: 5px;
    background-color: var(--background-texto);
    color: var(--preto);
    font-weight: 900;
  }
`;
export default Container;
