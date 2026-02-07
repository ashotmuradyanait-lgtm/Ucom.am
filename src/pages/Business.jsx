import React from "react";
function Business() {
  return (
<section className="bg-black min-h-screen">
  <div
    className="w-full md:w-[800px] mx-auto flex flex-col md:flex-row items-center md:justify-between border-b border-gray-500px-4 md:px-6 py-4gap-4">
    <img
      src="https://www.ucom.am/images/main_logo.svg"
      alt=""
      className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"/>

    <div
      className="
        flex flex-wrap md:flex-nowrap
        justify-center md:justify-end
        gap-3
        text-sm font-medium text-white items-center
      "
    >
      {[
        "Շարժական կապ",
        "Ֆիքսված ծառայություններ",
        "Բիզնես լուծումներ",
        "Ամպային լուծումներ",
        "Uplay",
      ].map((item, i) => (
        <p
          key={i}
          className="
            transition-all duration-300
            hover:scale-110 hover:bg-[#313231]
            px-3 py-1 rounded text-center
          "
        >
          {item}
        </p>
      ))}

      <i className="fa fa-search text-gray-400" />
      <i className="fa fa-shopping-cart text-gray-400" />
      <p className="text-[15px]">Առցանց խանութ</p>
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

  <img
    src="https://www.ucom.am/storage/files/digital-banner-screens-02.png-786x_-quality(75)-webp(80)-o(png).webp"
    alt=""
    className="
      mx-auto my-6 md:my-10
      w-full md:w-[1400px]
      h-[250px] sm:h-[350px] md:h-[600px]
      object-cover rounded-2xl
    "/>
  <div
    className="
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
      gap-6
      mx-auto px-4
    "
  >
    {[1, 2, 3, 4].map((i) => (
      <img
        key={i}
        src={`https://www.ucom.am/storage/files/${i}.png`}
        alt=""
        className="
          w-full h-[300px] sm:h-[200px] md:h-[450px]
          border border-gray-500
          rounded-2xl
          transition-all duration-300 hover:scale-105
        "
      />
    ))}
  </div>
  <p
    className="
      text-white text-[24px] md:text-[35px]
      font-sans my-6 md:my-10
      text-center">
    Լավագույն առաջարկ
  </p>
  <div
    className="
      grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
      gap-8 md:gap-12
      px-4 pb-10
    "
  >
    {[
      {
        title: "BUSINESS Basic",
        items: ["20 ԳԲ ինտերնետ", "1000 րոպե", "1000 SMS"],
        price: "2800֏",
      },
      {
        title: "BUSINESS Optimum",
        items: ["Անսահմանափակ ինտերնետ", "3000 րոպե", "3000 SMS"],
        price: "5000֏",
      },
      {
        title: "uNet Corporate Basic",
        items: ["35Մբ/վ արագություն", "Wi-Fi սարք", "FTTH տեխնոլոգիա"],
        price: "18000֏",
      },
      {
        title: "uNet Corporate Premium",
        items: ["75Մբ/վ արագություն", "Wi-Fi սարք", "FTTH տեխնոլոգիա"],
        price: "40000֏",
      },
      {
        title: "Uplay Business Extra",
        items: [
          "165+ հեռուստաալիք",
          "34 HD ալիք",
          "7 օր Catch-up",
          "Անվճար Smart TV Box",
        ],
        price: "4900֏",
      },
    ].map((card, i) => (
      <div
        key={i}
        className="
          border border-gray-500
          w-full max-w-[400px]
          min-h-[350px]
          rounded-lg
          mx-auto
          text-center
          p-4
        "
      >
        <p
          className="
            bg-[#71c313] text-white
            h-[50px]
            rounded-lg text-lg
            flex items-center justify-center
          "
        >
          {card.title}
        </p>

        <div className="mt-4 space-y-1">
          {card.items.map((it, idx) => (
            <p key={idx} className="text-white">
              {it}
            </p>
          ))}
        </div>

        <p className="text-white mt-4">{card.price}</p>

        <p
          className="
            bg-[#7CE00B]
            w-[150px] h-[30px]
            text-center rounded
            font-bold mx-auto mt-6
            flex items-center justify-center
            transition hover:bg-green-300
          "
        >
          Միանալ
        </p>
      </div>
    ))}
  </div>
</section>


  );
}

export default Business;
