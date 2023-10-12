import React from "react";
import Kargo from "../assets/kargo.png";
import Kargo1 from "../assets/kargo1.png";
import Kargo2 from "../assets/kargo2.png";
import Icon1 from "../assets/kar1.png";
import Icon2 from "../assets/kar2.png";
import Icon3 from "../assets/kar3.png";
function DeliveryComponent() {
  return (
    <div>
      <div className="container">
        <div className="mt-[40px] lg:mt-[70px] xl:mt-[140px]">
          <div className="lg:grid grid-cols-2 items-start gap-[52px]">
            <h2 className="text-black xl:text-[66px] lg:text-[50px] text-[24px] font-Atyp-Display font-normal">
              Непревзойденное качество, причины выбрать нас
            </h2>
            <p className="text-[#161616] lg:opacity-70  font-AtypDisplay text-[12px] font-normal leading-normal lg:mt-[20px] mt-[10px] mb-[20px] lg:mb-[0px] lg:text-[18px] xl:text-[26px] ">
              Мы не просто поставщик логистических услуг, мы ваш стратегический
              партнер на пути к успеху. Вот почему наши клиенты доверяют нам:
            </p>
          </div>
          <div className="lg:grid grid-cols-2 gap-[44px] mb-[20px] xl:mb-[30px] border-[1px] lg:p-0 p-[10px] rounded-[15px] lg:rounded-[20px] border-[#DADADA]">
            <div className="flex items-center gap-[20px] lg:ml-[30px]">
              <img
                className="w-[50px] h-[50px]  p-[8px] bg-[#E1EFFF] rounded-[10px] border-[2px] border-black"
                src={Icon1}
                alt=""
              />
              <p className="opacity-80 text-[#161616] xl:text-[20px] font-AtypDisplay lg:text-[16px] text-[13px]">
                <span className="text-[#1355A3] lg:text-[18px] xl:text-[24px] text-[15px]">
                  Своевременная доставка:
                </span>
                Ваши поставки, наша приверженность, всегда по графику.
              </p>
            </div>
            <img className="mt-[10px] lg:mt-0 w-[100%]" src={Kargo} alt="" />
          </div>
          <div className=" lg:flex flex-row-reverse  lg:rounded-[20px]  gap-[44px] xl:mb-[30px] mb-[20px] border-[1px] lg:p-0 p-[10px] rounded-[15px] border-[#DADADA]">
            <div className="flex items-center gap-[20px] lg:mr-[30px]">
              <img
                className="w-[50px] h-[50px]  p-[8px] bg-[#E1EFFF] rounded-[10px] border-[2px] border-black"
                src={Icon2}
                alt=""
              />
              <p className="opacity-80 text-[#161616] xl:text-[20px] font-AtypDisplay lg:text-[16px] text-[13px]">
                Круглосуточная поддержка: Мы работаем круглосуточно, чтобы
                обеспечить успех вашей логистики.
              </p>
            </div>
            <img
              className="mt-[10px] lg:mt-0 w-[100%] lg:w-[50%] "
              src={Kargo1}
              alt=""
            />
          </div>
          <div className="lg:grid grid-cols-2 gap-[44px] lg:rounded-[20px] xl:mb-[30px] mb-[20px] border-[1px] lg:p-0 p-[10px] rounded-[15px] border-[#DADADA]">
            <div className="flex items-center gap-[20px] lg:ml-[30px]">
              <img
                className="w-[50px] h-[50px]  p-[8px] bg-[#E1EFFF] rounded-[10px] border-[2px] border-black"
                src={Icon3}
                alt=""
              />
              <p className="opacity-80 text-[#161616] xl:text-[20px] font-AtypDisplay lg:text-[16px] text-[13px]">
                Отслеживание в реальном времени: Будьте в курсе событий в режиме
                реального времени при каждом движении.{" "}
              </p>
            </div>
            <img className="mt-[10px] lg:mt-0 w-[100%]" src={Kargo2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryComponent;
