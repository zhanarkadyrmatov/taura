import React from "react";
import Accordion from "../utils/Accordion";
const items = [
  {
    id: 1,
    title:
      "Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?",
    content:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam  vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
  {
    id: 2,
    title:
      "Orci a vitae ut fringilla lacus. At vel dapibus orci elementumac at?",
    content:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam  vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
  {
    id: 3,
    title:
      "Orci a vitae ut fringilla lacus. At vel dapibus orci elementumac at?",
    content:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam  vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
  {
    id: 4,
    title:
      "Orci a vitae ut fringilla lacus. At vel dapibus orci elementumac at?",
    content:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam  vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
  {
    id: 5,
    title:
      "Orci a vitae ut fringilla lacus. At vel dapibus orci elementumac at?",
    content:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam  vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
  {
    id: 6,
    title:
      "Orci a vitae ut fringilla lacus. At vel dapibus orci elementumac at?",
    content:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam  vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
];
function AccordionExpress() {
  return (
    <div className="accordion pt-[50px] pb-[30px] lg:py-[70px] xl:mt-[40px] xl:pt-[120px] xl:mb-[50px]  my-[10px]">
      <div className="max-w-[1570px] lg:px-[30px] xl:mx-auto">
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.30)",
            boxShadow: "0px 0px 15px 0px rgba(119, 119, 119, 0.15)",
            backdropFilter: "blur(11px)",
          }}
          className="py-[40px] lg:py-[60px] w-full lg:px-[52px] px-[20px] lg:rounded-[50px] "
        >
          <h2 className="text-center font-montserrat text-[20px] font-semibold text-[#161616] lg:text-[32px] xl:text-[66px]">
            Часто задаваемые вопросы
          </h2>
          <p className="text-center font-montserrat text-[12px] font-normal text-[#161616] leading-[185%] tracking-[-0.12px] mt-[16px] mb-[20px] lg:text-[18px] lg:tracking-[-0.18px] my-[30px] xl:text-[20px] xl:px-[120px] xl:tracking-[-0.2px] ">
            Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor
            ipsum sem. Neque porta morbi ullamcorper blandit libero quam ligula
            ut aenean.
          </p>
          <div className="flex justify-center flex-col items-center">
            {items.map((item) => {
              return <Accordion item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionExpress;
