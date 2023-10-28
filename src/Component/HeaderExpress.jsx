// import React, { Fragment, useState } from "react";
// import { Popover, Transition } from "@headlessui/react";
// import { Button } from "@material-tailwind/react";
// import { Modal } from "../utils/Modal";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import Logo from "../assets/express.png";
// import Language from "../assets/language.png";
// import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
// import { NavLink, Link } from "react-router-dom";

// export default function HeaderComponent() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [open, setOpen] = useState(false);

//   const handleMenuOpen = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };
//   const handleOpen = () => setOpen(!open);

//   const handleMobile = () => {
//     handleOpen();
//     setMobileMenuOpen(false);
//   };

//   return (
//     <header className="bg-[#1C1C1C] z-50 fixed top-0 left-0 right-0">
//       <div className="container">
//         <nav
//           className="flex items-center justify-between py-[16px] lg:py-[22px]"
//           aria-label="Global"
//         >
//           <div className="">
//             <img className="w-[133px] lg:w-[242px]" src={Logo} alt="" />
//           </div>
//           <div className="flex xl:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center rounded-md text-white"
//               onClick={handleMenuOpen}
//             >
//               {mobileMenuOpen ? (
//                 <RiCloseFill className="h-[30px]  w-[30px]" />
//               ) : (
//                 <RiMenu3Fill className="h-[30px]  w-[30px]" />
//               )}
//             </button>
//           </div>
//           <Popover.Group className="hidden xl:flex items-center xl:gap-[20px]">
//             <NavLink
//               to="/"
//               className="text-[18px]  hover:text-[#1355A3] font-medium font-[Ubuntu]  text-white"
//             >
//               Главная
//             </NavLink>
//             <NavLink
//               to="/services"
//               className="text-[18px] hover:text-[#1355A3] font-medium font-[Ubuntu] text-white"
//             >
//               Услуги
//             </NavLink>
//             <NavLink
//               to={"/company"}
//               className="text-[18px] hover:text-[#1355A3] font-medium font-[Ubuntu]  text-white"
//             >
//               О нас
//             </NavLink>
//             <NavLink
//               to={"/news"}
//               className="text-[18px]  hover:text-[#1355A3] font-medium font-[Ubuntu]  text-white"
//             >
//               Новости
//             </NavLink>
//             <NavLink
//               to={"/contact"}
//               className="text-[18px]  hover:text-[#1355A3] font-medium font-[Ubuntu]  text-white"
//             >
//               Контакты
//             </NavLink>
//             <NavLink
//               to={"/question"}
//               className="text-[18px]  hover:text-[#1355A3] font-medium font-[Ubuntu]  text-white"
//             >
//               Вопросы
//             </NavLink>
//             <NavLink
//               to={"/price"}
//               className="text-[18px]  hover:text-[#1355A3] font-medium font-[Ubuntu]  text-white"
//             >
//               Цена оплата
//             </NavLink>
//           </Popover.Group>
//           <div className="hidden xl:flex xl:justify-center xl:items-center xl:gap-[15px]">
//             <NavLink
//               to={"/tauraexpress"}
//               className="text-[18px] font-medium  text-[#1355A3]"
//             >
//               Taura Express
//             </NavLink>
//             <Popover className="relative bg-[#F0F0F0] py-[10px] px-[15px] rounded-[30px]">
//               <Popover.Button className="flex items-center gap-x-1 text-[18px] font-medium font-[Ubuntu] text-black">
//                 <img src={Language} alt="" />
//                 RU
//                 <ChevronDownIcon
//                   className="h-5 w-5 flex-none text-black"
//                   aria-hidden="true"
//                 />
//               </Popover.Button>

//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-200"
//                 enterFrom="opacity-0 translate-y-1"
//                 enterTo="opacity-100 translate-y-0"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 translate-y-0"
//                 leaveTo="opacity-0 translate-y-1"
//               >
//                 <Popover.Panel className="absolute left-0 top-full  mt-0  overflow-hidden rounded-b-[20px] bg-black ring-1 ring-gray-900/5">
//                   <div className="p-4">
//                     {["RU", "EN"].map((item, index) => (
//                       <div
//                         key={index}
//                         className="group relative flex items-center  rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
//                       >
//                         <div className="flex-auto">
//                           <a
//                             href={"#"}
//                             className="text-[20px] font-medium font-[Ubuntu]  text-black flex items-center gap-2"
//                           >
//                             <img src={Language} alt="" />
//                             {item}
//                             <span className="absolute inset-0" />
//                           </a>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </Popover.Panel>
//               </Transition>
//             </Popover>
//             <Button
//               className="text-[#fff] font-ubuntu text-[18px] font-medium rounded-[30px] bg-[#1C1C1C] p-[15px]"
//               variant="gradient"
//               onClick={handleOpen}
//             >
//               Напишите нам
//             </Button>
//           </div>
//         </nav>
//         {mobileMenuOpen ? (
//           <div className="xl:hidden">
//             <div className="fixed inset-y-0 top-[62px] lg:top-[98px] right-0 z-10 w-full overflow-y-auto bg-[#1C1C1C] px-6 py-2 sm:max-w-[50%] sm:ring-1 sm:ring-gray-900/10">
//               <div className="mt-6 flow-root">
//                 <div className="-my-6 divide-y divide-gray-500/10">
//                   <div className="xl:hidden my-[20px] flex justify-center items-center gap-[20px]">
//                     <NavLink
//                       to={"/tauraexpress"}
//                       className="text-[20px] font-medium  text-[#1355A3]"
//                     >
//                       Taura Express
//                     </NavLink>
//                     <Popover className="relative bg-[#F0F0F0] py-[10px] px-[20px] rounded-[30px]">
//                       <Popover.Button className="flex items-center gap-x-1 text-[20px] font-medium font-[Ubuntu] text-black">
//                         <img src={Language} alt="" />
//                         Русский
//                         <ChevronDownIcon
//                           className="h-5 w-5 flex-none text-gray-400"
//                           aria-hidden="true"
//                         />
//                       </Popover.Button>

//                       <Transition
//                         as={Fragment}
//                         enter="transition ease-out duration-200"
//                         enterFrom="opacity-0 translate-y-1"
//                         enterTo="opacity-100 translate-y-0"
//                         leave="transition ease-in duration-150"
//                         leaveFrom="opacity-100 translate-y-0"
//                         leaveTo="opacity-0 translate-y-1"
//                       >
//                         <Popover.Panel className="absolute left-0 z-10 top-full  mt-0  overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
//                           <div className="p-4">
//                             {["Русский", "English"].map((item, index) => (
//                               <div
//                                 key={index}
//                                 className="group relative flex items-center  rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
//                               >
//                                 <div className="flex-auto">
//                                   <a
//                                     href={"#"}
//                                     className="text-[20px] font-medium font-[Ubuntu]  text-black flex items-center gap-2"
//                                   >
//                                     <img src={Language} alt="" />
//                                     {item}
//                                     <span className="absolute inset-0" />
//                                   </a>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         </Popover.Panel>
//                       </Transition>
//                     </Popover>
//                   </div>
//                   <div>
//                     <ul className="flex flex-col justify-center items-center gap-[30px]">
//                       <li
//                         style={{
//                           boxShadow:
//                             "0px 0px 10px 0px rgba(255, 255, 255, 0.15)",
//                         }}
//                         className="font-Ubuntu text-white text-[20px] font-medium  w-full rounded-[20px] flex justify-center items-center shadow p-[10px]"
//                       >
//                         <NavLink to="/">Главная</NavLink>
//                       </li>
//                       <li
//                         style={{
//                           boxShadow:
//                             "0px 0px 10px 0px rgba(255, 255, 255, 0.15)",
//                         }}
//                         className="font-Ubuntu text-white text-[20px] font-medium  w-full rounded-[20px] text-center shadow p-[10px]"
//                       >
//                         <NavLink to="/services">Услуги</NavLink>
//                       </li>
//                       <li
//                         style={{
//                           boxShadow:
//                             "0px 0px 10px 0px rgba(255, 255, 255, 0.15)",
//                         }}
//                        className="font-Ubuntu text-white text-[20px] font-medium  w-full rounded-[20px] text-center p-[10px]"
//                       >
//                         <NavLink to={"/company"}>О нас</NavLink>
//                       </li>
//                       <li
//                         style={{
//                           boxShadow:
//                             "0px 0px 10px 0px rgba(255, 255, 255, 0.15)",
//                         }}
//                         className="font-Ubuntu text-white text-[20px] font-medium  w-full rounded-[20px] text-center p-[10px]"
//                       >
//                         <NavLink to={"/news"}>Новости</NavLink>
//                       </li>
//                       <li
//                         style={{
//                           boxShadow:
//                             "0px 0px 10px 0px rgba(255, 255, 255, 0.15)",
//                         }}
//                         className="font-Ubuntu text-white text-[20px] font-medium  w-full rounded-[20px] text-center p-[10px]"
//                       >
//                         <NavLink to={"/contact"}>Контакты</NavLink>
//                       </li>
//                       <li
//                         style={{
//                           boxShadow:
//                             "0px 0px 10px 0px rgba(255, 255, 255, 0.15)",
//                         }}
//                         className="font-Ubuntu text-white text-[20px] font-medium  w-full rounded-[20px] text-center p-[10px]"
//                       >
//                         <Link to={"/question"}>Вопросы</Link>
//                       </li>
//                       <li
//                         style={{
//                           boxShadow:
//                             "0px 0px 10px 0px rgba(255, 255, 255, 0.15)",
//                         }}
//                         className="font-Ubuntu text-white text-[20px] font-medium  w-full rounded-[20px] text-center p-[10px]"
//                       >
//                         <Link to={"#"}>Цена оплата</Link>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="mt-[20px]">
//                     <Button
//                       style={{
//                         boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.15)",
//                       }}
//                       className="text-[#fff] w-full font-ubuntu text-[18px] font-medium rounded-[20px] shadow bg-[#1C1C1C] p-[10px]"
//                       variant="gradient"
//                       onClick={handleMobile}
//                     >
//                       Напишите нам
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : null}

//         <Modal handleOpen={handleOpen} setOpen={setOpen} open={open} />
//       </div>
//     </header>
//   );
// }
// asdfghjkl;asdfghjklasdfghjkl;

import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Button } from "@material-tailwind/react";
import { Modal } from "../utils/Modal";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Logo from "../assets/express.png";
import Language from "../assets/language.png";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaAngleDown } from "react-icons/fa";
import i18n from "../i18n";

export default function HeaderComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [languageBtn, setLanguageBtn] = useState(false);
  const [language, setLanguage] = useState("en");

  const { t } = useTranslation();
  const handleMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleOpen = () => setOpen(!open);

  const handleMobile = () => {
    handleOpen();
    setMobileMenuOpen(false);
  };

  const handleLanguageChange = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    setLanguageBtn(false);
  };

  return (
    <header className="bg-[#1C1C1C] z-50 fixed top-0 left-0 right-0">
      <div className="container">
        <nav
          className="flex items-center justify-between py-[16px] lg:py-[22px]"
          aria-label="Global"
        >
          <div className="">
            <NavLink to="/" className="">
              <img className="w-[133px] lg:w-[242px]" src={Logo} alt="" />
            </NavLink>
          </div>
          <div className="flex xl:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-white"
              onClick={handleMenuOpen}
            >
              {mobileMenuOpen ? (
                <RiCloseFill className="h-[30px] w-[30px]" />
              ) : (
                <RiMenu3Fill className="h-[30px] w-[30px]" />
              )}
            </button>
          </div>
          <Popover.Group className="hidden xl:flex items-center xl:gap-[20px]">
            <NavLink
              to="/"
              className="text-[18px] active:text-[#1355A3] hover:text-[#1355A3] font-medium font-[Ubuntu]  text-white"
            >
              {t("home")}
            </NavLink>
            <NavLink
              to="/services"
              className="text-[18px]  hover:text-[#1355A3] font-medium font-[Ubuntu] text-white"
            >
              {t("services")}
            </NavLink>
            <NavLink
              to={"/company"}
              className="text-[18px]  hover:text-[#1355A3] font-medium font-[Ubuntu]  text-white"
            >
              {t("about")}
            </NavLink>
            <NavLink
              to={"/news"}
              className="text-[18px]  hover:text-[#1355A3] font-medium font-[Ubuntu]  text-white"
            >
              {t("news")}
            </NavLink>
            <NavLink
              to={"/contact"}
              className="text-[18px]  hover:text-[#1355A3] font-medium font-[Ubuntu]  text-white"
            >
              {t("contacts")}
            </NavLink>
            <NavLink
              to={"/question"}
              className="text-[18px]  hover:text-[#1355A3] font-medium font-[Ubuntu]  text-white"
            >
              {t("questions")}
            </NavLink>
            <NavLink
              to={"/price"}
              className="text-[18px]  hover:text-[#1355A3] font-medium font-[Ubuntu]  text-white"
            >
              {t("price")}
            </NavLink>
          </Popover.Group>
          <div className="hidden xl:flex xl:justify-center xl:items-center xl:gap-[15px]">
            <NavLink
              to={"/tauraexpress"}
              className="text-[18px] font-medium  text-[#1355A3]"
            >
              Taura Express
            </NavLink>
            <div className=" relative">
              <div
                className={`bg-[#F0F0F0] py-[10px] px-[15px]  ${
                  languageBtn ? "rounded-t-[20px]" : "rounded-[30px]"
                }  `}
              >
                <button
                  onClick={() => setLanguageBtn(!languageBtn)}
                  className={`flex items-center gap-x-1 text-[18px] font-medium font-[Ubuntu] text-black
                  `}
                >
                  <img src={Language} alt="" />
                  <span className=" uppercase">{language}</span>
                  <FaAngleDown
                    className={`${languageBtn ? "rotate-180" : ""} `}
                  />
                </button>
                {languageBtn && (
                  <div
                    onClick={() =>
                      handleLanguageChange(language === "ru" ? "en" : "ru")
                    }
                    className="flex cursor-pointer justify-center absolute left-0 right-0  top-[45px] bg-blue-gray-600 w-full p-2 rounded-b-[20px]"
                  >
                    <button className="text-[18px] font-medium font-[Ubuntu] text-black uppercase">
                      <span>{language === "ru" ? "en" : "ru"}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <Button
              className="text-[#fff] font-ubuntu text-[18px] font-medium rounded-[30px] bg-[#1C1C1C] p-[15px]"
              variant="gradient"
              onClick={handleOpen}
            >
              {t("write_to_us")}
            </Button>
          </div>
        </nav>
        {mobileMenuOpen ? (
          <div className="xl:hidden">
            <div className="fixed inset-y-0 top-[62px] lg:top-[98px] right-0 z-10 w-full overflow-y-auto bg-[#1C1C1C] px-6 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="xl:hidden my-[20px] flex justify-center items-center gap-[20px]">
                    <NavLink
                      to={"/tauraexpress"}
                      className="text-[20px] font-medium  text-[#1355A3]"
                    >
                      Taura Express
                    </NavLink>
                    <div className=" relative">
                      <div
                        className={`bg-[#F0F0F0] py-[10px] px-[15px]  ${
                          languageBtn ? "rounded-t-[20px]" : "rounded-[30px]"
                        }  `}
                      >
                        <button
                          onClick={() => setLanguageBtn(!languageBtn)}
                          className={`flex items-center gap-x-1 text-[18px] font-medium font-[Ubuntu] text-black
                  `}
                        >
                          <img src={Language} alt="" />
                          <span className=" uppercase">{language}</span>
                          <FaAngleDown
                            className={`${languageBtn ? "rotate-180" : ""} `}
                          />
                        </button>
                        {languageBtn && (
                          <div
                            onClick={() =>
                              handleLanguageChange(
                                language === "ru" ? "en" : "ru"
                              )
                            }
                            className="flex cursor-pointer justify-center absolute left-0 right-0  top-[45px] bg-blue-gray-600 w-full p-2 rounded-b-[20px]"
                          >
                            <button className="text-[18px] font-medium font-[Ubuntu] text-black uppercase">
                              <span>{language === "ru" ? "en" : "ru"}</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul className="flex flex-col justify-center items-center gap-[30px]">
                      <li
                        style={{
                          boxShadow:
                            "0px 0px 10px 0px rgba(255, 255, 255, 0.15)",
                        }}
                        className="font-Ubuntu text-[#fff] text-[20px] font-medium  w-full rounded-[20px] flex justify-center items-center shadow p-[10px]"
                      >
                        <NavLink to="/">{t("home")}</NavLink>
                      </li>
                      <li
                        style={{
                          boxShadow:
                            "0px 0px 10px 0px rgba(255, 255, 255, 0.15)",
                        }}
                        className="font-Ubuntu text-[#fff] text-[20px] font-medium  w-full rounded-[20px] text-center shadow p-[10px]"
                      >
                        <NavLink to="/services">{t("services")}</NavLink>
                      </li>
                      <li
                        style={{
                          boxShadow:
                            "0px 0px 10px 0px rgba(255, 255, 255, 0.15)",
                        }}
                        className="font-Ubuntu text-[#fff] text-[20px] font-medium  w-full rounded-[20px] text-center p-[10px]"
                      >
                        <NavLink to={"/company"}>{t("about")}</NavLink>
                      </li>
                      <li
                        style={{
                          boxShadow:
                            "0px 0px 10px 0px rgba(255, 255, 255, 0.15)",
                        }}
                        className="font-Ubuntu text-[#fff] text-[20px] font-medium  w-full rounded-[20px] text-center p-[10px]"
                      >
                        <NavLink to={"/news"}>{t("news")}</NavLink>
                      </li>
                      <li
                        style={{
                          boxShadow:
                            "0px 0px 10px 0px rgba(255, 255, 255, 0.15)",
                        }}
                        className="font-Ubuntu text-[#fff] text-[20px] font-medium  w-full rounded-[20px] text-center p-[10px]"
                      >
                        <NavLink to={"/contact"}>{t("contacts")}</NavLink>
                      </li>
                      <li
                        style={{
                          boxShadow:
                            "0px 0px 10px 0px rgba(255, 255, 255, 0.15)",
                        }}
                        className="font-Ubuntu text-[#fff] text-[20px] font-medium  w-full rounded-[20px] text-center p-[10px]"
                      >
                        <NavLink to={"/question"}>{t("questions")}</NavLink>
                      </li>
                      <li
                        style={{
                          boxShadow:
                            "0px 0px 10px 0px rgba(255, 255, 255, 0.15)",
                        }}
                        className="font-Ubuntu text-[#fff] text-[20px] font-medium  w-full rounded-[20px] text-center p-[10px]"
                      >
                        <NavLink to={"#"}>{t("price")}</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-[20px]">
                    <Button
                      style={{
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
                      }}
                      className="text-[#fff] w-full font-ubuntu text-[18px] font-medium rounded-[20px] shadow bg-[#1C1C1C] p-[10px]"
                      variant="gradient"
                      onClick={handleMobile}
                    >
                      {t("write_to_us")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <Modal handleOpen={handleOpen} setOpen={setOpen} open={open} />
      </div>
    </header>
  );
}
