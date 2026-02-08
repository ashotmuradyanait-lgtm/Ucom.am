
function Rouming() {
  return (
 <section>
   <div
      className="
        flex flex-wrap md:flex-nowrap
        justify-center md:justify-end
        gap-3
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
            transition-all duration-300 h-[25px]
            hover:scale-110 hover:bg-[yellowgreen]
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
<div className="w-full md:w-[800px] mx-auto h-[300px] border border-gray-400 rounded-[20px] text-center bg-cover bg-center"
     style={{ backgroundImage: "url('https://www.ucom.am/storage/files/image-5-_x358-quality(75)-webp(80).png?token=9e55fd48d20e54f5a40a14823480a418')" }}>
  
  <h1 className="text-2xl font-bold mt-4">Ռումինգ</h1>

  <div className="flex justify-center items-center gap-5 p-2 flex-wrap">
    <h4 className="border-b-2 border-[#7CE00B] font-sans">Ռոումինգ</h4>
    <h4 className="font-sans">Միջազգային զանգեր</h4>
  </div>

  <h4 className="text-gray-400 block font-sans mt-2">Երկիր</h4>

  <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-2 px-4">
    <input
      type="text"
      placeholder="Նշեք երկիրը"
      className="w-full md:w-[500px] h-[43px] border border-gray-400 px-3 outline-none rounded-md"
    />
    <button className="bg-[#7CE00B] text-black px-4 py-2 rounded-[10px] w-[150px] h-[40px] hover:bg-green-300 transition w-full md:w-auto">
      Որոնել
    </button>
  </div>

  <h5 className="text-gray-400 mt-4">Հիմնական ուղղություններ</h5>

  <div className="flex flex-wrap justify-center gap-5 px-4 mt-3">
    {[
      { img: "CY", name: "Կիպրոս" },
      { img: "EG", name: "Եգիպտոս" },
      { img: "GE", name: "Վրաստան" },
      { img: "IT", name: "Իտալիա" },
      { img: "AE", name: "ԱՄԷ" },
    ].map((c, i) => (
      <div key={i} className="text-center">
        <img src={`https://www.ucom.am/images/flags/${c.img}.svg`} className="mx-auto"/>
        <p className="text-gray-400 hover:text-black transition">{c.name}</p>
      </div>
    ))}
  </div>
</div>

<h1 className="text-2xl font-bold text-center mt-10">Ucom ռոումինգ</h1>
<br /> <br />
<div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10 mt-10 flex-wrap px-4">
  {[
    {
      title: "Ակտիվացում *121#",
      text: "Արտերկրում Ձեր Ucom հեռախոսահամարից օգտվելու համար մինչև Հայաստանից մեկնելն ակտիվացրեք ռոումինգ ծառայությունը:",
    },
    {
      title: "Խորհուրդներ ռոումինգի համար",
      text: "Ucom ռոումինգի հետ միշտ կապի մեջ եղեք Ձեր ընտանիքի անդամների և ընկերների հետ:",
    },
    {
      title: "Այցելուների համար",
      text: "Նո՞ր եք ժամանել Հայաստան? Ձեր բջջային հեռախոսը միանալուն պես Դուք անմիջապես կմիանաք Ucom ցանցին։",
    },
  ].map((item, i) => (
    <div key={i} className="text-center max-w-[250px] w-full md:w-auto">
      <h3 className="font-bold mb-2">{item.title}</h3>
      <p className="mb-4">{item.text}</p>
      <p className="border border-[#7CE00B] px-4 py-2 rounded-[10px] w-[100px] h-[40px] mx-auto hover:bg-green-300 transition cursor-pointer">
        Ավելին
      </p>
    </div>
  ))}
</div>
  </section>
  );
}
export default Rouming;