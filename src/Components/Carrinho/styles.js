import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 350px;
  height: 100vh;
  background-color: var(--background);

  hr {
    background-color: gray;
    height: 1px;
  }

  .secao-itens {
    overflow-y: auto;
  }

  .secao-itens::-webkit-scrollbar {
    width: 12px;
  }

  .secao-itens::-webkit-scrollbar-track {
    background: #6e6f72;
    border-radius: 5px;
  }

  .secao-itens::-webkit-scrollbar-thumb {
    background-color: #3a86ff;
    border-radius: 3px;
  }

  .carrinho-subtotal {
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 30px;
      font-weight: 900;
    }
  }
`;
export default Container;
