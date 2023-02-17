import { ADD_CART, REMOVE_CART, CLEAR_CART } from "./actionTypes";
const initialState = [
  {
    name: "bacon mexicano",
    price: 13.0,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "bacon árabe",
    price: 15.0,
    image:
      "data:image/jpeg;base64,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",
  },
];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.item];
    case REMOVE_CART:
      return (state = action.item);
    case CLEAR_CART:
      return (state = []);
    default:
      return state;
  }
};
export default cartReducer;