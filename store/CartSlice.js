import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  clearCart,
  removeSpecificItem,
  updateCartProductQuantity,
  getUserCart,
} from "./cartThunks";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    loading: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state, action) => {
        const product = action.meta.arg;
        const productId = product.id || product._id;
        state.loading[productId] = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const { res, newItem } = action.payload;
        const existingItem = state.items.find((item) => item.id === newItem.id);

        if (!existingItem) {
          state.items.push({
            id: newItem._id,
            title: newItem.title,
            price: newItem.price,
            quantity: 1,
            image: newItem.imageCover,
          });
        } else {
          existingItem.quantity++;
        }
        state.totalQuantity = res.numOfCartItems;
        state.totalPrice = res.data.totalCartPrice;
        const productId = newItem._id;
        state.loading[productId] = false;
      });

    builder.addCase(clearCart.fulfilled, (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    });

    builder.addCase(removeSpecificItem.fulfilled, (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity--;
        state.totalPrice -= existingItem.price * existingItem.quantity;
      }
    });

    builder
      .addCase(updateCartProductQuantity.pending, (state, action) => {
        const product = action.meta.arg;
        state.loading[product.id] = true;
      })
      .addCase(updateCartProductQuantity.fulfilled, (state, action) => {
        const { res, id, count } = action.payload;
        const existingItem = state.items.find((item) => item.id === id);
        if (existingItem) {
          existingItem.quantity = count;
        }
        state.totalQuantity = res.numOfCartItems;
        state.totalPrice = res.data.totalCartPrice;
        if (count === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
        state.loading[id] = false;
      });

    builder.addCase(getUserCart.fulfilled, (state, action) => {
      const data = action.payload;
      state.items = data.data.products.map((item) => ({
        id: item.product._id,
        title: item.product.title,
        price: item.price,
        quantity: item.count,
        image: item.product.imageCover,
      }));
      state.totalQuantity = data.numOfCartItems;
      state.totalPrice = data.data.totalCartPrice;
    });
  },
});

export default cartSlice.reducer;
