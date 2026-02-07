import { useState } from "react";
import { Link } from "react-router-dom";
    
function HeaderTop() {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <header>
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-gray-400 px-4 py-3 whitespace-nowrap">

      <div className="flex gap-6 items-center">
        <Link to="/" className="font-[Montserrat] text-gray-700 hover:text-black transition">
          Անհատներ
        </Link>
        <Link to="/business" className="font-[Montserrat] text-gray-700 hover:text-black transition">
          Բիզնես
        </Link>
      </div>

      <div className="flex items-center gap-2 text-gray-500">
        <i className="fa fa-phone">444 | 011 444 444</i>
      </div>

      <div className="flex items-center gap-2 text-gray-500">
        <i className="fa fa-question-circle"></i>
        <a
          href="https://www.ucom.am/help"
          className="hover:text-black transition font-[Montserrat]"
        >
          Օգնություն
        </a>
      </div>

      <p className="font-[Montserrat] text-gray-500 hover:text-black cursor-pointer transition">
        Մուտք
      </p>

      <div className="flex items-center gap-2 text-gray-500 relative">
        <i className="fa fa-globe">Հայ</i>

        <button
          onClick={() => setIsLangOpen(prev => !prev)}
          className="w-6 h-6 bg-gray-200 rounded-full"
          aria-label="language switcher"
        />

        {isLangOpen && (
          <a
            href="https://www.ucom.am/en/utravel"
            className="absolute top-full right-0 mt-2 bg-white shadow px-4 py-2 hover:bg-gray-100"
          >
            English
          </a>
        )}
      </div>
    </div>
    </header>
  );
}

export default HeaderTop;