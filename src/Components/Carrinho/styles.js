import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;
  margin-top: 30px;
  background-color: var(--background);
  hr {
    background-color: gray;
    height: 1px;
  }

  .carrinho-subtotal {
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 30px;
    }
  }
  button {
    align-self: center;
  }
`;
export default Container;
