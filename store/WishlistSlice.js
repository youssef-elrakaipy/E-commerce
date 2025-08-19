import { createSlice } from "@reduxjs/toolkit";
import {
  addToWishlist,
  getUserWishlist,
  removeFromWishlist,
} from "./WishlistThuncks";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    liked: {},
    items: [],
  },
  reducers: {
    toggleWishlist(state, action) {
      const id = action.payload;
      state.liked[id] = !state.liked[id];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToWishlist.fulfilled, (state, action) => {
      const { res, newItem } = action.payload;
      const existingImage = state.items.find(
        (image) => image.id === newItem.id
      );
      if (!existingImage) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          // image: newItem.imageCover,
          imageCover: newItem.imageCover,
        });
      } else {
        return;
      }
    });

    builder.addCase(removeFromWishlist.fulfilled, (state, action) => {
      const id = action.payload;
      const existingImage = state.items.find((image) => image.id === id);
      if (existingImage) {
        state.items = state.items.filter((item) => item.id !== id);
        state.liked[id] = false;
      }
    });

    builder.addCase(getUserWishlist.fulfilled, (state, action) => {
      const data = action.payload;
      state.items = data.data.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        // image: item.imageCover,
        imageCover: item.imageCover,
      }));
      data.data.forEach((item) => {
        state.liked[item._id] = true;
      });
    });
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
