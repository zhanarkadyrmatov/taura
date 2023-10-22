import React, { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Button } from "@material-tailwind/react";
import { Modal } from "../utils/Modal";
import { BsChevronDown } from "react-icons/bs";

import { XMarkIcon } from "@heroicons/react/24/outline";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Logo from "../assets/Logo.png";
import Language from "../assets/language.png";
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const products = [
  {
    name: "Как это работает?",
  },
  {
    name: "ГДЕ И ЧТО МОЖНА КУПИТЬ",
  },

  {
    name: "ЦЕНА И ОПЛАТА",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [togleOpen, setTogleOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleMobile = () => {
    handleOpen();
    setMobileMenuOpen(false);
  };
  const [accordion, setAccordion] = React.useState(1);

  const accordionOpen = (value) => setAccordion(open === value ? 0 : value);
  return (
    <header className="bg-white">
      <div className="container">
        <nav
          className="flex  items-center justify-between py-[16px] lg:py-[22px]"
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
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <RiMenu3Fill className="h-[30px] w-[30px]" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden xl:flex items-center xl:gap-[20px]">
            <div className=" relative">
              <button
                onClick={() => setTogleOpen(!togleOpen)}
                className="text-[20px] font-medium font-[Ubuntu]  text-[#1355A3] flex items-center gap-1"
              >
                Главная <BsChevronDown className="w-4 h-4" />
              </button>
              {togleOpen ? (
                <div className="absolute bg-white left-[-470px] top-[73px] flex justify-center items-center w-screen py-[30px] gap-[120px]">
                  <a
                    className="text-[25px] uppercase font-medium font-[Ubuntu]  text-black"
                    href="#"
                  >
                    Как это работает?
                  </a>
                  <a
                    className="text-[25px] uppercase font-medium font-[Ubuntu]  text-black"
                    href="#"
                  >
                    Где и что можна купить
                  </a>
                  <NavLink
                    className="text-[25px] uppercase font-medium font-[Ubuntu]  text-black"
                    to={"/price"}
                  >
                    цена и оплата
                  </NavLink>
                </div>
              ) : null}
            </div>
            <NavLink
              to="/services"
              className="text-[20px] font-medium font-[Ubuntu]  text-black"
            >
              Услуги
            </NavLink>
            <NavLink
              to={"/company"}
              className="text-[20px] font-medium font-[Ubuntu]  text-black"
            >
              О нас
            </NavLink>
            <NavLink
              to={"/news"}
              className="text-[20px] font-medium font-[Ubuntu]  text-black"
            >
              Новости
            </NavLink>
            <NavLink
              to={"/contact"}
              className="text-[20px] font-medium font-[Ubuntu]  text-black"
            >
              Контакты
            </NavLink>
            <NavLink
              to={"/question"}
              className="text-[20px] font-medium font-[Ubuntu]  text-black"
            >
              Вопросы
            </NavLink>
          </Popover.Group>
          <div className="hidden xl:flex xl:justify-center xl:items-center xl:gap-[20px]">
            <NavLink
              to={"/tauraexpress"}
              className="text-[20px] font-medium  text-[#1355A3]"
            >
              Taura Express
            </NavLink>

            <Popover className="relative bg-[#F0F0F0] py-[10px] px-[20px] rounded-[30px]">
              <Popover.Button className="flex items-center gap-x-1 text-[20px] font-medium font-[Ubuntu] text-black">
                <img src={Language} alt="" />
                Русский
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-0 top-full  mt-0  overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {["Русский", "English"].map((item, index) => (
                      <div
                        key={index}
                        className="group relative flex items-center  rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <a
                            href={"#"}
                            className="text-[20px] font-medium font-[Ubuntu]  text-black flex items-center gap-2"
                          >
                            <img src={Language} alt="" />
                            {item}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Button
              className="text-[#fff] font-ubuntu text-[20px] font-medium rounded-[30px] bg-[#1C1C1C] p-[20px]"
              variant="gradient"
              onClick={handleOpen}
            >
              Напишите нам
            </Button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="xl:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <NavLink to={"/"}>
                  <img className="w-[133px]" src={Logo} alt="" />
                </NavLink>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-[30px] w-[30px]" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="xl:hidden my-[20px] flex justify-center items-center gap-[20px]">
                  <NavLink
                    to={"/tauraexpress"}
                    className="text-[20px] font-medium  text-[#1355A3]"
                  >
                    Taura Express
                  </NavLink>
                  <Popover className="relative bg-[#F0F0F0] py-[10px] px-[20px] rounded-[30px]">
                    <Popover.Button className="flex items-center gap-x-1 text-[20px] font-medium font-[Ubuntu] text-black">
                      <img src={Language} alt="" />
                      Русский
                      <ChevronDownIcon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-0 z-10 top-full  mt-0  overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          {["Русский", "English"].map((item, index) => (
                            <div
                              key={index}
                              className="group relative flex items-center  rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
                            >
                              <div className="flex-auto">
                                <a
                                  href={"#"}
                                  className="text-[20px] font-medium font-[Ubuntu]  text-black flex items-center gap-2"
                                >
                                  <img src={Language} alt="" />
                                  {item}
                                  <span className="absolute inset-0" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                </div>
                <div>
                  <ul className="flex flex-col justify-center items-center gap-[30px]">
                    <li
                      style={{
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
                      }}
                      className="font-Ubuntu text-[#161616] text-[20px] font-medium  w-full rounded-[20px] flex justify-center items-center shadow p-[10px]"
                    >
                      <Popover className="relative text-center">
                        <Popover.Button className="flex  items-center gap-x-1 text-[#1355A3]">
                          Главная
                          <ChevronDownIcon
                            className="h-7 w-7 text-[#1355A3]"
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute -left-[160px] top-full z-10 mt-3 w-screen overflow-hidden rounded-3xl bg-white shadow-lg ring-0 ring-gray-900/5">
                            <div className="p-4">
                              {products.map((item) => (
                                <div
                                  key={item.name}
                                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                >
                                  <div className="flex-auto">
                                    <NavLink
                                      to={""}
                                      className="block text-[20px] font-medium font-[Ubuntu]  uppercase text-black"
                                    >
                                      {item.name}
                                      <span className="absolute inset-0" />
                                    </NavLink>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </Popover>
                    </li>
                    <li
                      style={{
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
                      }}
                      className="font-Ubuntu text-[#161616] text-[20px] font-medium  w-full rounded-[20px] text-center shadow p-[10px]"
                    >
                      <NavLink to="/services">Услуги</NavLink>
                    </li>
                    <li
                      style={{
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
                      }}
                      className="font-Ubuntu text-[#161616] text-[20px] font-medium  w-full rounded-[20px] text-center p-[10px]"
                    >
                      <NavLink to={"/company"}>О нас</NavLink>
                    </li>
                    <li
                      style={{
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
                      }}
                      className="font-Ubuntu text-[#161616] text-[20px] font-medium  w-full rounded-[20px] text-center p-[10px]"
                    >
                      <NavLink to={"/news"}>Новости</NavLink>
                    </li>
                    <li
                      style={{
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
                      }}
                      className="font-Ubuntu text-[#161616] text-[20px] font-medium  w-full rounded-[20px] text-center p-[10px]"
                    >
                      <NavLink to={"/contact"}>Контакты</NavLink>
                    </li>
                    <li
                      style={{
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
                      }}
                      className="font-Ubuntu text-[#161616] text-[20px] font-medium  w-full rounded-[20px] text-center p-[10px]"
                    >
                      <NavLink to={"/question"}>Вопросы</NavLink>
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
                    Напишите нам
                  </Button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <Modal handleOpen={handleOpen} setOpen={setOpen} open={open} />
      </div>
    </header>
  );
}
