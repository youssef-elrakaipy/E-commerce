import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./CartSlice.js";
import wishlistReducer from "./WishlistSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
