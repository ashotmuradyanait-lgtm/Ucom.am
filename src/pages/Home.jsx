
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css"
import Swiper from "../components/Swiper";
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return ( 
    <>
    <div className="div2">
        <img id="img1" src="https://www.ucom.am/images/main_logo.svg" alt="" />
        <Link to="/tanhamar">Տան համար</Link>
        <br />
        <br />
        <p id="pteg">Շարժական կապ</p>
        <br />
        <br />
        <Link to="/rouming" id="p2">Ռոումինգ</Link>
        <br />
        <br />
        <p id="p3">5G ցանց</p>
        <br />
        <br />
        <p id="p4">Uplay</p>
        <br /> <br />
        <br /><br />
        <i className="fa fa-search" aria-hidden="true" />
        <br />
        <br />
        <i className="fa fa-shopping-cart" aria-hidden="true" />
        <p id="pt">Առցանց խանութ</p>
        <br />
        <br />
        <i className="fa fa-credit-card" aria-hidden="true" />
      <div id="pv">
      <button onClick={() => setIsOpen(!isOpen)}>
        Վճարել
      </button>

      {isOpen && (
        <div className="card">
         <h3>Համալրեք Ձեր հաշիվն առցանց</h3>
         <img id="hook1" src="https://www.ucom.am/storage/files/rectangle-513-1.png-_x35-quality(75)-webp(80)-o(png).webp?token=83544146107f1d0341162aa6236c6ecb" alt="" />
        <img id="hook2" src="https://www.ucom.am/storage/files/capture-1.png-_x35-quality(75)-webp(80)-o(png).webp?token=5372c32f423c6a04592951e57a818c08" alt="" />
        
        </div>
      )}
    </div>
        </div>
    <Swiper />
    <section>
      <div className="div2">
    </div>
  <br />
  <br />
  <div className="dvushik">
    <img
      id="is1"
      src="https://www.ucom.am/storage/files/iphone17-ineco-web.png-_x622-quality(75)-webp(80)-o(png).webp?token=8675e81b04ff46bdb206594558f25f04"
      alt=""
    />
    <img
      id="is2"
      src="https://www.ucom.am/storage/files/honorx7d-arm.png-_x622-quality(75)-webp(80)-o(png).webp?token=14284b207caef93238f80e519ebbf71c"
      alt=""
    />
    <img
      id="is3"
      src="https://www.ucom.am/storage/files/applewatch11-web.jpg-_x622-quality(75)-webp(80)-o(jpg).webp?token=43a46e487fe2a973ae7ea1d6b5b5a0f9"
      alt=""
    />
    <img
      id="is4"
      src="https://www.ucom.am/storage/files/ucoin-web-650x920-arm-1.png-_x622-quality(75)-webp(80)-o(png).webp?token=9646ae90f8d1a758a987d014c22189d9"
      alt=""
    />
    <img
      id="is5"
      src="https://www.ucom.am/storage/files/macbook-air-ny-web-1.jpg-_x622-quality(75)-webp(80)-o(jpg).webp?token=01c37ac1c6f0ee9bbbd37fd198ed9ee1"
      alt=""
    />
  </div>
  <div>
    <p id="pr">Լավագույն առաջարկ</p>
  </div>
  <div className="amboxj">
    <div className="divik">
      <div className="divik2">
        <p id="pto">Level Up+ 3000</p>
        <i id="k1" className="fa fa-globe" aria-hidden="true" />
        <p>30 ԳԲ ինտերնետ</p>
        <div className="xcho">
        <img src="https://www.ucom.am/storage/files/instagram.svg" alt="" />
        <img src="https://www.ucom.am/storage/files/youtube.svg" alt="" />
        <img
          id="im"
          src="https://www.ucom.am/storage/files/yandex-taxi.svg"
          alt=""
        />
        <img
          id="im2"
          src="https://www.ucom.am/storage/files/viber.svg"
          alt=""
        />
        <img id="im3" src="https://www.ucom.am/storage/files/gg.svg" alt="" />
        <img
          id="im4"
          src="https://www.ucom.am/storage/files/duolingo.svg"
          alt=""
        />
        </div>
      </div>
      <i id="k2" className="fa fa-volume-control-phone" aria-hidden="true" />
      <p>1500 րոպե</p>
      <div className="frula">
      <img
        id="ig1"
        src="https://www.ucom.am/storage/files/flag-01.svg"
        alt=""
      />
      <img
        id="ig2"
        src="https://www.ucom.am/storage/files/flag-03.svg"
        alt=""
      />
      <img
        id="ig3"
        src="https://www.ucom.am/storage/files/flag-for-armenia-svgrepo-com.svg"
        alt=""
      />
      <img
        id="ig4"
        src="https://www.ucom.am/storage/files/ca-circle-01.png-64x_-quality(75)-webp(80)-o(png).webp?token=fde3fb0e5e63c798e892358d6f79fb87"
        alt=""
      />
      </div>
      <i className="fa fa-commenting-o" aria-hidden="true" />
      <p>300 SMS</p>
      <p>35 հեռուստաալիք՝</p>
      <p id="a">Uplay հարթակում</p>
      <div className="hunan">
      <img
        src="https://www.ucom.am/storage/files/fast-sport.png-96x_-quality(75)-webp(80)-o(png).webp?token=9186d06caeafdfa426cd01f57aeb0aa6"
        alt=""
      />
      <img
        id="ff"
        src="https://www.ucom.am/storage/files/images.png-96x_-quality(75)-webp(80)-o(png).webp?token=a2c358da767c37f8bae37d75627d1d59"
        alt=""
      />
      <img
        src="https://www.ucom.am/storage/files/download_15.png-96x_-quality(75)-webp(80)-o(png).webp?token=8cb4fc7679f1b5fb98b40a0664e60ef5"
        alt=""
      />
      </div>
      <p id="ptego">3000֏ Ավելին</p>
      <p id="dvo">Միանալ</p>
    </div>
    <div className="cros2">
      <p id="pto2">Level Up+ 4000</p>
      <i id="a3" className="fa fa-globe" aria-hidden="true" />
      <p>Անսահմանափակ ինտերնետ</p>
      <i id="a2" className="fa fa-volume-control-phone" aria-hidden="true" />
      <p>700 րոպե</p>
      <div className="type4">
      <img src="https://www.ucom.am/storage/files/instagram.svg" alt="" />
      <img src="https://www.ucom.am/storage/files/youtube.svg" alt="" />
      <img
        id="imgh"
        src="https://www.ucom.am/storage/files/yandex-taxi.svg"
        alt=""
      />
      <img
        id="imgh2"
        src="https://www.ucom.am/storage/files/viber.svg"
        alt=""
      />
      <img id="imgh3" src="https://www.ucom.am/storage/files/gg.svg" alt="" />
      <img
        id="imgh4"
        src="https://www.ucom.am/storage/files/duolingo.svg"
        alt=""
      />
      </div>
      <i id="a" className="fa fa-commenting" aria-hidden="true" />
      <p>500 SMS</p>
      <p>35 հեռուստաալիք՝</p>
      <p id="ptvo">Uplay հարթակում</p>
      <div className="type5">
      <img
        src="https://www.ucom.am/storage/files/fast-sport.png-96x_-quality(75)-webp(80)-o(png).webp?token=9186d06caeafdfa426cd01f57aeb0aa6"
        alt=""
      />
      <img
        id="ff2"
        src="https://www.ucom.am/storage/files/images.png-96x_-quality(75)-webp(80)-o(png).webp?token=a2c358da767c37f8bae37d75627d1d59"
        alt=""
      />
      <img
        src="https://www.ucom.am/storage/files/download_15.png-96x_-quality(75)-webp(80)-o(png).webp?token=8cb4fc7679f1b5fb98b40a0664e60ef5"
        alt=""
      />
      </div>
      <p id="ptego2">4000֏ Ավելին</p>
      <p id="dvo2">Միանալ</p>
    </div>
    <div className="dvolo">
      <p id="pto4">Level Up+ 5000</p>
      <i id="ha3" className="fa fa-globe" aria-hidden="true" />
      <p>Անսահմանափակ ինտերնետ</p>
      <i id="ha2" className="fa fa-volume-control-phone" aria-hidden="true" />
      <p>3000 րոպե</p>
      <div className="type2">
      <img src="https://www.ucom.am/storage/files/instagram.svg" alt="" />
      <img src="https://www.ucom.am/storage/files/youtube.svg" alt="" />
      <img
        id="imt"
        src="https://www.ucom.am/storage/files/yandex-taxi.svg"
        alt=""
      />
      <img id="imt2" src="https://www.ucom.am/storage/files/viber.svg" alt="" />
      <img id="imt3" src="https://www.ucom.am/storage/files/gg.svg" alt="" />
      <img
        id="imt4"
        src="https://www.ucom.am/storage/files/duolingo.svg"
        alt=""
      />
      </div>
      <i id="ha" className="fa fa-commenting" aria-hidden="true" />
      <p>1000 SMS</p>
      <img
        id="imgik"
        src="https://www.ucom.am/storage/files/roaming-copy.svg"
        alt=""
      />
      <p id="H">200 ՄԲ ռոումինգում</p>
      <p>35 հեռուստաալիք՝</p>
      <p id="ptvo2">Uplay հարթակում</p>
      <div className="type3">
      <img
        src="https://www.ucom.am/storage/files/fast-sport.png-96x_-quality(75)-webp(80)-o(png).webp?token=9186d06caeafdfa426cd01f57aeb0aa6"
        alt=""
      />
      <img
        id="ff3"
        src="https://www.ucom.am/storage/files/images.png-96x_-quality(75)-webp(80)-o(png).webp?token=a2c358da767c37f8bae37d75627d1d59"
        alt=""
      />
      <img
        src="https://www.ucom.am/storage/files/download_15.png-96x_-quality(75)-webp(80)-o(png).webp?token=8cb4fc7679f1b5fb98b40a0664e60ef5"
        alt=""
      />
      </div>
      <p id="ptego2">5000֏ Ավելին</p>
      <p id="dvo3">Միանալ</p>
    </div>
    <div className="Hayk">
      <p id="pto5">Unity 12500</p>
      <i id="sa4" className="fa fa-wifi" aria-hidden="true" />
      <p>Super Wi-Fi սարք</p>
      <i id="sa3" className="fa fa-home" aria-hidden="true" />
      <p>400ՄԲ/վ տան ինտերնետ</p>
      <p>200+ հեռուստաալիք՝</p>
      <p id="ptvo2">Uplay հարթակում</p>
      <div className="type">
      <img
        src="https://www.ucom.am/storage/files/fast-sport.png-96x_-quality(75)-webp(80)-o(png).webp?token=9186d06caeafdfa426cd01f57aeb0aa6"
        alt=""
      />
      <img
        id="ff4"
        src="https://www.ucom.am/storage/files/images.png-96x_-quality(75)-webp(80)-o(png).webp?token=a2c358da767c37f8bae37d75627d1d59"
        alt=""
      />
      <img
        src="https://www.ucom.am/storage/files/download_15.png-96x_-quality(75)-webp(80)-o(png).webp?token=8cb4fc7679f1b5fb98b40a0664e60ef5"
        alt=""
      />
      <img
        id="klto"
        src="https://www.ucom.am/storage/files/whatsapp-image-2025-04-28-at-163314.png-40x_-quality(75)-webp(80)-o(png).webp?token=79451e7a68594b1335531c5d93092d01"
        alt=""
      />
      </div>
      <p>Անվճար Premium WiFi Plus սարք,</p>
      <p>Smart TV box</p>
      <i id="sa2" className="fa fa-globe" aria-hidden="true" />
      <p>Անսահմանափակ ինտերնետ</p>
      <i id="sa" className="fa fa-volume-control-phone" aria-hidden="true" />
      <p>3000 րոպե</p>
      <p id="ptego2">12500֏ Ավելին</p>
      <p id="dvo3">Միանալ</p>
    </div>
  </div>
  <p id="hv">Դարձեք Ucom-ի բաժանորդ Ձեր հեռախոսահամարով</p>
  <div className="all">
    <div className="hov">
      <p id="cro">1</p>
      <p id="cro2">Լրացրեք դիմում հայտը</p>
    </div>
    <div className="hov2">
      <p id="crov">2</p>
      <p id="crov2">
        1 աշխատանքային օրվա ընթացքում <br />
        Ձեր հեռախոսահամարը կտեղափոխվի <br />
        Ucom ցանց
      </p>
    </div>
    <div className="hov3">
      <p id="crol">3</p>
      <p id="crol2">
        Տեղադրեք քարտը <br />
        հեռախոսի մեջ և վայելեք <br />
        շփումը
      </p>
    </div>
  </div>
  <div className="new">
    <p id="pch">Բջջային համարի տեղափոխում</p>
    <p id="id">
      Ուզում եք միանալ Ucom-ին, բայց չե՞ք ցանկանում փոխել այլ օպերատորի Ձեր
      հեռախոսահամարը: Պարզապես լրացրեք անհրաժեշտ <br />
      տվյալները ստորև, միացեք Ucom-ին:
    </p>
    <i id="fg" className="fa fa-user" aria-hidden="true">
      Տեղափոխվող համարների քանակը անսահմանափակ է
    </i>
    <i id="fg2" className="fas fa-sim-card" style={{ fontSize: 16 }}>
      Համարը Ucom-ի ցանց տեղափոխելն անվճար է
    </i>
    <br />
    <br />
    <div className="d">
      <p id="mi">Միանալ</p>
      <i id="i" className="fa fa-info-circle" aria-hidden="true">
        Ավելին
      </i>
    </div>
  </div>
  <div className="nyuton">
    <img
      className="image"
      src="https://www.ucom.am/storage/files/mobile-id-web-10-1.png-1232x_-quality(75)-webp(80)-o(png).webp?token=8236c8c8938c11d27c891376d51140d9"
      alt=""  
    />
    <div className="arv">
      <h1>Mobile ID</h1>
      <p id="vf">
        Mobile ID ծառայության շնորհիվ կարող եք անցնել նույնականացում <br />
        և ստորագրել փաստաթղթեր էլեկտրոնային եղանակով՝ արագ <br />
        և անվտանգ։ Ծառայությունը հասանելի է վավեր նույնականացման <br />
        քարտ ունեցող բոլոր ֆիզիկական անձանց։
      </p>
      <br />
      <br />
      <p id="manr">Մանրամասն</p>
    </div>
  </div>
  <div className="gij">
    <div className="cls">
      <p id="csk">Լիցքավորեք ձեր հաշիվը առցանց</p>
      <h4 id="hke">
        Մուտքագրեք Ձեր Ucom շարժական կամ ֆիքսված ծառայությունների <br />
        համարը:
      </h4>
      <br />
      <br />
      <div className="sui">
        <p id="her">Հեռախոսահամար</p>
        <p id="ID">ID</p>
      </div>
      <br />
      <div className="spot">
        <label>
          <span>+374</span>
          <input type="number" placeholder="xx xxx xxx" maxLength={8} />
        </label>
        <i id="w" className="fa fa-credit-card" aria-hidden="true">
          Վճարել
        </i>
      </div>
      <img
        id="visa"
        src="https://www.ucom.am/images/payment_methods.svg"
        alt=""
      />
    </div>
    <div>
      <h1 id="h1">Ucom հավելվածներ</h1>
      <p id="big">
        Բացահայտեք հարմարավետության նոր ձևաչափ <br />
        մեր նորարարական բջջային հավելվածների <br />
        միջոցով:
      </p>
      <br />
      <div className="lriv">
        <div className="u">
          <img
            id="mp3"
            src="https://www.ucom.am/storage/files/rectangle-513-1-48x_-quality(75)-webp(80).png?token=23649e93ba54ee148b059dbedf9e2efe"
            alt=""
          />
          <p id="uplay">Ucom</p>
        </div>
        <div className="hovo">
          <img
            id="mp31"
            src="https://www.ucom.am/storage/files/285x285-48x_-quality(75)-webp(80).png?token=5e834fd78f91e64b19f4e20a77b2d3de"
            alt=""
          />
          <p id="uplay2">Uplay</p>
        </div>
      </div>
      <div className="tz">
        <div className="tozzmedia">
          <img
            id="tozz"
            src="https://www.ucom.am/storage/files/new-upay.svg"
            alt=""
          />
          <p id="uplay3">UPay</p>
        </div>
        <div className="tozzmedia2">
          <img
            id="tozz2"
            src="https://www.ucom.am/storage/files/ukid_1.svg"
            alt=""
          />
          <p id="uplay4">uKid</p>
        </div>
      </div>
    </div>
  </div>
  <div className="vard">
    <div className="vke">
      <p id="nor">Ընտանիքի համար</p>
      <p id="svo">Տան ինտերնետ, բջջային ծառայություններ և TV</p>
      <img
        id="mar"
        src="https://www.ucom.am/storage/files/unity5000-uplay-335x_-quality(75)-webp(80).png?token=06e2232b1afd4d5a58378de3752dd18e"
        alt=""
      />
    </div>
    <div className="vke2">
      <p id="nor">Անհատների համար</p>
      <p id="svoթ">Փաթեթներ (ինտերնետ, զանգեր և SMS)</p>
      <img
        id="mar2"
        src="https://www.ucom.am/storage/files/anhatneri-hamar-335x_-quality(75)-webp(80).png?token=a7c06cc390ea15ea36bc04f8eea8f0c0"
        alt=""
      />
    </div>
  </div>
  <div className="lev">
    <p id="klon">Նորություններ</p>
    <a id="href" href="https://www.ucom.am/news">
      Տեսնել բոլորը
    </a>
  </div>
  <div className="ll">
    <img
      id="lorik"
      src="https://www.ucom.am/storage/files/tigran-mets-900x600.jpg-880x_-quality(75)-webp(80)-o(jpg).webp?token=ecf173a1d002a0b4118d575d6ad4011c"
      alt=""
    />
    <img
      id="lorik2"
      src="https://www.ucom.am/storage/files/untitled-1_1.png-880x_-quality(75)-webp(80)-o(png).webp?token=f19cc9ca431f73ce4ce45f3a882fe752"
      alt=""
    />
    <img
      id="lorik3"
      src="https://www.ucom.am/storage/files/1web_4.png-880x_-quality(75)-webp(80)-o(png).webp?token=25fa3b8158224846639f68351ab97562"
      alt=""
    />
  </div>
  <br />
  <div className="ape">
    <h5>Դեկտեմբեր 26, 2025</h5>
    <h5>Դեկտեմբեր 19, 2025</h5>
    <h5>Դեկտեմբեր 16, 2025</h5>
  </div>
  <br />
  <div className="eee">
    <p>
      Վերաբացվեց Ucom-ի վաճառքի և սպասարկման կենտրոնը Տիգրան Մեծի պողոտայում
    </p>
    <p>
      Ucom-ի աջակցությամբ «Արևորդի» ՀԿ-ն իրականացնում է «Խելացի թռչնադիտարկում»
      կրթական ծրագիրը
    </p>
    <p>
      Ամենալայն 5G ծածկույթի ապահովում, Uplay հարթակի գործարկում, Cerillion-ի
      ներդնում․ Ucom-ն ամփոփում է 2025 թվականը
    </p>
  </div>
  <br />
  <br />
    </section>
    </>
  );
}

export default Home;
