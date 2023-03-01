import styled from "styled-components";

export const Container = styled.div`
  /* right: ${(props) => (props.sidebar ? "0" : "-100%")}; */
  /* aqui ele fala que quando o sidebar não estiver ativo ele regride em 100% e fica oculto 'atrás da tela */
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  top: 0px;
  right: 0px;
  width: 350px;
  height: 100vh;
  justify-content: space-between;
  padding: 10px;
  animation: showSidebar 0.5s;

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
  .carrinho-topo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    svg {
      background-color: #3a86ff;
      color: white;
      border-radius: 5px;
      height: 30px;
      width: 30px;
    }
  }

  .carrinho-itens {
    overflow-y: auto;
  }
  .carrinho-itens::-webkit-scrollbar {
    width: 12px;
  }

  .carrinho-itens::-webkit-scrollbar-track {
    margin: 20px;
    background: transparent;
    border-radius: 5px;
  }

  .carrinho-itens::-webkit-scrollbar-thumb {
    background-color: #3a86ff;
    border-radius: 3px;
  }
  .carrinho-subtotal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: row;
      width: 60%;
      align-items: center;
      justify-content: space-between;
      margin: 10px;
    }
  }
`;

// .itens-lista {
//   display: flex;
//   flex-direction: column;
// }
// .carrinho-subtotal {
//   display: flex;
//   margin: 10px;
//   flex-direction: row;
//   justify-content: space-between;
//   span {
//     font-size: 30px;
//     font-weight: 700;
//   }
// }
