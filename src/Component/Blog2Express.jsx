import React from "react";
import Img from "../assets/blog2ex.png";
function Blog2Express() {
  return (
    <div className="mt-[40px] lg:mt-[70px] xl:mt-[140px]">
      <div className="container">
        <div className="lg:flex lg:justify-between lg:items-center lg:gap-[64px] xl:gap-[60px]">
          <div>
            <h2 className="font-[AtypDisplay]  leading-normal text-[#1C1C1C] font-normal text-[24px] uppercase lg:text-[50px] xl:text-[66px]">
              ВЫКУПИМ <span className="text-[#067DF6] ">БЕСПЛАТНО</span> ЛЮБОЙ
              ТОВАР
            </h2>
            <p className="font-[AtypDisplay]  leading-[185%] text-justify my-[10px] text-[#1C1C1C] font-normal text-[12px] lg:text-[14px] xl:text-[20px] xl:mt-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum publishing software like Aldus PageMaker including
              versions of Lorem Ipsum
            </p>
          </div>
          <img
            className="w-full h-[150px] lg:w-[320px] lg:h-[370px] lg:rounded-[30px] rounded-[15px] xl:w-[45%] xl:h-[570px]"
            src={Img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Blog2Express;
