import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeaderComponent from "../Component/HeaderComponent";
import FooterComponent from "../Component/FooterComponent";
import Logo1 from "../assets/link1.png";
import Logo2 from "../assets/link2.png";
import Logo3 from "../assets/link3.png";
import Logo4 from "../assets/link4.png";
import Logo5 from "../assets/link5.png";
import Logo6 from "../assets/link6.png";
import { ScrollToTopOnMount } from "../utils/ScrollToTopOnMount";

const Items = [
  {
    id: 1,
    img: "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
    text: "Для удобства наших клиентов мы осуществляем бесплатную доставку посылок по городу Бишкек. По Вашему заказу мы вручим Ваши отправления лично Вам, либо доверенному лицу (при предъявлении документов, удостоверяющих личность, конечно). Наши курьеры свяжутся с Вами и доставят ваши покупки в любое удобное для Вас место, но не ранее следующего дня после получения груза и в пределах города Бишкек.",
  },
  {
    id: 2,
    img: "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
    text: "Для удобства наших клиентов мы осуществляем бесплатную доставку посылок по городу Бишкек. По Вашему заказу мы вручим Ваши отправления лично Вам, либо доверенному лицу (при предъявлении документов, удостоверяющих личность, конечно). Наши курьеры свяжутся с Вами и доставят ваши покупки в любое удобное для Вас место, но не ранее следующего дня после получения груза и в пределах города Бишкек.",
  },
  {
    id: 3,
    img: "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
    text: "Для удобства наших клиентов мы осуществляем бесплатную доставку посылок по городу Бишкек. По Вашему заказу мы вручим Ваши отправления лично Вам, либо доверенному лицу (при предъявлении документов, удостоверяющих личность, конечно). Наши курьеры свяжутся с Вами и доставят ваши покупки в любое удобное для Вас место, но не ранее следующего дня после получения груза и в пределах города Бишкек.",
  },
];

const Link = [
  {
    id: 1,
    link: "Доставка до двери",
    logo: Logo1,
  },
  {
    id: 2,
    link: "Почтовый форвардинг",
    logo: Logo2,
  },
  {
    id: 3,
    link: "Трекинг",
    logo: Logo3,
  },
  {
    id: 4,
    link: "Хранение и консолидация",
    logo: Logo4,
  },
  {
    id: 5,
    link: "Перепарковка и объединение",
    logo: Logo5,
  },
  {
    id: 5,
    link: "Курьерская Доставка по КР",
    logo: Logo6,
  },
];

function ServicesInPage() {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState();
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <ScrollToTopOnMount />
      <HeaderComponent />
      <div className="price mt-[100px] xl:py-[100px] py-[60px] lg:py-[80px] mb-[40px] lg:mb-[70px] xl:mb-[120px]">
        <div className="container">
          <h2 className="text-[#FFF] font-[AtypDisplay]  text-[30px] lg:text-[50px] xl:text-[60px] font-normal leading-normal">
            Доставка до двери
          </h2>
          <p className="text-[#FFF] font-[AtypDisplay]  text-[15px] lg:text-[24px] xl:text-[36px] font-normal leading-normal">
            Что мы можем и что Вы можете ожидать от нас
          </p>
          <div className=" hidden lg:block relative">
            <div class="w-max z-[1]  absolute left-0 top-[50px] text-left">
              <nav aria-label="breadcrumb">
                <ol class="flex w-full flex-wrap items-center rounded-[20px] bg-white gap-4  p-[20px] drop-shadow-lg">
                  <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500 gap-3">
                    <NavLink class="opacity-60 " to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="22"
                        viewBox="0 0 21 22"
                        fill="none"
                      >
                        <path
                          d="M18.8211 11C18.8211 11.4423 18.4621 11.8012 18.0198 11.8012H4.85505L9.61915 16.691C9.69582 16.7656 9.75677 16.8549 9.79839 16.9535C9.84001 17.052 9.86147 17.158 9.86149 17.265C9.86151 17.372 9.8401 17.4779 9.79851 17.5765C9.75693 17.6751 9.69602 17.7644 9.61938 17.839C9.54273 17.9137 9.45191 17.9723 9.35226 18.0113C9.25261 18.0503 9.14616 18.0689 9.03919 18.0661C8.93222 18.0633 8.8269 18.0391 8.72943 17.9949C8.63197 17.9508 8.54434 17.8875 8.47171 17.8089L2.38389 11.5609C2.23646 11.4114 2.15381 11.2099 2.15381 11C2.15381 10.79 2.23646 10.5885 2.38389 10.4391L8.47171 4.19098C8.54434 4.11239 8.63197 4.04914 8.72943 4.00497C8.8269 3.9608 8.93222 3.93659 9.03919 3.93379C9.14616 3.93098 9.25261 3.94963 9.35226 3.98863C9.45191 4.02763 9.54273 4.0862 9.61938 4.16087C9.69602 4.23555 9.75693 4.32482 9.79851 4.42342C9.8401 4.52202 9.86151 4.62794 9.86149 4.73495C9.86147 4.84196 9.84001 4.94788 9.79839 5.04646C9.75677 5.14504 9.69582 5.23429 9.61915 5.30893L4.85505 10.1987H18.0198C18.4621 10.1987 18.8211 10.5577 18.8211 11Z"
                          fill="#1C1C1C"
                        />
                      </svg>
                    </NavLink>
                    <NavLink class="opacity-60" to="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <g opacity="0.4">
                          <path
                            d="M2.48655 11C2.48655 10.5577 2.84552 10.1988 3.28783 10.1988L16.4526 10.1988L11.6885 5.30902C11.6118 5.23437 11.5508 5.14513 11.5092 5.04654C11.4676 4.94796 11.4461 4.84204 11.4461 4.73503C11.4461 4.62803 11.4675 4.5221 11.5091 4.4235C11.5507 4.3249 11.6116 4.23563 11.6882 4.16096C11.7649 4.08628 11.8557 4.02772 11.9554 3.98871C12.055 3.94971 12.1615 3.93106 12.2684 3.93387C12.3754 3.93668 12.4807 3.96088 12.5782 4.00505C12.6757 4.04923 12.7633 4.11248 12.8359 4.19107L18.9237 10.4391C19.0712 10.5886 19.1538 10.7901 19.1538 11C19.1538 11.21 19.0712 11.4115 18.9237 11.5609L12.8359 17.809C12.7633 17.8876 12.6757 17.9509 12.5782 17.995C12.4807 18.0392 12.3754 18.0634 12.2684 18.0662C12.1615 18.069 12.055 18.0504 11.9554 18.0114C11.8557 17.9724 11.7649 17.9138 11.6882 17.8391C11.6116 17.7645 11.5507 17.6752 11.5091 17.5766C11.4675 17.478 11.4461 17.3721 11.4461 17.265C11.4461 17.158 11.4676 17.0521 11.5092 16.9535C11.5508 16.855 11.6118 16.7657 11.6885 16.6911L16.4526 11.8013L3.28783 11.8013C2.84552 11.8013 2.48655 11.4423 2.48655 11Z"
                            fill="#1C1C1C"
                          />
                        </g>
                      </svg>
                    </NavLink>
                  </li>
                  <li class="flex gap-2 cursor-pointer items-center font-sans text-sm xl:text-[22px] font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                    >
                      <path
                        d="M15.4871 6.72663V15.2736C15.4871 15.8036 15.47 16.2736 15.4102 16.6924C15.1623 18.9403 14.1025 19.5471 11.2136 19.5471H9.50422C6.61533 19.5471 5.5555 18.9403 5.30764 16.6924C5.24781 16.2736 5.23071 15.8036 5.23071 15.2736V6.72663C5.23071 6.19672 5.24781 5.72663 5.30764 5.30783C5.5555 3.05996 6.61533 2.45312 9.50422 2.45312H11.2136C14.1025 2.45312 15.1623 3.05996 15.4102 5.30783C15.47 5.72663 15.4871 6.19672 15.4871 6.72663Z"
                        stroke="#1C1C1C"
                        strokeWidth="1.28205"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.23081 15.2732C5.23081 15.8031 5.24791 16.2732 5.30774 16.692C5.18808 16.7005 5.07697 16.7005 4.94876 16.7005H4.65817C2.38466 16.7005 1.81201 16.1279 1.81201 13.8458V8.15353C1.81201 5.87148 2.38466 5.29883 4.65817 5.29883H4.94876C5.07697 5.29883 5.18808 5.29883 5.30774 5.30738C5.24791 5.72618 5.23081 6.19626 5.23081 6.72618V15.2732Z"
                        stroke="#1C1C1C"
                        strokeWidth="1.28205"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.9059 8.15353V13.8458C18.9059 16.1279 18.3332 16.7005 16.0597 16.7005H15.7691C15.6409 16.7005 15.5298 16.7005 15.4102 16.692C15.47 16.2732 15.4871 15.8031 15.4871 15.2732V6.72618C15.4871 6.19626 15.47 5.72618 15.4102 5.30738C15.5298 5.29883 15.6409 5.29883 15.7691 5.29883H16.0597C18.3332 5.29883 18.9059 5.87148 18.9059 8.15353Z"
                        stroke="#1C1C1C"
                        strokeWidth="1.28205"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <NavLink class="opacity-60 uppercase " to="/services">
                      <span>Услуги</span>
                    </NavLink>
                  </li>
                  <li class="flex gap-2 cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500 xl:text-[22px]">
                    <div className="relative  w-auto text-gray-700">
                      <div className="">
                        <button
                          onClick={handleOpen}
                          className="flex justify-between gap-[100px] items-center"
                        >
                          <div className="flex justify-center gap-3 items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                            >
                              <path
                                d="M2.66675 10.6667L15.6427 4.17866C15.7537 4.12326 15.876 4.09442 16.0001 4.09442C16.1241 4.09442 16.2464 4.12326 16.3574 4.17866L29.3334 10.6667M16.6694 12.1733L19.4014 12.8813C19.7534 12.9733 20.0014 13.2933 19.9894 13.6573C19.7681 20.3093 16.0001 21.3333 16.0001 21.3333C16.0001 21.3333 12.2321 20.3093 12.0107 13.6573C12.006 13.4804 12.0616 13.3072 12.1685 13.1661C12.2754 13.025 12.4271 12.9246 12.5987 12.8813L15.3321 12.1747C15.7706 12.0611 16.2309 12.0597 16.6694 12.1733Z"
                                stroke="#1C1C1C"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M26.6668 14.6667V25.3333C26.6668 26.0406 26.3859 26.7188 25.8858 27.2189C25.3857 27.719 24.7074 28 24.0002 28H8.00016C7.29292 28 6.61464 27.719 6.11454 27.2189C5.61445 26.7188 5.3335 26.0406 5.3335 25.3333V14.6667"
                                stroke="#1C1C1C"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span>Доставка до двери</span>
                          </div>
                          <svg
                            className="w-4 h-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 12.95a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 0 1 1.414-1.414L10 10.586l3.536-3.536a1 1 0 0 1 1.414 1.414l-4.243 4.243z"
                            />
                          </svg>
                        </button>
                      </div>
                      {open && (
                        <ul className="bg-white rounded-b-[30px] w-full z-30 absolute top-[60px] right-0 p-[20px] xl:p-[10px]">
                          {Link.map((item) => {
                            return (
                              <li
                                key={item.id}
                                className="mb-[10px]  flex justify-start items-center gap-2 hover:bg-blue-gray-500 px-[20px] py-[10px]  rounded-md"
                                onClick={() => setLink(item)}
                              >
                                <img
                                  className="w-[20px] h-[20px] xl:w-[25px] xl:h-[25px]"
                                  src={item.logo}
                                  alt=""
                                />
                                <NavLink
                                  class="font-medium text-[10px] xl:text-[12px] text-[#1C1C1C] transition-colors hover:text-pink-500 uppercase"
                                  to="#"
                                >
                                  {item.link}
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="xl:mb-[140px] lg:mb-[70px] mb-[40px]">
            {Items.map((item) => {
              return (
                <div className="lg:flex lg:gap-[24px] xl:gap-[70px] items-center xl:mb-[50px] mb-[20px] justify-between lg:even:flex-row-reverse">
                  <img
                    className="lg:w-[50%] w-[100%] h-[150px] lg:h-[182px] xl:h-[259px] rounded-[15px] lg:rounded-[30px]"
                    src={item.img}
                    alt=""
                  />
                  <p className="lg:w-[50%] mt-[10px] lg:mt-0 text-[#161616] font-[AtypDisplay] xl:text-[20px] text-[14px] font-normal leading-[185%]">
                    {item.text}
                  </p>
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

export default ServicesInPage;
