import React from "react";
import Express2 from "../assets/Express1.png";
import Express3 from "../assets/slideEx2.png";
import Express4 from "../assets/slideEx3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar } from "@material-tailwind/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Pagination } from "swiper/modules";

function HeroExpress() {
  return (
    <div className="bg-[#1C1C1C] mt-[50px] xl:mt-[100px] pb-[50px] pt-[40px] lg:pt-[70px] xl:pt-[15px]">
      <div className="container">
        <div className="xl:grid xl:grid-cols-2 xl:gap-[100px] items-center">
          <div>
            <h1 className="xl:text-[96px] lg:text-[90px] text-[40px] text-white font-[AtypDisplay]  font-normal">
              Dui sapien aliquet aliquam
            </h1>
            <p className="leading-185 xl:text-[24px] lg:text-[20px] text-[14px] font-[AtypDisplay]  text-white mt-[16px] mb-[30px]">
              Quis fringilla convallis et vitae volutpat at porttitor. Est
              tincidunt massa aliquam sed enim rhoncus. Id nullam sollicitudin
              aliquet in.
            </p>
            <div className="lg:flex lg:gap-[104px]">
              <div className="xl:hidden flex flex-col xl:items-center gap-[30px] xl:gap-[114px]">
                <div className="text-[#fff] font-[AtypDisplay] ">
                  <h2 className="text-[34px] lg:text-[54px] font-normal leading-normal">
                    2000+
                  </h2>
                  <p className="text-[12px] lg:text-[18px] font-normal leading-[185%]">
                    Quis fringilla convallis et vitae volutpat at porttitor.
                  </p>
                </div>
                <div>
                  <div className="flex items-center -space-x-10">
                    <Avatar
                      variant="circular"
                      alt="user 1"
                      className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] rounded-[100px]"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <Avatar
                      variant="circular"
                      alt="user 2"
                      className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] rounded-[100px]"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                    />
                    <Avatar
                      variant="circular"
                      alt="user 3"
                      className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] rounded-[100px]"
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                    />
                    <Avatar
                      variant="circular"
                      alt="user 4"
                      className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] rounded-[100px]"
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                    />
                    <div
                      variant="circular"
                      className="relative flex w-[60px] h-[60px] lg:w-[90px] lg:h-[90px]  rounded-[100px] bg-[#D9D9D9] justify-center items-center"
                    >
                      <span className="text-[20px] lg:text-[36px] font-[AtypDisplay]  font-normal leading-normal">
                        212+
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-2 xl:gap-[71px] xl:mt-[50px] xl:mb-[80px] lg:grid-cols-1  gap-[20px] lg:gap-[30px] mt-[20px]">
                <a
                  className="flex items-center p-[10px] lg:py-[18px] lg:px-[28px] bg-white rounded-[14px] gap-2 lg:gap-[14px]"
                  href="#"
                >
                  <svg
                    className="w-[24px] h-[24px] lg:h-[45px] lg:w-[45px] "
                    xmlns="http://www.w3.org/2000/svg"
                    width="47"
                    height="46"
                    viewBox="0 0 47 46"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_688_27321)">
                      <path
                        d="M22.0874 21.9329L0.857422 42.0535C1.09583 42.8177 1.52426 43.5226 2.10997 44.1142C2.69567 44.7057 3.42313 45.1683 4.23675 45.4665C5.05037 45.7648 5.92861 45.8908 6.80432 45.835C7.68003 45.7791 8.53004 45.5429 9.28936 45.1444L33.1771 32.8375L22.0874 21.9329Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M43.5531 18.5128L33.2233 13.1605L21.5957 22.3906L33.2706 32.8086L43.5218 27.5137C44.4299 27.0836 45.1906 26.4368 45.7213 25.6434C46.252 24.8501 46.5326 23.9405 46.5326 23.0132C46.5326 22.0859 46.252 21.1763 45.7213 20.3829C45.1906 19.5896 44.4299 18.9428 43.5218 18.5127H43.5535L43.5531 18.5128Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M0.855992 3.87325C0.727668 4.30239 0.663789 4.7452 0.666075 5.18976V40.7368C0.667405 41.1812 0.731223 41.6236 0.855992 42.0534L22.8138 22.4481L0.855992 3.87325Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M22.2456 22.9633L33.2246 13.1606L9.36855 0.796384C8.47099 0.320873 7.45014 0.0690519 6.40998 0.0665688C3.82872 0.0620307 1.5594 1.61177 0.857422 3.85892L22.2456 22.9633Z"
                        fill="#34A853"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_688_27321">
                        <rect
                          width="45.8667"
                          height="45.8667"
                          fill="white"
                          transform="translate(0.666016 0.0666656)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="text-[#1C1C1C] font-Ubuntu flex flex-col justify-center items-start">
                    <span className="text-[8px] lg:text-[11px] font-bold	leading-normal ">
                      ANDROID APP ON
                    </span>
                    <span className="text-[16px] lg:text-[31.533px] font-medium leading-normal">
                      Google play
                    </span>
                  </div>
                </a>
                <a
                  className="flex items-center p-[10px] lgpy-[18px] lg:px-[28px] bg-white rounded-[14px] gap-2 lg:gap-[14px]"
                  href="#"
                >
                  <svg
                    className="w-[24px] h-[24px] lg:h-[45px] lg:w-[45px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="47"
                    height="46"
                    viewBox="0 0 47 46"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_688_27330)">
                      <path
                        d="M24.4123 9.0474C24.2633 9.04902 24.1155 9.02127 23.9772 8.96574C23.839 8.91022 23.713 8.82801 23.6065 8.7238C23.5 8.61959 23.4151 8.49543 23.3566 8.35841C23.2981 8.22138 23.2672 8.07417 23.2656 7.9252C23.2656 3.58315 26.8616 0.0667084 31.2892 0.0667084C31.4383 0.0646888 31.5863 0.0921579 31.7248 0.147537C31.8632 0.202915 31.9893 0.285112 32.0959 0.389399C32.2025 0.493687 32.2874 0.618009 32.3457 0.755218C32.4041 0.892427 32.4347 1.03982 32.4359 1.18891C32.4359 5.53096 28.843 9.0474 24.4123 9.0474Z"
                        fill="#1C1C1C"
                      />
                      <path
                        d="M24.4113 9.0474C24.2623 9.04902 24.1145 9.02127 23.9762 8.96575C23.838 8.91022 23.712 8.82801 23.6055 8.7238C23.4991 8.61959 23.4141 8.49543 23.3557 8.35841C23.2972 8.22138 23.2662 8.07418 23.2646 7.9252C23.2646 3.58315 26.8606 0.0667084 31.2882 0.0667084C31.4373 0.0646888 31.5854 0.092158 31.7238 0.147537C31.8622 0.202915 31.9883 0.285112 32.0949 0.389399C32.2015 0.493687 32.2864 0.618009 32.3447 0.755218C32.4031 0.892427 32.4337 1.03982 32.4349 1.18891C32.4349 5.53096 28.842 9.0474 24.4113 9.0474ZM41.1526 32.6871C41.596 33.0112 41.7397 33.6044 41.489 34.0875C37.4527 41.995 34.2329 45.9334 31.2913 45.9334C29.9214 45.9334 28.576 45.4992 27.2642 44.6552C26.3227 44.0507 25.2324 43.7183 24.1138 43.6945C22.9952 43.6708 21.8918 43.9567 20.9254 44.5207C19.3354 45.4533 17.8218 45.9334 16.3846 45.9334C12.0579 45.9334 4.91797 32.8858 4.91797 25.7276C4.91797 18.0831 9.01233 12.255 15.238 12.255C18.1673 12.255 20.6961 12.677 22.8213 13.5362C23.7202 13.897 24.7385 13.8726 25.6161 13.4598C27.3407 12.6464 29.6156 12.255 32.4349 12.255C35.881 12.255 38.8868 13.9368 41.382 17.1933C41.4722 17.3108 41.538 17.4451 41.5754 17.5884C41.6128 17.7317 41.621 17.8811 41.5996 18.0277C41.5782 18.1742 41.5277 18.315 41.4509 18.4417C41.3741 18.5683 41.2727 18.6783 41.1526 18.765C38.367 20.8137 37.0246 23.1101 37.0246 25.7276C37.0246 28.342 38.367 30.6414 41.1526 32.6871Z"
                        fill="#1C1C1C"
                      />
                      <path
                        d="M41.1526 32.687C41.596 33.0112 41.7397 33.6044 41.489 34.0875C37.4527 41.9949 34.2329 45.9333 31.2913 45.9333C29.9214 45.9333 28.576 45.4991 27.2642 44.6552C26.3227 44.0507 25.2324 43.7182 24.1138 43.6945C22.9952 43.6707 21.8918 43.9567 20.9254 44.5206C19.3354 45.4533 17.8218 45.9333 16.3846 45.9333C12.0579 45.9333 4.91797 32.8858 4.91797 25.7275C4.91797 18.0831 9.01233 12.255 15.238 12.255C18.1673 12.255 20.6961 12.6769 22.8213 13.5362C23.7202 13.897 24.7385 13.8725 25.6161 13.4597C27.3407 12.6464 29.6156 12.255 32.4349 12.255C35.881 12.255 38.8868 13.9368 41.382 17.1933C41.4722 17.3107 41.538 17.4451 41.5754 17.5884C41.6128 17.7317 41.621 17.8811 41.5996 18.0276C41.5782 18.1742 41.5277 18.315 41.4509 18.4416C41.3741 18.5683 41.2727 18.6782 41.1526 18.765C38.367 20.8137 37.0246 23.1101 37.0246 25.7275C37.0246 28.3419 38.367 30.6414 41.1526 32.687Z"
                        fill="#1C1C1C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_688_27330">
                        <rect
                          width="45.8667"
                          height="45.8667"
                          fill="white"
                          transform="translate(0.332031 0.0666656)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="text-[#1C1C1C] font-Ubuntu flex flex-col justify-center items-start">
                    <span className="m-0 p-0 text-[8px] lg:text-[11px] font-bold	leading-normal">
                      Download on the
                    </span>
                    <span className="m-0 p-0 text-[16px] lg:text-[31.533px] font-medium leading-normal">
                      App Store
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="hidden xl:flex items-center gap-[114px]">
              <div className="flex-1 text-[#fff] font-[AtypDisplay] ">
                <h2 className="text-[54px] font-normal leading-normal">
                  2000+
                </h2>
                <p className="text-[18px] font-normal leading-[185%]">
                  Quis fringilla convallis et vitae volutpat at porttitor.
                </p>
              </div>
              <div>
                <div className="flex items-center -space-x-10">
                  <Avatar
                    variant="circular"
                    alt="user 1"
                    className="w-[100px] h-[100px] rounded-[100px]"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  />
                  <Avatar
                    variant="circular"
                    alt="user 2"
                    className="w-[100px] h-[100px] rounded-[100px]"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                  />
                  <Avatar
                    variant="circular"
                    alt="user 3"
                    className="w-[100px] h-[100px] rounded-[100px]"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                  />
                  <Avatar
                    variant="circular"
                    alt="user 4"
                    className="w-[100px] h-[100px] rounded-[100px]"
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                  />
                  <div
                    variant="circular"
                    className="relative flex w-[100px] h-[100px] rounded-[100px] bg-[#D9D9D9] justify-center items-center"
                  >
                    <span className="text-[36px] font-[AtypDisplay]  font-normal leading-normal">
                      212+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" hidden xl:block w-full">
            <Swiper
              grabCursor={true}
              pagination={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-120%", 0, -400],
                },
                next: {
                  shadow: true,
                  translate: ["120%", 0, -400],
                },
              }}
              modules={[EffectCreative, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={Express2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Express3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Express4} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroExpress;
