import { ADD_CART, REMOVE_CART, CLEAR_CART } from "./actionTypes";

const addCart = (item) => ({
  type: ADD_CART,
  item,
});
const removeCart = (item) => ({
  type: REMOVE_CART,
  item,
});
const clearCart = () => ({
  type: CLEAR_CART,
});

export { addCart, removeCart, clearCart };
