import React from "react";
import Compo from "../assets/company.png";
import Compo3 from "../assets/company3.png";
import Compo1 from "../assets/company1.png";
import Slider from "../utils/Slider";

function CompanyComponent() {
  return (
    <div className="bg-[#F0F0F0] py-[40px] mt-[40px] lg:mt-[70px] lg:py-[70px]  xl:py-[140px] xl:mt-[140px]">
      <div className="container">
        <div className="xl:flex xl:flex-row-reverse xl:gap-[30px] xl:items-end">
          <div className="xl:w-[80%]">
            <h2 className="text-[#1C1C1C] font-[AtypDisplay]  text-[24px] lg:text-[50px] xl:text-[66px] ">
              О компании
            </h2>
            <p className="text-[#161616] font-[AtypDisplay]  text-justify text-[12px] font-normal mt-[10px] mb-[20px] xl:mb-[62px] xl:leading-[185%] lg:text-[16px] xl:text-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s Lorem Ipsum is simply dummy text of the
              printing and
            </p>
            <div className="w-full rounded-[30px]">
              <div className="aspect-ratio-16/9 rounded-[30px]">
                <iframe
                  className="w-[100%] lg:h-[370px] xl:h-[433px] xl:rounded-[30px] rounded-[15px]"
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
          </div>
          <div className="mt-[20px] ">
            <div className="flex gap-[30px]">
              <div className="w-[50%] bg-[#D9D9D9] p-[16px] lg:px-[20px] lg:py-[30px] rounded-[15px]">
                <h2 className="text-black font-[AtypDisplay]  text-[42px] lg:text-[72px] xl:text-[92px]">
                  230+
                </h2>
                <p className="text-[12px] mt-[10px] xl:mt-[56px] xl:text-[18px] lg:text-[16px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <img
                className="w-[45%] lg:w-[470px] xl:block xl:w-[342px] rounded-[15px] rounded-tr-[200px]"
                src="https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp"
                alt=""
              />
            </div>
            <div className="company  relative bg-black mt-[30px] rounded-[15px] p-[16px] xl:p-[40px] flex justify-between  items-center gap-[9px]">
              <div>
                <h2 className="text-[42px] z-10 font-[AtypDisplay]  text-white lg:text-[72px] xl:text-[92px]">
                  145
                </h2>
                <p className="text-[12px] text-white mt-[15px] lg:text-[16px] xl:text-[18px] lgopacity-80 font-[AtypDisplay] ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <img
                className="w-[350px] lg:w-[250px] lg:h-[251px] h-[158px] xl:h-[292px]"
                src={Compo1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default CompanyComponent;
