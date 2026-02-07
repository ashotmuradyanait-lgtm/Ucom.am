import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function AutoSwiper() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img className="flex justify-center items-center rounded-lg h-[700px] w-[1700px]" src="https://www.ucom.am/storage/files/5g-sc-2-web-mobile-1.jpg-786x_-quality(75)-webp(80)-o(jpg).webp?token=0ca8e27f74a0f571be73f98e0b7eda19" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="flex justify-center items-center rounded-lg h-[700px] w-[1700px]" src="https://www.ucom.am/storage/files/102.png-786x_-quality(75)-webp(80)-o(png).webp?token=ada15ffe970e85772befa668086fdc52" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="flex justify-center items-center rounded-lg h-[700px] w-[1700px]" src="https://www.ucom.am/storage/files/digital-banner-screens-02.png-786x_-quality(75)-webp(80)-o(png).webp?token=70a9103d4c5209ac5cc673e6d30a9c4d" />
      </SwiperSlide>
       <SwiperSlide>
        <img className="flex justify-center items-center rounded-lg h-[700px] w-[1700px]" src="https://www.ucom.am/storage/files/wi-fi7-07.png-786x_-quality(75)-webp(80)-o(png).webp?token=e4d01bf1b007a64bb20c0e0a69653166" />
      </SwiperSlide>
       <SwiperSlide>
        <img className="flex justify-center items-center rounded-lg h-[700px] w-[1700px]" src="https://www.ucom.am/storage/files/utravel-1029x1689-arm.jpg-786x_-quality(75)-webp(80)-o(jpg).webp?token=51827171eccae6f7b0ab598fd35e0fa7" />
      </SwiperSlide>
    </Swiper>
  );
}

export default AutoSwiper;