import { createAsyncThunk } from "@reduxjs/toolkit";

const getToken = () => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
};

const addToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (newItem, { rejectWithValue }) => {
    const token = getToken();
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/wishlist",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        body: JSON.stringify({
          productId: newItem.id,
        }),
      }
    );

    if (!response.ok) {
      return rejectWithValue("Failed to send wishlist data");
    }
    const data = await response.json();
    return {
      res: data,
      newItem,
    };
  }
);

const removeFromWishlist = createAsyncThunk(
  "wishlist/removeFromWishlist",
  async (id, { rejectWithValue }) => {
    const token = getToken();
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      }
    );
    if (!response.ok) {
      return rejectWithValue("Failed to delete product data");
    }
    await response.json();
    return id;
  }
);

const getUserWishlist = createAsyncThunk(
  "wishlist/getUserWishlist",
  async (_, { rejectWithValue }) => {
    const token = getToken();
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/wishlist",
      {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      }
    );
    if (!response.ok) {
      return rejectWithValue("Failed to fetch user wishlist");
    }
    const data = await response.json();
    return data;
  }
);

export { addToWishlist, removeFromWishlist, getUserWishlist };
