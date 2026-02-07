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
        <img className="flex justify-center items-center rounded-lg h-[700px] w-[1700px]" src="https://www.ucom.am/storage/files/utravel-1029x1689-arm.jpg-786x_-quality(75)-webp(80)-o(jpg).webp?token=51827171eccae6f7b0ab598fd35e0fa7" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="flex justify-center items-center rounded-lg h-[700px] w-[1700px]" src="https://www.ucom.am/storage/files/nicenumber-levelup-1029x1689-07-am.png-786x_-quality(75)-webp(80)-o(png).webp?token=128e14d1736dd08982273ccad9ada0fe" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="flex justify-center items-center rounded-lg h-[700px] w-[1700px]" src="https://www.ucom.am/storage/files/eternia-updated-1029x1689-arm.jpg-786x_-quality(75)-webp(80)-o(jpg).webp?token=ec2d0b4f744b69df18b1739cc5ff1d7a" />
      </SwiperSlide>
       <SwiperSlide>
        <img className="flex justify-center items-center rounded-lg h-[700px] w-[1700px]" src="https://www.ucom.am/storage/files/5g-sc-2-web-mobile-1.jpg-786x_-quality(75)-webp(80)-o(jpg).webp?token=0ca8e27f74a0f571be73f98e0b7eda19" />
      </SwiperSlide>
       <SwiperSlide>
        <img className="flex justify-center items-center rounded-lg h-[700px] w-[1700px]" src="https://www.ucom.am/storage/files/iphone17pro-1029x1689-armjpg.jpg-786x_-quality(75)-webp(80)-o(jpg).webp?token=ce2bff5745dee2d9422daa5df751db80" />
      </SwiperSlide>
    </Swiper>
  );
}

export default AutoSwiper;

