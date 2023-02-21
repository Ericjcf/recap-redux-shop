import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 350px;
  right: ${(props) => (props.sidebar ? "0" : "-100%")};
  /* aqui ele fala que quando o sidebar não estiver ativo ele regride em 100% e fica oculto 'atrás da tela */
  animation: showSidebar 0.2s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin: 30px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;
export const Content = styled.div`
  margin-top: 100px;
`;
