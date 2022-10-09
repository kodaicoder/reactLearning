import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = { items: [], totalQuantity: 0, totalAmount: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    REPLACECART(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    ADDITEM(state, action) {
      const newItem = action.payload.item;
      const existItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existItem.quantity++;
        existItem.totalPrice = existItem.totalPrice + newItem.price;
      }
    },
    REMOVEITEM(state, action) {
      const id = action.payload.id;
      const existItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existItem.quantity--;
        existItem.totalPrice = existItem.totalPrice - existItem.price;
      }
    },
    CLEAR(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
