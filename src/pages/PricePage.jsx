import React from "react";
import HeaderComponent from "../Component/HeaderComponent";
import FooterComponent from "../Component/FooterComponent";

function PricePage() {
  return (
    <>
      <HeaderComponent />
      <div className="price xl:py-[100px] py-[60px] lg:py-[80px] mb-[40px] lg:mb-[70px] xl:mb-[120px]">
        <div className="container">
          <h2 className="text-[#FFF] font-[AtypDisplay]  text-[46px] lg:text-[76px] xl:text-[96px] font-normal leading-normal">
            ЦЕНЫ И ОПЛАТА
          </h2>
          <p className="text-[#FFF] font-[AtypDisplay]  text-[15px] lg:text-[26px] xl:text-[36px] font-normal leading-normal">
            Тут вы найдете тарифную сетку и другую информацию, связанную с
            платежами
          </p>
        </div>
      </div>
      <main>
        <div className="container"></div>
      </main>
      <FooterComponent />
    </>
  );
}

export default PricePage;
