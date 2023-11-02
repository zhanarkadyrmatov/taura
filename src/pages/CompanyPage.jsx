import React from "react";
import HeaderComponent from "../Component/HeaderComponent";
import FooterComponent from "../Component/FooterComponent";
import Compony from "../assets/compony.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import User1 from "../assets/com1.png";
import User2 from "../assets/com2.png";
import User3 from "../assets/com3.png";
import User4 from "../assets/com4.png";
import { ScrollToTopOnMount } from "../utils/ScrollToTopOnMount";

const user = [
  {
    id: 1,
    img: User1,
    name: "Jane Doe",
    title: "Sales-manager",
  },
  {
    id: 2,
    img: User2,
    name: "Travis Scot",
    title: "Product Owner",
  },
  {
    id: 3,
    img: User3,
    name: "Jane Doe",
    title: "Product Owner",
  },
  {
    id: 4,
    img: User4,
    name: "Travis Scot",
    title: "Sales-manager",
  },
  {
    id: 5,
    img: User1,
    name: "Jane Doe",
    title: "Sales-manager",
  },
  {
    id: 6,
    img: User2,
    name: "Travis Scot",
    title: "Product Owner",
  },
  {
    id: 7,
    img: User3,
    name: "Jane Doe",
    title: "Product Owner",
  },
  {
    id: 8,
    img: User4,
    name: "Travis Scot",
    title: "Sales-manager",
  },
];

function CompanyPage() {
  return (
    <>
      <ScrollToTopOnMount />
      <HeaderComponent />
      <main className="mt-[100px] mb-[40px] lg:mb-[70px] xl:mb-[100px]">
        <div className="companypage xl:py-[100px] py-[60px] lg:py-[80px] mb-[40px] lg:mb-[70px] xl:mb-[120px]">
          <div className="container">
            <h2 className="text-[#FFF] font-[AtypDisplay]  text-[46px] lg:text-[76px] xl:text-[96px] font-normal leading-normal">
              О нас
            </h2>
            <p className="text-[#FFF] font-[AtypDisplay]  text-[15px] lg:text-[26px] xl:text-[36px] font-normal leading-normal">
              Коротко о нас и немного о будущих перспективах
            </p>
          </div>
        </div>
        <div className="container">
          <div className="flex justify-center items-center gap-[64px]">
            <div className="xl:w-[100%]">
              <h2 className="text-[#1C1C1C] font-[AtypDisplay]  xl:text-[60px] xl:leading-[81px] lg:text-[50px] leading-normal text-[30px]">
                #1 Общенациональное логистическое решение для доставки
              </h2>
              <p className="text-[#161616] text-justify font-[AtypDisplay]  xl:text-[20px] leading-[185%] mt-[10px] text-[12px] lg:text-[14px] lg:font-normal	">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
            </div>
            <img
              className="w-[322px] hidden lg:block h-[457px] xl:w-[100%] xl:h-[580px] "
              src={Compony}
              alt=""
            />
          </div>
          <div className="xl:grid xl:grid-cols-2 xl:items-center xl:gap-[64px]">
            <div className="w-full  mt-[20px] lg:mt-[30px]">
              <div className="aspect-ratio-16/9 rounded-[30px]">
                <iframe
                  className="w-[100%]  h-[433px] xl:h-[433px] xl:rounded-[30px] rounded-[15px]"
                  width="950"
                  height="534"
                  src="https://www.youtube.com/embed/hZ0JU8h04jY"
                  title="Алмаз Шаадаев &amp; Гуланда - Махабат деген ушундай / Жаны клип 2023"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-[20px] lg:gap-[100px] xl:gap-[20px] items-center">
              <div className="xl:flex xl:justify-between xl:gap-[78px] xl:items-center">
                <h2 className="text-[52px] text-center text-black font-[AtypDisplay]   font-normal lg:text-[72px] xl:text-[92px]">
                  230+
                </h2>
                <p className="text-[#161616] text-center font-[AtypDisplay]  text-[12px] font-normal mt-[10px] opacity-75 lg:text-[14px] xl:text-[18px] xl:text-start">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="xl:flex xl:justify-between xl:gap-[78px] xl:items-center">
                <h2 className="text-[52px] text-center text-black font-[AtypDisplay]   font-normal lg:text-[72px] xl:text-[92px]">
                  145
                </h2>
                <p className="text-[#161616] text-center font-[AtypDisplay]  text-[12px] font-normal mt-[10px] opacity-75 lg:text-[14px] xl:text-[18px] xl:text-start">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="col-span-2 lg:col-span-1 xl:flex xl:justify-between xl:gap-[78px] xl:items-center">
                <h2 className="text-[52px] text-center text-black font-[AtypDisplay]   font-normal lg:text-[72px] xl:text-[92px]">
                  400m
                </h2>
                <p className="text-[#161616] text-center font-[AtypDisplay]   text-[12px] font-normal mt-[10px] px-10 opacity-75 lg:text-[14px] xl:text-[18px] xl:text-start">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F0F0F0] py-[40px] mt-[40px] lg:py-[70px] xl:py-[140px] xl:mt-[140px] lg:mt-[70px] ">
          <div className="container">
            <div className="lg:grid lg:grid-cols-3 xl:gap-[0px] lg:gap-[52px]">
              <h2 className=" col-span-2 text-[#161616] font-[AtypDisplay]  text-[30px] xl:text-[66px] font-normal lg:text-[50px] xl:leading-[83px]">
                Команда проффесианалов и экспертов
              </h2>
              <p className="text-[#161616] text-justify font-[AtypDisplay]  text-[12px] font-normal leading-[22.2px] lg:text-[18px] xl:text-[20px] lg:leading-[185%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
            </div>
          </div>
          <div className="container">
            <Swiper
              slidesPerView={1.8}
              spaceBetween={40}
              freeMode={true}
              pagination={false}
              breakpoints={{
                425: {
                  slidesPerView: 1.8,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 40,
                },
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                  pagination: true,
                },
              }}
              modules={[Pagination, FreeMode]}
              className="mySwiper items-center xl:mt-[49px] mt-[20px]"
            >
              {user.map((item) => {
                return (
                  <SwiperSlide
                    className="relative w-[200px] h-[400px] rounded-[30px] lg:h-[600px] xl:w-[350px] xl:h-[700px]  lg:w-[250px]"
                    key={item.id}
                  >
                    <img className="w-full h-[100%]" src={item.img} alt="" />
                    <div className=" absolute bottom-[20px] xl:bottom-[30px] left-0 bg-white py-[6px] px-[10px] lg:px-[20px] lg:py-[10px] rounded-r-[10px] lg:rounded-r-[20px]">
                      <h2 className="text-[#161616] text-justify font-[AtypDisplay]  text-[15px] xl:text-[26px] lg:text-[20px] mr-10 font-normal">
                        {item.name}
                      </h2>
                      <p className="text-[#161616] text-justify font-[AtypDisplay]  lg:text-[14px] text-[12px] xl:text-[20px] font-normal">
                        {item.title}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
}

export default CompanyPage;
