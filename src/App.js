import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyles/globalStyles";
import Vitrine from "./Components/Vitrine";
import Carrinho from "./Components/Carrinho";
import MenuBar from "./Components/MenuBar";
import Sidebar from "./Components/Drawer";
import Sobre from "./Components/Sobre";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <div className="principal-conteudo">
        <Vitrine />
        {/* <Carrinho /> */}
      </div>

      {/* <Sobre />
      <MenuBar />
      <Sidebar /> */}
    </div>
  );
}

export default App;

/* 
Adicionar toast
Ao clicar no adicionar, o contador de carrinho aumenta, e adiciona algo ao state
Ao clicar no Carrinho troca de página, e consome o state de carrinho pra renderizar
-- os produtos que estão lá
Criar uma page de produtos
Arrumar o modal de itens
Melhorar a versão mobile
*/
