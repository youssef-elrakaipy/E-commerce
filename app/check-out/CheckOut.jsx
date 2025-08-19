"use client";

import { checkOut } from "@/fetching-data/Fetching";
import { useState } from "react";

export default function CheckOut() {
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState({
    address: "",
    phone: "",
    city: "",
  });

  function handleChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  async function handleForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = await checkOut(formData);

    if (data.error) {
      setError(data.error);
    } else if (data.session && data.session.url) {
      window.location.href = data.session.url;
    }
  }

  return (
    <section className=" min-h-screen mt-8 mx-10">
      <p className="text-[#00ac00] text-center text-3xl">Check Out!</p>
      <form className="flex flex-col" onSubmit={handleForm}>
        <label className="mb-4">Address Details</label>
        <input
          type="text"
          name="address"
          className="border-2 border-[#00ac00] rounded-[5px]  pb-[60px] pt-2 pl-4"
          placeholder="Enter Your Address"
          value={formValues.address}
          onChange={handleChange}
        />
        <label className="mb-4 mt-8">Phone Number</label>
        <input
          type="text"
          name="phone"
          className="border-2 border-[#00ac00] rounded-[5px]  pb-[10px] pt-2 pl-4"
          placeholder="01XXXXXXXXX"
          value={formValues.phone}
          onChange={handleChange}
        />
        <label className="mb-4 mt-8">City</label>
        <select
          name="city"
          className="border-2 border-[#00ac00] rounded-[5px]  pb-[10px] pt-2 pl-4"
          value={formValues.city}
          onChange={handleChange}
        >
          <option value="" disabled hidden></option>
          <option value="cairo" className="text-[#00ac00]">
            Cairo
          </option>
          <option value="alexandria" className="text-[#00ac00]">
            Alexandria
          </option>
          <option value="giza" className="text-[#00ac00]">
            Giza
          </option>
        </select>

        {error && (
          <p className="bg-[#f10303bf] text-white mt-1.5 p-2.5 text-left rounded-[5px]">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={
            !formValues.address || !formValues.phone || !formValues.city
          }
          className="bg-[#00ac00] rounded-[5px] py-2 mt-8 text-white cursor-pointer hover:bg-green-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Place Order
        </button>
      </form>
    </section>
  );
}
