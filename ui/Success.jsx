"use client";

import { useEffect, useState } from "react";

export default function Success({ text }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p
        className={`transition duration-1000 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        {text}
      </p>
    </div>
  );
}
