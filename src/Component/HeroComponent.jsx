import React from "react";

function HeroComponent() {
  return (
    <div id="hero">
      <div className="container">
        <div className="flex items-center lg:gap-[0px] xl:gap-[84px] py-[50px] xl:py-[84px] lg:pt-[112px] lg:pb-[60px] ">
          <div>
            <h1 className="xl:text-[96px] lg:text-[90px] text-[40px] text-white font-Atyp-Display font-normal">
              Dui sapien aliquet aliquam
            </h1>
            <p className=" leading-185 xl:text-[24px] lg:text-[20px] text-[14px] font-Atyp-Display text-white mt-[16px] mb-[30px]">
              Quis fringilla convallis et vitae volutpat at porttitor. Est
              tincidunt massa aliquam sed enim rhoncus. Id nullam sollicitudin
              aliquet in.
            </p>
            <a
              className="bg-[#1355A3] py-[10px]  px-[20px] lg:py-[20px] lg:px-[140px] rounded-[15px]  lg:rounded-[30px] font-semibold text-white font-open-sans text-[16px] lg:text-[22px]  "
              href="#"
            >
              GET STARTED
            </a>
          </div>
          <div className=" hidden lg:block w-[330px] xl:w-[600px] p-[20px] xl:py-[30px] xl:px-[40px] bg-white bg-opacity-70  rounded-[30px] ">
            <h2 className="text-[22px] xl:text-[34px] font-Atyp-Display text-black leading-185">
              LOREM IPSUM
            </h2>
            <p className="text-black font-display text-[17px]  xl:text-[24px] font-normal leading-[185%] mt-[24px] lg:ml-[10px]">
              Шоппинг в США, Китае, Турции и России стал проще и доступнее! Наша
              компания предлагает полный спектр услуг по доставке в полный
              спектр услуг по доставке в
            </p>
            <a
              className="text-black font-display text-[20px] xl:text-[28px] font-normal leading-[185%] uppercase flex justify-end"
              href="#"
            >
              Learn more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
