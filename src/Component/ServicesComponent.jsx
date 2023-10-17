import React from "react";

import Slide1 from "../assets/slide1.png";
import Slide2 from "../assets/slide2.png";
import Slide3 from "../assets/slide3.png";
import CliderScroll from "../utils/CliderScroll";

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
  {
    id: 7,
    img: Slide3,
    title: "Трэкинг",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 8,
    img: Slide2,
    title: "Перепарковка и объединение",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

function ServicesComponent() {
  return (
    <div className="mt-[40px] lg:mt-[70px] xl:mt-[140px]">
      <div className="container">
        <h2 className="text-[#1C1C1C] xl:text-[66px] lg:text-[50px]   font-[AtypDisplay]  text-[24px] font-normal ">
          Наши услуги
        </h2>
        <p className="text-[#161616] lg:text-[18px] xl:text-[26px] font-[AtypDisplay]  text-[12px] opacity-70 leading-[180%] font-normal mt-[10px] ">
          Мы не просто поставщик логистических услуг, мы ваш стратегический
          партнер на пути к успеху. Вот почему наши клиенты доверяют нам:
        </p>
      </div>
      <div>
        <CliderScroll props={Slide} />
      </div>
    </div>
  );
}

export default ServicesComponent;
