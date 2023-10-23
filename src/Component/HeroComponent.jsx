import React, { useState, useEffect } from "react";
import image from "../assets/herobg.png";

const images = [
  "https://ik.imagekit.io/ikmedia/backlit.jpg",
  image,
  "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
];
function HeroComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];

  const heroStyle = {
    backgroundImage: `url(${currentImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "background-image 1s ease-in-out",
  };
  return (
    <div className="" style={heroStyle}>
      <div className="container">
        <div className="lg:grid grid-cols-3 justify-between items-center lg:gap-[0px] xl:gap-[54px] py-[50px] xl:py-[84px] lg:pt-[112px] lg:pb-[60px]">
          <div className=" col-span-2">
            <h1 className="xl:text-[96px] lg:text-[80px] text-[40px] text-white font-[AtypDisplay] font-normal">
              Dui sapien aliquet aliquam
            </h1>
            <p className=" leading-185 xl:text-[24px] lg:text-[20px] text-[14px] font-[AtypDisplay]  text-white mt-[16px] mb-[30px]">
              ОсОО “Таура Трнас Логистик компани” - ведущая логистическая
              компания полного цикла в Кыргызстане.
            </p>
            <a
              className="bg-[#1355A3] py-[10px]  px-[20px] lg:py-[20px] lg:px-[140px] rounded-[15px]  lg:rounded-[30px] font-semibold text-white font-open-sans text-[16px] lg:text-[22px]  "
              href="#"
            >
              GET STARTED
            </a>
          </div>
          <div className=" hidden lg:block flex-auto p-[20px] xl:py-[30px] xl:px-[40px] bg-white bg-opacity-70  rounded-[30px] ">
            <h2 className="text-[22px] xl:text-[34px] font-[AtypDisplay]  text-black leading-185">
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
