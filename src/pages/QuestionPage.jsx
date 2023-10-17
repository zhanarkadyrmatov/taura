import React from "react";
import HeaderComponent from "../Component/HeaderComponent";
import FooterComponent from "../Component/FooterComponent";

function QuestionPage() {
  return (
    <div>
      <HeaderComponent />
      <div className="companypage xl:py-[100px] py-[60px] lg:py-[80px] mb-[40px] lg:mb-[76px] xl:mb-[120px]">
        <div className="container">
          <h2 className="text-[#FFF] font-[AtypDisplay]  text-[36px] lg:text-[76px] xl:text-[96px] font-normal leading-normal">
            Часто задаваемые вопросы
          </h2>
          <p className="text-[#FFF] font-[AtypDisplay]  text-[15px] lg:text-[24px] xl:text-[36px] font-normal leading-normal">
            Это короткий список довольно часто возникающих вопросов
          </p>
        </div>
      </div>
      <main className="mb-[40px] lg:mb-[70px] xl:mb-[100px]">
        <div className="container">
          <h2 className="text-[#161616] text-[26px] font-[AtypDisplay]  font-normal leading-[150%] mb-[20px] lg:mb-[30px]  xl:text-[36px] ">
            Все вопросы
          </h2>
          <div className="lg:grid grid-cols-3 justify-start items-start">
            <div className="">
              <ul className="flex w-full flex-col items-center justify-center gap-[30px] lg:pr-[20px] lg:border-r-[1px] lg:border-black">
                <li
                  style={{
                    boxShadow: "0px 0px 15px 0px rgba(119, 119, 119, 0.10)",
                  }}
                  className="text-[#161616] w-full text-[14px] font-[AtypDisplay]  font-normal leading-normal py-[10px] px-[20px] bg-white rounded-[15px] lg:text-[16px] xl:text-[20px]"
                >
                  Когда осуществляются отправки?
                </li>
                <li
                  style={{
                    boxShadow: "0px 0px 15px 0px rgba(119, 119, 119, 0.10)",
                  }}
                  className="text-[#161616] w-full text-[14px] font-[AtypDisplay]  font-normal leading-normal py-[10px] px-[20px] bg-white rounded-[15px] lg:text-[16px] xl:text-[20px]"
                >
                  Зачем Вам нужна копия моего паспорта?
                </li>
                <li
                  style={{
                    boxShadow: "0px 0px 15px 0px rgba(119, 119, 119, 0.10)",
                  }}
                  className="text-[#161616] w-full text-[14px] font-[AtypDisplay]  font-normal leading-normal py-[10px] px-[20px] bg-white rounded-[15px] lg:text-[16px] xl:text-[20px]"
                >
                  Что вы не можете перевозить?
                </li>
                <li
                  style={{
                    boxShadow: "0px 0px 15px 0px rgba(119, 119, 119, 0.10)",
                  }}
                  className="text-[#161616] w-full  text-[14px] font-[AtypDisplay]  font-normal leading-normal py-[10px] px-[20px] bg-white rounded-[15px] lg:text-[16px] xl:text-[20px]"
                >
                  Сколько и каких товаров можно ввезти беспошлинно?
                </li>
                <li
                  style={{
                    boxShadow: "0px 0px 15px 0px rgba(119, 119, 119, 0.10)",
                  }}
                  className="text-[#161616] w-full text-[14px] font-[AtypDisplay]  font-normal leading-normal py-[10px] px-[20px] bg-white rounded-[15px] lg:text-[16px] xl:text-[20px]"
                >
                  Зачем покупать в Китае и где искать нужную мне вещь?
                </li>
              </ul>
            </div>
            <div className="mt-[40px] lg:mt-0 lg:pl-[30px] col-span-2">
              <div
                className="m
              xl:mb-[60px] mb-[20px] lg:mb-[30px]"
              >
                <h4 className="text-[#161616] text-[16px] font-[AtypDisplay]  font-normal leading-[150%] mb-[10px] lg:text-[18px] xl:text-[36px]">
                  Когда осуществляются отправки?
                </h4>
                <p className="text-[#161616] text-[12px] font-[AtypDisplay]  font-normal leading-[150%] lg:text-[14px] xl:text-[20px]">
                  Отправки происходят на регулярной основе один раз в неделю. Из
                  США это вторник, из Германии это понедельник. Соответственно в
                  отправки попадает весь груз, который пришел в понедельник и
                  пятницу соответственно. В субботу и воскресенье склады не
                  работают!
                </p>
              </div>
              <div
                className="m
              xl:mb-[60px] mb-[20px] lg:mb-[30px]"
              >
                <h4 className="text-[#161616] text-[16px] font-[AtypDisplay]  font-normal leading-[150%] mb-[10px] lg:text-[18px] xl:text-[36px]">
                  Зачем Вам нужна копия моего паспорта?
                </h4>
                <p className="text-[#161616] text-[12px] font-[AtypDisplay]  font-normal leading-[150%] lg:text-[14px] xl:text-[20px]">
                  Копия Вашего паспорта нужна для того чтобы мы могли произвести
                  таможенное оформление Вашей посылки за Вас. Это относится
                  только к физическим лицам
                </p>
              </div>
              <div
                className="m
              xl:mb-[60px] mb-[20px] lg:mb-[30px]"
              >
                <h4 className="text-[#161616] text-[16px] font-[AtypDisplay]  font-normal leading-[150%] mb-[10px] lg:text-[18px] xl:text-[36px]">
                  Что вы не можете перевозить?
                </h4>
                <p className="text-[#161616] text-[12px] font-[AtypDisplay]  font-normal leading-[150%] lg:text-[14px] xl:text-[20px]">
                  Любые товары стоимостью больше 200 евро подлежат обязательному
                  таможенному оформлению без применения упрощенной формы) т.е Вы
                  будете оплачивать НДС, импортную пошлину, работу брокера,
                  таможенные сборы, а также по необходимости Вам нужно будет
                  предоставить все необходимые документы для таможенного
                  оформления (сертификаты, инвойсы и тп.)В МПО (Международные
                  Почтовые Отправления) мы не перевозим следующие категории
                  товаров:
                </p>
              </div>
              <div
                className="m
              xl:mb-[60px] mb-[20px] lg:mb-[30px]"
              >
                <h4 className="text-[#161616] text-[16px] font-[AtypDisplay]  font-normal leading-[150%] mb-[10px] lg:text-[18px] xl:text-[36px]">
                  Сколько и каких товаров можно ввезти беспошлинно?{" "}
                </h4>
                <p className="text-[#161616] text-[12px] font-[AtypDisplay]  font-normal leading-[150%] lg:text-[14px] xl:text-[20px]">
                  С образованием Таможенного союза ЕврАзЭС физические лица имеют
                  право ввозить без уплаты таможенных пошлин товары,
                  предназначенные для личного потребления. Порядок установлен
                  Соглашением "О порядке перемещения физическими лицами товаров
                  для личного пользования через таможенную границу таможенного
                  союза и совершения таможенных операций, связанных с их
                  выпуском". В том случае, если гражданин Кыргызской Республики
                  въезжает или завозит на единую таможенную территорию с
                  территории государства не члена таможенного союза, то он
                  вправе ввезти, без уплаты таможенных пошлин, товары для
                  личного пользования, таможенная стоимость которых (в
                  эквиваленте) и вес которых не превышают:
                </p>
                <p className="text-[#161616] text-[12px] font-[AtypDisplay]  font-normal leading-[150%] lg:text-[14px] xl:text-[20px]">
                  <ul className="list-disc ml-[15px]">
                    <li>
                      10 000 Евро и 50 кг. при ввозе воздушным транспортом
                      сопровождаемым багажом;
                    </li>
                    <li>
                      1500 Евро и 50 кг. при перемещении любыми другими видами
                      транспорта;
                    </li>
                    <li>
                      200 Евро и 31 кг. при пересылке в международных почтовых
                      отправлениях в течение одного календарного месяца, в адрес
                      одного физического лица;
                    </li>
                    <li>
                      200 Евро и 31 кг. при доставке перевозчиком в течении
                      одного календарного месяца, в адрес одного физического
                      лица в несопровождаемом багаже.
                    </li>
                  </ul>
                </p>
                <p className="text-[#161616] text-[12px] font-[AtypDisplay]  font-normal leading-[150%] lg:text-[14px] xl:text-[20px]">
                  Для некоторых видов товаров установлены ограничения и запрет к
                  ввозу на Единую таможенную территорию (Приложение №2).
                  Установлен перечень товаров, которые не относятся к товарам
                  для личного пользования (Приложение ЩЩ№1). Таким образом одно
                  физическое лицо может завозить до 31кг. в месяц общей
                  стоимостью до 200 евро, товаров для личного использования,
                  исключая товары из вышеуказанных Приложений к Соглашению, к
                  которым также применяются количественные ограничения на
                  однородный товар.
                </p>
              </div>
              <div className="">
                <h4 className="text-[#161616] text-[16px] font-[AtypDisplay]  font-normal leading-[150%] mb-[10px] lg:text-[18px] xl:text-[36px]">
                  Зачем покупать в США и где искать нужную мне вещь?{" "}
                </h4>
                <p className="text-[#161616] text-[12px] font-[AtypDisplay]  font-normal leading-[150%] lg:text-[14px] xl:text-[20px]">
                  Мы предоставляем неограниченные возможности для покупки
                  товаров и услуг в американских магазинах. Даже не находясь в
                  США территориально, Вы сможете приобрести все, что только
                  пожелаете. Многие товары из США, обойдутся Вам гораздо
                  дешевле, чем те же, приобретенные в Кыргызстане, даже с учетом
                  пересылки. Американская мечта теперь ближе к Вам, чем
                  когда-либо прежде. По этой ссылке вы можете найти информацию о
                  самых популярных интернет магазинах США.smartex.kg - мост
                  между кыргызским покупателем и американским рынком.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}

export default QuestionPage;
