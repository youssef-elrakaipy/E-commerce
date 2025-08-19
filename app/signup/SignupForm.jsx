"use client";

import { useState } from "react";
import { handleSignup } from "@/fetching-data/Fetching";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import { SignupValidate } from "@/utils/Validation";
import Alert from "@/ui/Alert";

export default function SignupForm() {
  const [errors, setErrors] = useState({});

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
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

    const error = SignupValidate(formValues);

    if (Object.keys(error).length > 0) {
      setErrors(error);
      return;
    }

    const result = await handleSignup(formData);

    if (result.error) {
      setErrors({ general: result.error });
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md p-6 bg-gray-50 rounded shadow">
          <p className="text-3xl text-[#00ab009c] my-2 text-center">
            Register Now!
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>

            <Input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />

            {errors.name && <Alert alert={errors.name} />}

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

            <label htmlFor="rePassword">rePassword</label>
            <Input
              type="password"
              name="rePassword"
              value={formValues.rePassword}
              onChange={handleChange}
            />

            {errors.rePassword && <Alert alert={errors.rePassword} />}

            <label htmlFor="phone">Phone</label>
            <Input
              type="text"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
            />

            {errors.phone && <Alert alert={errors.phone} />}
            <div>
              <Button>SignUp</Button>
            </div>

            {errors.general && (
              <p className="bg-[#f10303bf] text-white mt-1.5 p-2.5 text-left rounded-[5px]">
                {errors.general}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
