import React from "react";
import Blog from "../assets/blog.png";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import icon from "../assets/card_icon.png";
import { NavLink } from "react-router-dom";

const Items = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697932800&semt=sph",
    name: "КАРГО",
    title:
      "Решили открыть свой магазин? Требуется доставка большой партии груза из Америки, Китая или Турции? Мы рады предложить Вам карго перевозки от 100 кг и выше! Авиа доставка Ваших товаров – залог быстрого и качественного сервиса!",
  },
  {
    id: 2,
    img: "https://img.freepik.com/premium-photo/landscape-high-icy-mountains-near-lake-digital-art-generative-ai_665346-37252.jpg",
    name: "ЛОГИСТИКА",
    title:
      "Благодаря обширной сети партнеров наша компания предлагает самый полный спектр услуг по грузоперевозкам! Экспедирование и оформление, складское хранение и консолидация, таможенное оформление и транспортировка грузов в любую точку!",
  },
  {
    id: 3,
    img: "https://img.freepik.com/premium-photo/painting-mountain-with-trees-water_968519-1139.jpg?w=2000",
    name: "Консолидация",
    title:
      "Заказали несколько товаров из разных магазинов? Мы сэкономим Ваши деньги на доставке! Наша компания предлагает услуги по консолидации грузов. Мы можем собрать все Ваши заказы и доставить единой посылкой!",
  },
];

function BlogComponent() {
  return (
    <div className="container">
      <div className="mt-[57px] ">
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
                spaceBetween: 23,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 23,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 23,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 23,
              },
            }}
            modules={[Pagination, FreeMode]}
            className="mySwiper grid grid-cols-3 gap-[23px] xl:gap-[32px]"
          >
            {Items.map((e) => {
              return (
                <SwiperSlide key={e.id} className="w-[100%]">
                  <div className="">
                    <div className="relative overflow-hidden bg-white w-full lg:h-[265px] h-[150px]  xl:h-[410px]">
                      <div
                        style={{
                          backgroundImage: `url(${e.img})`,
                        }}
                        className="absolute bg-no-repeat bg-center bg-cover inset-[3px] rounded-[15px]     lg:rounded-[30px] xl:rounded-[40px]"
                      >
                        <div className="icon before:rounded-br-[30px] after:rounded-br-[30px] absolute  rounded-tl-[15px] lg:rounded-tl-[30px] w-[60px] h-[58px] lg:w-[85px] lg:h-[85px]  xl:w-[100px] xl:h-[100px] bottom-0 right-0  bg-white">
                          <div className="absolute bottom-0 right-0 ">
                            <div>
                              <span className="text-[30px] lg:text-[40px] xl:text-[50px] font-medium text-ubuntu text-white bg-black p-[8px] lg:p-[15px]  rounded-[15px] lg:rounded-[20px] xl:w-[100px] xl:h-[100px] lg:w-[60px] lg:h-[60px] w-[50px] h-[50px]">
                                0{e.id}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-dark font-[AtypDisplay]  text-[18px] xl:text-24px xl:text-[28px] m-[3px] mt-[10px] xl:mb-[17px] uppercase">
                    {e.name}
                  </h2>
                  <p className="text-dark font-[AtypDisplay]  lg:text-[14px] text-[12px] xl:text-[18px] leading-[185%]">
                    {e.title}
                  </p>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default BlogComponent;
