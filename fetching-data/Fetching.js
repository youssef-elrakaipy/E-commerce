"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleSignup(formData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    rePassword: formData.get("rePassword"),
    phone: formData.get("phone"),
  };

  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    return { error: error.message || "Failed to send data!" };
  }

  redirect("/login");
}

export async function handleLogIn(formData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    return { error: error.message || "Failed to send data!" };
  }

  const result = await res.json();

  const cookieStore = await cookies();
  cookieStore.set("token", result.token, {
    httpOnly: false,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  console.log("token from login", result.token);

  redirect("/");
}

export async function handleForgotPassword(formData) {
  const data = {
    email: formData.get("email"),
  };

  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    return { error: error.message || "Failed to send data!" };
  }

  return { success: true };
}

export async function VerifyCode(formData) {
  const data = {
    resetCode: formData.get("code"),
  };

  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    return { error: error.message || "Failed to send data!" };
  }

  return { success: true };
}

export async function resetPassword(formData) {
  const data = {
    email: formData.get("email"),
    newPassword: formData.get("newPassword"),
  };

  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    return { error: error.message || "Failed to send data!" };
  }

  const result = await res.json();

  return result;
}

export async function GetCategories() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const category = await res.json();

  return category.data;
}

export async function GetProduct() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/products", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const products = await res.json();

  return products.data.slice(0, 16);
}

export async function GetSpecificProduct(id) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to get product details");
  }

  const product = await res.json();

  return product.data;
}

export async function getSomeProduct(page = 1, limit = 16) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?page=${page}&limit=${limit}`,
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const product = await res.json();

  return product.data;
}

export async function checkOut(formData) {
  const cookieStor = await cookies();
  const token = cookieStor.get("token");

  const cartRes = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
    headers: { token: token.value },
  });
  const cartData = await cartRes.json();

  const data = {
    details: formData.get("address"),
    phone: formData.get("phone"),
    city: formData.get("city"),
  };

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartData.data._id}?url=http://localhost:3000`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token.value,
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    return { error: error.message || "Failed to send data!" };
  }

  return await res.json();
}
