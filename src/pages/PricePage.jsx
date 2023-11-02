import React, { useEffect } from "react";
import HeaderComponent from "../Component/HeaderComponent";
import FooterComponent from "../Component/FooterComponent";
import { ScrollToTopOnMount } from "../utils/ScrollToTopOnMount";

function PricePage() {
  return (
    <>
      <ScrollToTopOnMount />
      <HeaderComponent />
      <div className="price mt-[100px] xl:py-[100px] py-[60px] lg:py-[80px] mb-[40px] lg:mb-[70px] xl:mb-[120px]">
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
      <main className="mb-[140px]">
        <div className="container">
          <h2 className="text-[#1C1C1C] font-[AtypDisplay] text-[16px] lg:text-[30px] xl:text-[44px] font-normal leading-normal  text-center">
            Цены в зависимости от накопленного веса и локации склада
          </h2>
          <p className="text-[#1C1C1C] font-[AtypDisplay] text-[13px] xl:text-[24px] font-normal leading-normal  my-[10px] xl:my-[40px] lg:my-[30px] lg:text-[22px]">
            Для определения цены доставки используется общий вес всех Ваших
            перевозок на конкретный склад. При расчетах используется внутренний
            курс сома к доллару (у.е. - условная единица) на текущую дату оплаты
            с округлением до 1 сома после конвертации, который на данный момент
            составляет 89.00 сом за у.е
          </p>
          <div className="border-[2px] w-full border-[#D5D5D5] overflow-scroll lg:overflow-hidden rounded-[15px] lg:rounded-[40px]">
            <div className="grid grid-cols-6 gap-1 px-1 py-[10px] lg:px-[20px] lg:py-[30px] xl:px-[30px] xl:py-[40px] bg-[#fff]">
              <p className="text-[#1C1C1C] text-[10px] lg:text-[20px] font-[AtypDisplay] xl:text-[24px] font-normal leading-normal">
                Вес
              </p>
              <p className=" col-span-2 text-[#1C1C1C] text-[10px] lg:text-[20px] font-[AtypDisplay] xl:text-[24px] font-normal leading-normal">
                Вид услуги
              </p>
              <p className="text-[#1C1C1C] font-[AtypDisplay] text-[10px] lg:text-[20px] xl:text-[24px] font-normal leading-normal">
                Китай(Авто)
              </p>
              <p className="text-[#1C1C1C] font-[AtypDisplay] text-[10px] lg:text-[20px] xl:text-[24px] font-normal leading-normal">
                Китай(Авиа)
              </p>
              <p className="text-[#1C1C1C] font-[AtypDisplay] text-[10px] lg:text-[20px] xl:text-[24px] font-normal leading-normal">
                Комиссия
              </p>
            </div>
            <div className="grid grid-cols-6 gap-1 px-1 py-[10px] items-center lg:px-[20px] lg:py-[30px] xl:px-[30px] xl:py-[40px] bg-[#F2F2F2]">
              <p className="text-[#1C1C1C] font-[AtypDisplay] text-[8px] xl:text-[20px] lg:text-[16px] font-normal leading-normal">
                0+
              </p>
              <div className=" col-span-2 text-[#1C1C1C] font-[AtypDisplay] lg:text-[16px] text-[8px] xl:text-[20px] font-normal leading-normal">
                <p>Доставка самостоятельно купленных заказов</p>
                <p>Доставка заказов купленных с нашей карты</p>
              </div>
              <div className="text-[#1C1C1C] font-[AtypDisplay] text-[8px] xl:text-[20px] lg:text-[16px] font-normal leading-normal">
                <p>890 сом/кг.*</p>
                <p>890 сом/кг.*</p>
              </div>
              <div className="text-[#1C1C1C] font-[AtypDisplay] text-[8px] xl:text-[20px] lg:text-[16px] font-normal leading-normal">
                <p>890 сом/кг.*</p>
                <p>890 сом/кг.*</p>
              </div>
              <div className="text-[#1C1C1C] font-[AtypDisplay] text-[8px] xl:text-[20px] lg:text-[16px] font-normal leading-normal">
                <p>0%</p>
                <p>7% (мин. 7$)</p>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-1 px-1 py-[10px] items-center lg:px-[20px] lg:py-[30px] xl:px-[30px] xl:py-[40px] bg-[#F4F9FF]">
              <p className="text-[#1C1C1C] font-[AtypDisplay] text-[8px] xl:text-[20px] lg:text-[16px]font-normal leading-normal">
                100+
              </p>
              <div className=" col-span-2 text-[#1C1C1C] font-[AtypDisplay] text-[8px] xl:text-[20px] lg:text-[16px] font-normal leading-normal">
                <p>Доставка самостоятельно купленных заказов</p>
                <p>Доставка заказов купленных с нашей карты</p>
              </div>
              <div className="text-[#1C1C1C] font-[AtypDisplay] text-[8px] xl:text-[20px] lg:text-[16px] font-normal leading-normal">
                <p>890 сом/кг.*</p>
                <p>890 сом/кг.*</p>
              </div>
              <div className="text-[#1C1C1C] font-[AtypDisplay] text-[8px] xl:text-[20px] lg:text-[16px]font-normal leading-normal">
                <p>890 сом/кг.*</p>
                <p>890 сом/кг.*</p>
              </div>
              <div className="text-[#1C1C1C] font-[AtypDisplay] text-[8px] xl:text-[20px] lg:text-[16px]font-normal leading-normal">
                <p>0%</p>
                <p>7% (мин. 7$)</p>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-1 px-1 py-[10px] items-center lg:px-[20px] lg:py-[30px] xl:px-[30px] xl:py-[40px] bg-[#E9F3FF]">
              <p className="text-[#1C1C1C] font-[AtypDisplay] text-[8px] xl:text-[20px] lg:text-[16px]font-normal leading-normal">
                200+
              </p>
              <div className=" col-span-2 text-[#1C1C1C] font-[AtypDisplay] text-[8px] xl:text-[20px] lg:text-[16px] font-normal leading-normal">
                <p>Доставка самостоятельно купленных заказов</p>
                <p>Доставка заказов купленных с нашей карты</p>
              </div>
              <div className="text-[#1C1C1C] font-[AtypDisplay] text-[8px] xl:text-[20px] lg:text-[16px] font-normal leading-normal">
                <p>890 сом/кг.*</p>
                <p>890 сом/кг.*</p>
              </div>
              <div className="text-[#1C1C1C] font-[AtypDisplay] text-[8px] xl:text-[20px] lg:text-[16px]-normal leading-normal">
                <p>890 сом/кг.*</p>
                <p>890 сом/кг.*</p>
              </div>
              <div className="text-[#1C1C1C] font-[AtypDisplay] text-[8px] xl:text-[20px] lg:text-[16px]font-normal leading-normal">
                <p>0%</p>
                <p>7% (мин. 7$)</p>
              </div>
            </div>
          </div>
          <p className="text-[#DA0E15] font-[AtypDisplay] text-[13px] xl:text-[24px] lg:text-[22px] font-normal text-right leading-normal my-[15px] lg:my-[30px] ">
            * При взвешивании используется округление до десятых килограмма!
          </p>
          <p className="text-[#1C1C1C] font-[AtypDisplay] text-[13px] xl:text-[24px] lg:text-[22px] font-normal  leading-normal mb-[40px] lg:mb-[70px] xl:mb-[140px]">
            Внимание! Вышеуказанные цены только для посылок личного
            использования и не включают в себя таможенное оформление товаров,
            ввозимых для коммерческой деятельности, а также дополнительных
            расходов связанных с пересылкой опасных грузов (химически активных
            веществ, легковоспламеняющихся и взрывоопасных материалов и тп.)
          </p>
          <div>
            <h2 className="text-[#1C1C1C] font-[AtypDisplay] text-[20px] lg:text-[30px] xl:text-[44px] font-normal leading-normal">
              Физический и объемный вес
            </h2>
            <p className="text-[#1C1C1C] font-[AtypDisplay] font-normal leading-normal mt-[20px] xl:mt-[40px] text-[13px] xl:text-[24px] lg:text-[22px]">
              При расчете доставки используется объёмный вес и фактический вес
              отправления. Для расчета стоимости отправления всегда используется
              больший вес. Для того чтобы узнать объемный вес можно
              воспользоваться этой формулой: Длина × Ширина × Высота / 6000 =
              Объёмный вес (кг), где длина, ширина и высота в сантиметрах.
              Например: вес товара составляет 1 кг, а его объемный вес 4 кг. В
              таком случае расчет доставки будет производиться по объемному
              весу. Вы можете воспользоваться нашим{" "}
              <span className="underline">калькулятором</span>.
            </p>
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
}

export default PricePage;
