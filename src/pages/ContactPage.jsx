import React from "react";
import HeaderComponent from "../Component/HeaderComponent";
import FooterComponent from "../Component/FooterComponent";
import Com from "../assets/compony.png";
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

function ContactPage() {
  return (
    <>
      <HeaderComponent />
      <div className="price mt-[100px] xl:py-[100px] py-[60px] lg:py-[80px] mb-[40px] lg:mb-[70px] xl:mb-[120px]">
        <div className="container">
          <h2 className="text-[#FFF] font-[AtypDisplay]  text-[46px] lg:text-[76px] xl:text-[96px] font-normal leading-normal">
            Контакты
          </h2>
          <p className="text-[#FFF] font-[AtypDisplay]  text-[15px] lg:text-[26px] xl:text-[36px] font-normal leading-normal">
            Мы рады услышать Вас по телефону, а также приветствовать Вас в нашем
            офисе.
          </p>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="">
            <iframe
              className="w-full h-[280px] xl:h-[360px] rounded-[15px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.6339980505554!2d74.58391327603604!3d42.859460803404865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec99f10d3e9f1%3A0xd8ae1cafa61a6ea6!2z0KTQuNC70L7RgNC90Y7QvNC-0L3QuNGP!5e0!3m2!1sru!2skg!4v1696498751488!5m2!1sru!2skg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className=" mt-[40px] lg:mt-[70px] xl:mt-[140px]">
            <h2 className="text-[30px] mt-[40px]  mb-[20px] text-[#1C1C1C] font-AtyrDisplay  font-normal lg:text-[50px]">
              Филиалы
            </h2>
            <div className="lg:grid lg:grid-cols-2 lg:gap-[24px] xl:gap-[112px]">
              {[1, 2].map((e) => {
                return (
                  <div
                    style={{
                      boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
                    }}
                    key={e}
                    className="py-[20px] px-[10px] lg:p-[20px] lg:rounded-[30px] rounded-[15px] shadow-md  mb-[40px]"
                  >
                    <img
                      className="w-full h-[120px] xl:h-[158px] rounded-[13px]"
                      src={Com}
                      alt=""
                    />
                    <div className="mt-[20px]">
                      <h4 className="flex justify-between items-center text-[#1C1C1C] font-[AtypDisplay]  text-[14px] font-normal leading-normal mb-[10px] lg:text-[18px] xl:text-[26px]">
                        <span>Адрес:</span> <span>Менеджеры по Китаю:</span>
                      </h4>
                      <p className="flex justify-between items-start text-[#1C1C1C] font-[AtypDisplay]  text-[12px] font-normal leading-normal lg:text-[14px] xl:text-[22px]">
                        <span>ул. Абдумомунова 245 г. Бишкек </span>
                        <span>
                          +996 700 000 000 <br />
                          +996 700 000 000
                        </span>
                      </p>
                    </div>
                    <div className="my-[16px] lg:my-[20px]">
                      <h4 className="flex justify-between items-center text-[#1C1C1C] font-[AtypDisplay]  text-[14px] font-normal leading-normal mb-[10px] lg:text-[18px] xl:text-[26px]">
                        <span>Касса:</span> <span>Склад:</span>
                      </h4>
                      <p className="flex justify-between items-start text-[#1C1C1C] font-[AtypDisplay]  text-[12px] font-normal leading-normal lg:text-[14px] xl:text-[22px]">
                        <span>+996 700 000 000</span>
                        <span>+996 700 000 000</span>
                      </p>
                    </div>
                    <ul className="flex justify-between items-center  gap-[6px]">
                      {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map(
                        (item) => {
                          return (
                            <li
                              style={{
                                boxShadow:
                                  "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
                              }}
                              className="flex flex-col items-center justify-center p-[4px] lg:p-[6px] bg-white rounded-[10px]"
                            >
                              <h4 className="text-[#1C1C1C] font-[AtypDisplay]  text-[14px] lg:text-[16px] font-normal leading-normal mb-[10px] xl:text-[26px]">
                                {item}
                              </h4>
                              <p className="text-[#1C1C1C] font-[AtypDisplay]  text-[12px] font-normal leading-normal mt-[4px] mb-[6px] lg:text-[14px] xl:text-[20px]">
                                08:00
                              </p>
                              <p className="text-[#1C1C1C] font-[AtypDisplay]  text-[12px] lg:text-[14px] font-normal leading-normal xl:text-[20px]">
                                16:00
                              </p>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-[#1C1C1C] mt-[40px] lg:mt-[70px] xl:mt-[100px] pt-[40px] lg:pt-[100px]">
          <div className="container">
            <div className="w-full border-white border-b-[1px] pb-[30px] xl:pb-[40px] lg:pb-[50px] lg:flex justify-between  items-center xl:items-start gap-[20px] xl:gap-158px">
              <div className="">
                <h2 className="text-center lg:text-start xl:text-[80px] text-white font-normal leading-normal font-[AtypDisplay]  lg:text-[50px] text-[24px]">
                  Остались вопросы?
                </h2>
                <p className="text-center lg:text-start xl:text-[28px] text-white font-[AtypDisplay]  lg:text-[18px] text-[12px] mb-[30px]">
                  Напишите нашим специалистам и получите бесплатную консультацию
                </p>
              </div>
              <form action="" className="w-full lg:w-[530px] xl:w-[620px]">
                <div className=" hidden lg:flex justify-between items-center gap-[20px]">
                  <input
                    className="lg:placeholder:text-[16px] placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md lg:mb-[20px] mb-[10px] bg-opacity-50 bg-white p-[10px] w-full lg:rounded-[20px] xl:h-[60px]"
                    type="text"
                    placeholder="First name"
                  />
                  <input
                    className="lg:placeholder:text-[16px] placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md lg:mb-[20px] mb-[10px] bg-opacity-50 bg-white p-[10px] w-full lg:rounded-[20px] xl:h-[60px]"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                <input
                  className=" lg:hidden lg:rounded-[20px] xl:h-[60px] xl:bg-opacity-30 xl:bg-black xl:placeholder:text-[16px] placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md mb-[10px] lg:mb-[20px] bg-opacity-50 bg-white p-[10px] w-full"
                  type="text"
                  placeholder="Имя и Фамилия"
                />
                <input
                  className=" lg:placeholder:text-[16px] placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md lg:mb-[20px] mb-[10px] bg-opacity-50 bg-white p-[10px] w-full lg:rounded-[20px] xl:h-[60px]"
                  type="text"
                  placeholder="Email или номер телефона"
                />
                <div className="flex justify-between items-center lg:mb-[20px] gap-[20px]">
                  <div className="w-[100%]">
                    <select
                      className="rounded-md mb-[10px] bg-opacity-50 bg-white p-[10px] w-full lg:rounded-[20px] xl:h-[60px]"
                      label=""
                    >
                      <option className="text-[#161616] font-[Atyp Display]  opacity-70 text-[14px] lg:text-[16px]">
                        Material
                      </option>
                      <option className="text-[#161616] font-[Atyp Display]  opacity-70 text-[14px] lg:text-[16px]">
                        Material
                      </option>
                    </select>
                  </div>
                  <input
                    className="w-50 lg:placeholder:text-[16px] placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md lg:mb-[20px] mb-[10px] bg-opacity-50 bg-white p-[10px] w-full lg:rounded-[20px] xl:h-[60px]"
                    type="text"
                    placeholder="Тема"
                  />
                </div>
                <Textarea
                  className=" min-h-[80px] lg:min-h-[130px] placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md bg-opacity-50 lg:placeholder:text-[16px] bg-white p-[10px] w-full lg:rounded-[20px] xl:h-[60px]"
                  color="blue"
                  label=""
                  placeholder="Сообщение"
                />
                <Button className="text-center lg:text-[24px] w-full p-[15px] mt-[20px] bg-[#1355A3] lg:rounded-[20px] rounded-[10px]">
                  Отправить
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
}

export default ContactPage;
