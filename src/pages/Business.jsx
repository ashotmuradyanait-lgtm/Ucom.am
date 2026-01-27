import React from "react";
function Business() {
  return (
<section className="bg-black">
  <div className="flex justify-between border-b border-gray-500 whitespace-nowrap px-6 py-4">

    <img
      id="img1"
      src="https://www.ucom.am/images/main_logo.svg"
      alt=""
      className="w-[100px] h-[100px]"
    />
    <div className="flex gap-2 text-sm font-medium text-white items-center">
      <p
        className="transition-all text-white duration-300 hover:scale-110 hover:bg-[#313231] hover:w-[250px] hover:h-[30px] rounded text-center">
        Շարժական կապ
      </p>
      <p
        id="po2"
        className="transition-all duration-300 hover:scale-110 hover:bg-[#313231] hover:w-[200px] hover:h-[30px] rounded text-center">
        ֆիքսված ծառայություններ
      </p>
      <p
        id="po3"
        className="transition-all duration-300 hover:scale-110 hover:bg-[#313231] hover:w-[160px] hover:h-[30px] rounded text-center">
        Բիզնես լուծումներ
      </p>
      <p
        id="po4"
        className="transition-all duration-300 hover:scale-110 hover:bg-[#313231] hover:w-[160px] hover:h-[30px] rounded text-center">
        Ամպային լուծումներ
      </p>
      <p
        id="po"
        className="transition-all duration-300 hover:scale-110 hover:bg-[#313231] hover:w-[110px] hover:h-[30px] rounded text-center">
        Uplay
      </p>
      <i className="fa fa-search text-gray-400" />
      <i className="fa fa-shopping-cart text-gray-400" />
      <p id="pt" className="text-[15px]">
        Առցանց խանութ
      </p>
      <i className="fa fa-credit-card text-gray-400" />
      <p
        id="pv"
        className="bg-[#b4f293] text-black w-[110px] h-[30px] rounded text-center transition hover:border hover:border-green-400">
        Վճարել
      </p>
    </div>
  </div>

  <img
    id="img2"
    src="https://www.ucom.am/storage/files/digital-banner-screens-02.png-786x_-quality(75)-webp(80)-o(png).webp"
    alt=""
    className="mx-auto my-10 w-[1400px] h-[600px] rounded-2xl"
  />

  <div className="flex justify-between gap-6 mx-auto">
    {[ "is1", "is2", "is3", "is4",].map((id, i) => (
      <img
        key={id}
        id={id}
        src={`https://www.ucom.am/storage/files/${i + 1}.png`}
        alt=""
        className="w-[300px] h-[400px] border border-gray-500 rounded-2xl transition-all duration-300 hover:scale-110"
      />
    ))}
  </div>

  <p id="pr" className="text-white text-[35px] font-sans my-10">
    Լավագույն առաջարկ
  </p>

  <div className="flex gap-[100px]">
    <div className="border border-gray-500 w-[300px] h-[350px] rounded-lg">
      <p
        id="pto"
        className="bg-[#71c313] text-white text-center h-[50px] rounded-lg text-lg flex items-center justify-center">
        BUSINESS Basic
      </p>
      <p className="text-white mt-4">20 ԳԲ ինտերնետ</p>
      <p className="text-white">1000 րոպե</p>
      <p className="text-white">1000 SMS</p>
      <p className="text-white mt-4">2800֏</p>
      <br /><br />
      <p
        id="dvo"
        className="bg-[#7CE00B] w-[150px] h-[30px] text-center rounded font-bold mx-auto mt-4 transition hover:bg-green-300">
        Միանալ
      </p>
    </div>

    <div className="border border-gray-500 w-[300px] h-[350px] rounded-lg">
      <p
        id="pto2"
        className="bg-[#71c313] text-white text-center h-[50px] rounded-lg text-lg flex items-center justify-center">
        BUSINESS Optimum
      </p>
      <p className="text-white mt-4">Անսահմանափակ ինտերնետ</p>
      <p className="text-white">3000 րոպե</p>
      <p className="text-white">3000 SMS</p>
      <p className="text-white mt-4">5000֏</p>
      <br /><br />
      <p
        id="dvo2"
        className="bg-[#7CE00B] w-[150px] h-[30px] text-center rounded font-bold mx-auto mt-4 transition hover:bg-green-300">
        Միանալ
      </p>
    </div>
        <div className="border border-gray-500 w-[300px] h-[350px] rounded-lg">
      <p
        id="pto2"
        className="bg-[#71c313] text-white text-center h-[50px] rounded-lg text-lg flex items-center justify-center">
        uNet Corporate Basic
      </p>
      <p className="text-white mt-4">35Մբ/վ արագություն</p>
      <p className="text-white">Wi-Fi սարք</p>
      <p className="text-white">FTTH տեխնոլոգիա</p>
      <p className="text-white mt-4">18000֏</p>
      <br /><br />
      <p
        id="dvo2"
        className="bg-[#7CE00B] w-[150px] h-[30px] text-center rounded font-bold mx-auto mt-4 transition hover:bg-green-300">
        Միանալ
      </p>
    </div>
       <div className="border border-gray-500 w-[300px] h-[350px] rounded-lg">
      <p
        id="pto2"
        className="bg-[#71c313] text-white text-center h-[50px] rounded-lg text-lg flex items-center justify-center">
        uNet Corporate Premium
      </p>
      <p className="text-white mt-4">75Մբ/վ արագություն</p>
      <p className="text-white">Wi-Fi սարք</p>
      <p className="text-white">FTTH տեխնոլոգիա</p>
      <p className="text-white mt-4">40000֏</p>
      <br /><br />
      <p
        className="bg-[#7CE00B] w-[150px] h-[30px] text-center rounded font-bold mx-auto mt-4 transition hover:bg-green-300">
        Միանալ
      </p>
    </div>
       <div className="border border-gray-500 w-[300px] h-[350px] rounded-lg">
      <p
        id="pto2"
        className="bg-[#71c313] text-white text-center h-[50px] rounded-lg text-lg flex items-center justify-center">
        Uplay Business Extra
      </p>
      <p className="text-white mt-4">165+ հեռուստաալիք՝</p>
      <p className="text-green mt-4">Uplay հարթակում</p>
      <p className="text-white">34 HD ալիք</p>
      <p className="text-white">7 օր Catch-up</p>
      <p className="text-white">Անվճար Smart TV Box</p>
      <p className="text-white mt-4">4900֏</p>
      <br /><br />
      <p
        className="bg-[#7CE00B] w-[150px] h-[30px] text-center rounded font-bold mx-auto mt-4 transition hover:bg-green-300">
        Միանալ
      </p>
    </div>
  </div>
</section>

  );
}

export default Business;
