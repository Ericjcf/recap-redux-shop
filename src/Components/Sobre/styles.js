import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--azul-claro);
  height: 600px;

  img {
    width: 350px;
    height: 300px;
    margin: 0 30px;
    border-radius: 8px;
  }
  div {
    display: flex;
    flex-direction: column;
    /* border: solid 1px white; */
    text-align: justify;
    align-items: center;

    color: white;
    width: 350px;
    height: 300px;
    margin: 0 30px;
    div {
      display: flex;
      flex-direction: row;
      font-size: 50px;
      width: 350px;
      height: 100px;
      justify-content: space-between;
    }
  }
`;
export default Container;
