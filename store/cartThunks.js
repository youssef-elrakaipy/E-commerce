import { createAsyncThunk } from "@reduxjs/toolkit";
import { Message } from "@/ui/Message";

const getToken = () => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
};

const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (newItem, { rejectWithValue }) => {
    const token = getToken();

    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/cart",
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
      return rejectWithValue("Failed to send cart data");
    }

    const data = await response.json();

    Message(" Added to cart");

    return {
      res: data,
      newItem,
    };
  }
);

const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, { rejectWithValue }) => {
    const token = getToken();

    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      }
    );

    if (!response.ok) {
      return rejectWithValue("Failed to delete cart data");
    }

    const data = await response.json();

    Message("Cart cleared");

    return data;
  }
);

const removeSpecificItem = createAsyncThunk(
  "cart/removeSpecificItem",
  async (id, { rejectWithValue }) => {
    const token = getToken();

    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
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

    Message("Removed from cart");

    return id;
  }
);

const updateCartProductQuantity = createAsyncThunk(
  "cart/updateCartProductQuantity",
  async ({ id, count }, { rejectWithValue }) => {
    const token = getToken();

    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        body: JSON.stringify({
          count: count,
        }),
      }
    );

    if (!response.ok) {
      return rejectWithValue("Failed to update product quantity");
    }

    const data = await response.json();

    Message("Cart quantity updated");

    return {
      res: data,
      id,
      count,
    };
  }
);

const getUserCart = createAsyncThunk(
  "cart/getUserCart",
  async (_, { rejectWithValue }) => {
    const token = getToken();
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      }
    );
    if (!response.ok) {
      return rejectWithValue("Failed to fetch user cart");
    }
    const data = await response.json();
    return data;
  }
);

export {
  addToCart,
  clearCart,
  removeSpecificItem,
  updateCartProductQuantity,
  getUserCart,
};
