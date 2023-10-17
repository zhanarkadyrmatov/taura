import React from "react";
import Blog from "../assets/blogEx.png";

function BlogExpress() {
  return (
    <div className="mt-[40px] xl:mt-[140px]">
      <div className="container">
        <div>
          <div className="lg:flex lg:gap-[60px] items-center">
            <img
              className="hidden lg:block lg:w-[322px] lg:h-[303px] xl:w-[700px] xl:h-[422px]"
              src={Blog}
              alt=""
            />
            <div>
              <h2 className="text-[#1C1C1C] font-[AtypDisplay]  text-[24px] font-normal leading-normal uppercase lg:text-[50px] xl:text-[66px]">
                С нами выгодно
              </h2>
              <p className="text-[#1C1C1C] font-[AtypDisplay]  text-[12px] font-normal leading-[185%] mt-[10px] text-justify lg:text-[14px] xl:text-[20px] xl:mt-[32px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 items-center gap-[10px] lg:gap-[24px] mt-[20px] lg:mt-[30px] xl:mt-[60px]">
            {["2000+", "500", "4000m", "7+"].map((etem) => {
              return (
                <div className="text-[#fff]  [&:nth-child(2)]:gap-[0px] [&:nth-child(2)]:xl:gap-[20px] flex [&:nth-child(2)]:uppercase [&:nth-child(2)]:border-[2px] [&:nth-child(2)]:text-[#067DF6] [&:nth-child(2)]:bg-white flex-col justify-center gap-[20px] xl:gap-[40px]  bg-[#067DF6] border-[#067DF6] rounded-[10px] px-[15px] lg:px-[40px] w-full h-[140px] lg:h-[200px] xl:rounded-[30px]">
                  <h2 className=" font-[AtypDisplay]  text-[34px] font-normal leading-normal uppercase lg:text-[50px] xl:text-[54px]">
                    {etem}
                  </h2>
                  <p className="font-[AtypDisplay]  text-[12px] font-normal leading-[185%]  lg:text-[14px] xl:text-[18px]">
                    Quis fringilla convallis et vitae volutpat at porttitor.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogExpress;
