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
  <p className="text-[30px] text-black">Տան ինտերնետ</p>
  <h4 className="text-gray-800 font-semibold">Հուսալի ինտերնետ տան համար</h4>

  <div className="flex gap-[50px]">
    <div className="h-[400px] w-[350px] border border-gray-400 rounded-lg">
      <p className="bg-[#7ce00b] h-[60px] w-[350px] text-white rounded-lg text-[18px] text-center">uNet 7000</p>
      <i class="fa fa-home" aria-hidden="true">150 Մբ/վ տան ինտերնետ</i>
      <br /><br />
      <i class="fa fa-wifi" aria-hidden="true">Wi-FI սարք</i>
      <br /><br />
      <i class="fa fa-globe" aria-hidden="true">FTTH տեխնոլոգիա</i>
      <br /><br />
      <p className="flex flex gap-30 text-[20px]">7 000 ֏  <p className="text-[14px] text-gray">Ավելին</p></p>
      <br /><br />
      <p className="text-center bg-[#7ce00b] h-[35px] w-[200px] hover:bg-green-300 rounded-lg">Միանալ</p>
    </div>
    <div className="h-[400px] w-[350px] border border-gray-400 rounded-lg">
      <p className="bg-[#7ce00b] h-[60px] w-[350px] text-white rounded-lg text-[18px] text-center">uNet 9500</p>
      <i class="fa fa-home" aria-hidden="true">250 Մբ/վ տան ինտերնետ</i>
      <br /><br />
      <i class="fa fa-wifi" aria-hidden="true">Super Wi-FI սարք</i>
      <br /><br />
      <i class="fa fa-globe" aria-hidden="true">FTTH տեխնոլոգիա</i>
      <br /><br />
      <p className="flex flex gap-30 text-[20px]">9 500 ֏  <p className="text-[14px] text-gray">Ավելին</p></p>
      <br /><br />
      <p className="text-center bg-[#7ce00b] h-[35px] w-[200px] hover:bg-green-300 rounded-lg">Միանալ</p>
    </div>
    <div className="h-[400px] w-[350px] border border-gray-400 rounded-lg">
      <p className="bg-[#7ce00b] h-[60px] w-[350px] text-white rounded-lg text-[18px] text-center">uNet 5000 Մարզային</p>
      <i class="fa fa-home" aria-hidden="true">100 Մբ/վ տան ինտերնետ</i>
      <br /><br />
      <i class="fa fa-wifi" aria-hidden="true">Wi-FI սարք</i>
      <br /><br />
      <i class="fa fa-globe" aria-hidden="true">FTTH տեխնոլոգիա</i>
      <br /><br />
      <p className="flex flex gap-30 text-[20px]">5 000 ֏  <p className="text-[14px] text-gray">Ավելին</p></p>
      <br /><br />
      <p className="text-center bg-[#7ce00b] h-[35px] w-[200px] hover:bg-green-300 rounded-lg">Միանալ</p>
    </div>
  </div>
    </>
  );
}
export default Tanhamar;