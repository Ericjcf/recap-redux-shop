import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyles/globalStyles";
import Card from "./Components/Cards";
import Vitrine from "./Components/Vitrine";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Vitrine />
    </div>
  );
}

export default App;

/* 
Adicionar toast
Ao clicar no adicionar, o contador de carrinho aumenta, e adiciona algo ao state
Ao clicar no Carrinho troca de página, e consome o state de carrinho pra renderizar
-- os produtos que estão lá
*/