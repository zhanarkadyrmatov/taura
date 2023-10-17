import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

function CliderScroll({ props }) {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        breakpoints={{
          425: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
        modules={[Pagination, FreeMode]}
        className="mySwiper items-center xl:mt-[49px] mt-[20px]"
      >
        {props.map((item) => {
          return (
            <SwiperSlide className="w-[340px] lg:w-[440px]" key={item.id}>
              <img
                className="w-full h-[160px] lg:h-[260px] rounded-[40px]"
                src={item.img}
                alt=""
              />
              <h1 className="flex justify-between items-center gap-2 text-[#161616] font-[AtypDisplay]  xl:text-[26px] xl:my-[30px] my-[6px] text-[18px] lg:text-[24px] lg:mt-[20px] lg:mb-[28px]  font-normal uppercase">
                <span>{item.title}</span> <span>0{item.id}</span>
              </h1>
              <p className="text-[#161616] text-justify font-Ubuntu text-[12px] font-normal leading-[185%] lg:text-[16px]">
                {item.text}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CliderScroll;
