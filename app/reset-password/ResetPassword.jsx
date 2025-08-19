"use client";

import { resetPassword } from "@/fetching-data/Fetching";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

export default function ResetPassword() {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router = useRouter();

  async function handlePassword(formData) {
    formData.set("email", email);
    const result = await resetPassword(formData);

    if (result.error) {
      setError(result.error);
    } else {
      router.push("/login");
    }
  }

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl p-6 bg-gray-50 rounded shadow">
        <p className="text-3xl text-[#00ab009c] my-2 text-center">
          Forgot Password
        </p>

        <form action={handlePassword}>
          <label htmlFor="email">Email</label>
          <Input type="email" name="email" value={email} readOnly />

          <label htmlFor="password">New password</label>
          <Input
            type="password"
            name="newPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="bg-[#f10303bf] text-white mt-1.5 p-2.5 text-left rounded-[5px]">
              {error}
            </p>
          )}

          <div className="flex  items-center gap-5">
            <Button disabled={password.length < 6}>Reset Password</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
