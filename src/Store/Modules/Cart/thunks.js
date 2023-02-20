import { addCart, removeCart, clearCart } from "./actions";

const thunkAddCart = (item, carrinho) => (dispatch) => {
  console.log("thunk add cart!!");
  console.log("state inicial carrinho: ", carrinho);
  const carrinhoLocalStorage = [...carrinho, item];
  localStorage.setItem("@cart:itens", JSON.stringify(carrinhoLocalStorage));
  dispatch(addCart(item));
};
const thunkRemoveCart = (item, carrinho) => (dispatch) => {
  const carrinhoLocalStorage = carrinho.filter((store) => store !== item);
  dispatch(removeCart(carrinhoLocalStorage));
};
const thunkClearCart = () => (dispatch) => {
  dispatch(clearCart());
};

export { thunkAddCart, thunkRemoveCart, thunkClearCart };
