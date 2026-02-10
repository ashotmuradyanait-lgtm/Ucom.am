import React from "react";
function Tanhamar() {
  return (
    <>
       <div className="w-full md:w-[800px] mx-auto flex flex-col md:flex-row items-center md:justify-between border-b border-gray-500px-4 md:px-6 py-4gap-4">
    <img
      src="https://www.ucom.am/images/main_logo.svg"
      alt=""
      className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"/>

    <div
      className="
        flex flex-wrap md:flex-nowrap
        justify-center md:justify-end
        gap-10
        text-sm font-medium text-black items-center
      "
    >
      {[
        "Տան համար",
        "Շարժական կապ",
        "Ռոումինգ",
        "5G ցանց",
        "Uplay",
      ].map((item, i) => (
        <p
          key={i}
          className="
            transition-all duration-300
            hover:scale-110 hover:bg-[yellowgreen]
            px-3 py-1 rounded text-center
          "
        >
          {item}
        </p>
      ))}
           <i className="fa fa-search text-gray-400" />
      <i className="fa fa-shopping-cart text-gray-400 text-[15px]" />Առցանց խանութ
      <i className="fa fa-credit-card text-gray-400" />

      <p
        className="
          bg-[#b4f293] text-black
          w-[110px] h-[30px]
          rounded text-center
          transition hover:border hover:border-green-400">
        Վճարել
      </p>
    </div>
  </div>
  <p className="text-[50px]">Տան ինտերնետ</p>
    </>
  );
}
export default Tanhamar;