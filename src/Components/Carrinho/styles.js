import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 330px;
  height: 80vh;
  background-color: var(--background);

  .secao-itens {
    overflow-y: auto;
  }

  .secao-itens::-webkit-scrollbar {
    width: 12px;
  }

  .secao-itens::-webkit-scrollbar-track {
    margin: 20px;
    background: transparent;
    border-radius: 5px;
  }

  .secao-itens::-webkit-scrollbar-thumb {
    background-color: #3a86ff;
    border-radius: 3px;
  }
  .carrinho-footer {
    background-color: var(--background);
    text-align: center;
    position: relative;
    right: 0;
    bottom: 0;
  }
  .carrinho-subtotal {
    display: flex;
    width: 300px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    span {
      font-size: 20px;
      font-weight: 900;
    }
  }
`;
export default Container;
