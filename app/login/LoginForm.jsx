"use client";

import { handleLogIn } from "@/fetching-data/Fetching";
import Link from "next/link";
import { useState } from "react";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import { LoginValidate } from "@/utils/Validation";
import Alert from "@/ui/Alert";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { getUserCart } from "@/store/cartThunks";
import { getUserWishlist } from "@/store/WishlistThuncks";

export default function LoginForm() {
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const router = useRouter();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const error = LoginValidate(formValues);

    if (Object.keys(error).length > 0) {
      setErrors(error);
      return;
    }

    const result = await handleLogIn(formData);

    if (result.error) {
      setErrors({ general: result.error });
    } else {
      dispatch(getUserCart());
      dispatch(getUserWishlist());
      router.refresh();
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-gray-50 rounded shadow">
        <p className="text-3xl text-[#00ab009c] my-2 text-center">Login Now</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />

          {errors.email && <Alert alert={errors.email} />}

          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />

          {errors.password && <Alert alert={errors.password} />}

          <div className="flex justify-end items-center gap-5">
            <Link
              href="/forgot-password"
              className="mt-5 text-[#1c78c1ad] transition duration-300 hover:text-[#00ac00]"
            >
              Forgot Password
            </Link>

            <Button>Sign in</Button>
          </div>

          {errors.general && (
            <p className="bg-[#f10303bf] text-white mt-1.5 p-2.5 text-left rounded-[5px]">
              {errors.general}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
