import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Bmw from "../assets/Bmw.png";
import Tesla from "../assets/tesla.png";
import Toyota from "../assets/toyota.png";
import Mazda from "../assets/mazda.png";
import Porsche from "../assets/porsche.png";

const CarLogo = [
  {
    id: 1,
    img: Bmw,
  },
  {
    id: 2,
    img: Tesla,
  },
  {
    id: 3,
    img: Toyota,
  },
  {
    id: 4,
    img: Mazda,
  },
  {
    id: 5,
    img: Porsche,
  },
  {
    id: 6,
    img: Bmw,
  },
  {
    id: 7,
    img: Tesla,
  },
  {
    id: 8,
    img: Toyota,
  },
  {
    id: 9,
    img: Mazda,
  },
  {
    id: 10,
    img: Porsche,
  },
];

function Slider() {
  return (
    <div className="xl:mt-[70px]  lg:mt-[40px] mt-[23px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        grabCursor={true}
        breakpoints={{
          425: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper items-center"
      >
        {CarLogo.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img
                className="w-[100px] lg:w-[150px] xl:w-[250px]"
                src={item.img}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
export default Slider;
