"use client";

import { handleForgotPassword, VerifyCode } from "@/fetching-data/Fetching";
import { useState } from "react";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import { useRouter } from "next/navigation";

export default function ForgotPasswordForm() {
  const [sendPassword, setSendPassword] = useState(true);
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    code: "",
  });

  const router = useRouter();

  function handleChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  async function handlePassword(formData) {
    const result = await handleForgotPassword(formData);

    if (result.error) {
      setError(result.error);
    } else {
      setSendPassword(false);
      setError("");
    }
  }

  async function handleVerifyCode(formData) {
    const result = await VerifyCode(formData);

    if (result.error) {
      setError(result.error);
    } else {
      setError("");
      router.push(`/reset-password?email=${formValues.email}`);
    }
  }

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl p-6 bg-gray-50 rounded shadow">
        <p className="text-3xl text-[#00ab009c] my-2 text-center">
          Forgot Password
        </p>

        <form action={sendPassword ? handlePassword : handleVerifyCode}>
          <label htmlFor={sendPassword ? "email" : "code"}>
            {sendPassword ? "Email" : "Code"}
          </label>
          <Input
            type={sendPassword ? "email" : "text"}
            name={sendPassword ? "email" : "code"}
            value={sendPassword ? formValues.email : formValues.code}
            onChange={handleChange}
          />

          {error && (
            <p className="bg-[#f10303bf] text-white mt-1.5 p-2.5 text-left rounded-[5px]">
              {error}
            </p>
          )}

          <div>
            <Button>{sendPassword ? "Send Code" : "Verify Code"}</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
