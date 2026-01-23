import React from "react";
import { FaPhone, FaQuestionCircle, FaGlobe } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex gap-4 justify-between">
      <div className="flex gap-4">
        <p className="font-medium cursor-pointer hover:text-green-500">Անհատներ</p>
        <p className="font-medium cursor-pointer hover:text-green-500">Բիզնես</p>
      </div>

      <div className="flex gap-4">
        <FaPhone className="text-gray-500" />
        <p className="font-medium">444 | 011 444 444</p>
      </div>

      <div className="flex items-center gap-2">
        <FaQuestionCircle className="text-gray-500" />
        <a
          href="https://www.ucom.am/help"
          className="font-medium text-gray-700 hover:text-green-500"
        >
          Օգնություն
        </a>
      </div>

      <div className="flex items-center gap-2">
        <p className="font-medium cursor-pointer hover:text-green-500">Մուտք</p>
      </div>
      <div className="flex items-center gap-2">
        <FaGlobe className="text-gray-500" />
        <p className="font-medium cursor-pointer hover:text-green-500">Հայ</p>

        <button
          className="ml-2 p-1 border rounded hover:bg-gray-100"
          aria-label="language switcher"
        >
          ▼
        </button>
      </div>
    </header>
  );
}
