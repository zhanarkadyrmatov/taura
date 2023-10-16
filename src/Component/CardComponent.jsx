import React from "react";
import Card from "../utils/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import Union from "../assets/Union.png";
import icon from "../assets/card_icon.png";
import { NavLink } from "react-router-dom";

const Items = [
  {
    id: 1,
    img: Union,
    name: "Lorem Ipsum is simply dummy text of the printing",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardt... ",
  },
  {
    id: 2,
    img: Union,
    name: "Lorem Ipsum is simply dummy text of the printing",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardt...",
  },
  {
    id: 3,
    img: Union,
    name: "Lorem Ipsum is simply dummy text of the printing",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardt... ",
  },
];

function CardComponent() {
  return (
    <div className="my-[40px] lg:my-[70px] xl:my-[140px]">
      <div className="container">
        <h2 className="text-[24px] text-[#161616] font-AtypDisplay font-normalleading-normal lg:text-[50px] xl:text-[60px] xl:text-center">
          Будьте в курсе наших последних событий
        </h2>
        <p className="text-[12px] opacity-70 text-[#161616] font-AtypDisplay font-normal leading-normal mt-[10px] lg:leading-[185%] lg:text-[16px] xl:text-[20px] xl:text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text
        </p>
      </div>

      <div className="lg:max-w-[1570px] lg:px-[20px] lg:mx-auto">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={23}
          scrollbar={{
            el: ".swiper-scrollbar",
            draggable: true,
          }}
          freeMode={true}
          breakpoints={{
            425: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
          }}
          modules={[Pagination, FreeMode]}
          className="mySwiper grid grid-cols-3 gap-[20px] xl:gap-[86px] mt-[20px] xl:mt-[50px]"
        >
          {Items.map((e) => {
            return (
              <SwiperSlide key={e.id} className="w-[100%]">
                <div className="w-[100%] icon relative">
                  <img className="w-full rounded-[15px]" src={e.img} alt="" />
                  <span className="p-1 lg:p-[10px] bg-white rounded-[15px] absolute bottom-0 right-0">
                    <NavLink className=" cursor-pointer" to={"/news/:id"}>
                      <img
                        className="bg-black p-[15px] rounded-[15px] xl:w-[90px] xl:h-[90px] lg:w-[60px] lg:h-[60px] w-[50px] h-[50px]"
                        src={icon}
                        alt=""
                      />
                    </NavLink>
                  </span>
                </div>
                <h2 className="text-dark font-AtypDisplay text-[16px] lg:text-[20px] xl:text-[30px] lg:mt-[30px] mt-[10px]  leading-[185%]">
                  {e.name}
                </h2>
                <p className="text-[#161616] font-AtypDisplay lg:text-[16px] text-[12px] xl:text-[20px] leading-[185%] ">
                  {e.title}
                </p>
                <p className="flex justify-between items-center text-[#161616] font-AtypDisplay lg:text-[18px] xl:text-[20px] text-[14px] mt-[10px] xl:mt-[16px]">
                  <span className="flex justify-between items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M18 9C18 9 14.625 2.8125 9 2.8125C3.375 2.8125 0 9 0 9C0 9 3.375 15.1875 9 15.1875C14.625 15.1875 18 9 18 9ZM1.31963 9C1.86358 8.17326 2.48922 7.40327 3.18712 6.70162C4.635 5.2515 6.615 3.9375 9 3.9375C11.385 3.9375 13.3639 5.2515 14.814 6.70162C15.5119 7.40327 16.1375 8.17326 16.6815 9C16.6163 9.09788 16.5443 9.20587 16.4621 9.324C16.0853 9.864 15.5284 10.584 14.814 11.2984C13.3639 12.7485 11.3839 14.0625 9 14.0625C6.615 14.0625 4.63613 12.7485 3.186 11.2984C2.4881 10.5967 1.86359 9.82673 1.31963 9Z"
                        fill="#161616"
                      />
                      <path
                        d="M9 6.1875C8.25408 6.1875 7.53871 6.48382 7.01126 7.01126C6.48382 7.53871 6.1875 8.25408 6.1875 9C6.1875 9.74592 6.48382 10.4613 7.01126 10.9887C7.53871 11.5162 8.25408 11.8125 9 11.8125C9.74592 11.8125 10.4613 11.5162 10.9887 10.9887C11.5162 10.4613 11.8125 9.74592 11.8125 9C11.8125 8.25408 11.5162 7.53871 10.9887 7.01126C10.4613 6.48382 9.74592 6.1875 9 6.1875ZM5.0625 9C5.0625 7.95571 5.47734 6.95419 6.21577 6.21577C6.95419 5.47734 7.95571 5.0625 9 5.0625C10.0443 5.0625 11.0458 5.47734 11.7842 6.21577C12.5227 6.95419 12.9375 7.95571 12.9375 9C12.9375 10.0443 12.5227 11.0458 11.7842 11.7842C11.0458 12.5227 10.0443 12.9375 9 12.9375C7.95571 12.9375 6.95419 12.5227 6.21577 11.7842C5.47734 11.0458 5.0625 10.0443 5.0625 9Z"
                        fill="#161616"
                      />
                    </svg>
                    457
                  </span>
                  <span>03.01.2021</span>
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default CardComponent;
