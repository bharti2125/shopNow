import { createSlice } from "@reduxjs/toolkit";

const getInitialCart = () => {
  const storedCart = localStorage.getItem("cartItems");
  return storedCart ? JSON.parse(storedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cartItems", JSON.stringify(cart));
};

const initialState = {
  // cart: [],
  cart: getInitialCart(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cart.find(
        (item) => item.name === action.payload.name
      );
      if (existing) {
        existing.quantity += action.payload.quantity || 1;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }
      saveCartToLocalStorage(state.cart);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.name !== action.payload);
      saveCartToLocalStorage(state.cart);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.cart.find((item) => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
      saveCartToLocalStorage(state.cart);
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
