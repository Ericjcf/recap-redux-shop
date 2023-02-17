import { addCart, removeCart, clearCart } from "./actions";

const thunkAddCart = (item, carrinho) => (dispatch) => {
  console.log("thunk add cart!!");
  console.log("state inicial carrinho: ", carrinho);
  const carrinhoLocalStorage = [...carrinho, item];
  localStorage.setItem("@cart:itens", carrinhoLocalStorage);
  dispatch(addCart(item));
};
const thunkRemoveCart = (item, carrinho) => (dispatch) => {
  dispatch(removeCart(item));
};
const thunkClearCart = (item) => (dispatch) => {
  dispatch(clearCart(item));
};

export { thunkAddCart, thunkRemoveCart, thunkClearCart };
