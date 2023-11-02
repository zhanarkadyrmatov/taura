import React, { useState, useEffect } from "react";
import image from "../assets/herobg.png";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { Parallax, Pagination, Autoplay } from "swiper/modules";

const images = [
  "https://ik.imagekit.io/ikmedia/backlit.jpg",
  image,
  "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
];
function HeroComponent() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Parallax, Pagination, Autoplay]}
        className="mySwiper"
      >
        <div className="absolute top-0 z-10 left-0 w-full h-full">
          <div className="mt-[50px] xl:mt-[100px]">
            <div className="container">
              <div className="lg:grid grid-cols-3 justify-between items-center lg:gap-[0px] xl:gap-[54px] py-[50px] xl:py-[84px] lg:pt-[112px] lg:pb-[60px]">
                <div className=" col-span-2">
                  <h1 className="xl:text-[96px] lg:text-[80px] text-[40px] text-white font-[AtypDisplay] font-normal">
                    Dui sapien aliquet aliquam
                  </h1>
                  <p className=" leading-185 xl:text-[24px] lg:text-[20px] text-[14px] font-[AtypDisplay]  text-white mt-[16px] mb-[30px]">
                    ОсОО “Таура Трнас Логистик компани” - ведущая логистическая
                    компания полного цикла в Кыргызстане.
                  </p>
                  <a
                    className="bg-[#1355A3] py-[10px]  px-[20px] lg:py-[20px] lg:px-[140px] rounded-[15px]  lg:rounded-[30px] font-semibold text-white font-open-sans text-[16px] lg:text-[22px]  "
                    href="#"
                  >
                    GET STARTED
                  </a>
                </div>
                <div className=" hidden lg:block flex-auto p-[20px] xl:py-[30px] xl:px-[40px] bg-white bg-opacity-70  rounded-[30px] ">
                  <h2 className="text-[22px] xl:text-[34px] font-[AtypDisplay]  text-black leading-185">
                    LOREM IPSUM
                  </h2>
                  <p className="text-black font-display text-[17px]  xl:text-[24px] font-normal leading-[185%] mt-[24px] lg:ml-[10px]">
                    Шоппинг в США, Китае, Турции и России стал проще и
                    доступнее! Наша компания предлагает полный спектр услуг по
                    доставке в полный спектр услуг по доставке в
                  </p>
                  <NavLink
                    className="text-black font-display text-[20px] xl:text-[28px] font-normal leading-[185%] uppercase flex justify-end hover:text-[#1355A3]"
                    to={"/company"}
                  >
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        {images.map((e, index) => {
          return (
            <SwiperSlide key={index} className="">
              <img
                className="w-full h-[430px] lg:h-[700px] xl:h-[770px]"
                src={e}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default HeroComponent;
