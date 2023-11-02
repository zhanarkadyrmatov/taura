import React from "react";
import HeaderComponent from "../Component/HeaderComponent";
import FooterComponent from "../Component/FooterComponent";
import Slide1 from "../assets/slide1.png";
import Slide2 from "../assets/slide2.png";
import Slide3 from "../assets/slide3.png";
import { NavLink } from "react-router-dom";
import { ScrollToTopOnMount } from "../utils/ScrollToTopOnMount";
const Slide = [
  {
    id: 1,
    img: Slide1,
    title: "Хранение и консолидация",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 2,
    img: Slide2,
    title: "Почтовый форвардинг",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 3,
    img: Slide3,
    title: "Трэкинг",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 4,
    img: Slide2,
    title: "Перепарковка и объединение",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 5,
    img: Slide1,
    title: "Хранение и консолидация",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 6,
    img: Slide2,
    title: "Почтовый форвардинг",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];
function ServicesPage() {
  return (
    <>
      <ScrollToTopOnMount />
      <HeaderComponent />
      <main className="mb-[40px] mt-[100px]  lg:mb-[70px] xl:mb-[100px]">
        <div className="services xl:py-[100px] py-[60px] lg:py-[80px] mb-[40px] lg:mb-[70px] xl:mb-[120px]">
          <div className="container">
            <h2 className="text-[#FFF] font-[AtypDisplay]  text-[46px] lg:text-[76px] xl:text-[96px] font-normal leading-normal">
              Услуги
            </h2>
            <p className="text-[#FFF] font-[AtypDisplay]  text-[15px] lg:text-[26px] xl:text-[36px] font-normal leading-normal">
              Что мы можем и что Вы можете ожидать от нас
            </p>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 gap-[40px]  lg:grid-cols-3 lg:gap-[23px] xl:gap-[32px]">
            {Slide.map((item) => {
              return (
                <div className="w-[100%]" key={item.id}>
                  <img
                    className="w-full h-[180px] lg:h-[200px] xl:h-[350px] rounded-[40px]"
                    src={item.img}
                    alt=""
                  />
                  <h1 className="flex justify-between items-center gap-2 text-[#161616] font-[AtypDisplay]  xl:text-[26px] xl:my-[30px] mt-[10px] mb-[16px] text-[18px] lg:text-[18px] lg:mt-[20px] lg:mb-[18px]  font-normal uppercase">
                    <span>{item.title}</span> <span>0{item.id}</span>
                  </h1>
                  <p className="text-[#161616] text-justify font-Ubuntu text-[13px] font-normal leading-[185%] lg:text-[14px]">
                    {item.text}
                  </p>
                  <div className="flex justify-end">
                    <NavLink
                      className="text-[#1C1C1C] font-[AtypDisplay]  lg:text-[15px]  xl:text-[26px] font-normal leading-[185%] border-b-[1px]  border-black mt-[6px]"
                      to={`/services/:${item.id}`}
                    >
                      Подробнее
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
}

export default ServicesPage;
