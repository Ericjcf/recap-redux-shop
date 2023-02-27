import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  position: fixed;
  text-align: center;
  padding: 10px;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 350px;
  right: ${(props) => (props.sidebar ? "0" : "-100%")};
  /* aqui ele fala que quando o sidebar não estiver ativo ele regride em 100% e fica oculto 'atrás da tela */
  animation: showSidebar 2s;
  > svg {
    border-radius: 5px;
    background-color: rgba(58, 134, 255, 0.8);
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  h2 {
    margin: 50px 0 10px 0;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 350px;
    }
  }
`;
export const Content = styled.div`
  margin-top: 100px;
  .carrinho-subtotal {
    display: flex;
    margin: 10px;
    flex-direction: row;
    justify-content: space-between;
    span {
      font-size: 30px;
      font-weight: 700;
    }
  }
`;
