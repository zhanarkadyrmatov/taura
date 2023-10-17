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
function AccordionComponent() {
  return (
    <div className="mb-[40px] lg:mb-[70px] xl:mb-[100px]">
      <div className="container">
        <h2 className="text-[#161616] text-[24px] xl:text-start text-center font-[AtypDisplay]  font-normal lg:text-[40px] xl:text=[60px] ">
          Часто задаваемые вопросы
        </h2>
        <p className="xl:text-start xl:mx-0 xl:text-[20px] text-[#161616] text-center font-[AtypDisplay]  text-[12px] font-normal tracking-[0.12px] mt-[10px] mb-[20px]  opacity-70 lg:text-[16px] lg:leading-[185%] lg:mx-10 lg:mt-[20px] lg:mb-[40px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text
        </p>
        <div className="flex xl:grid grid-cols-2 flex-wrap xl:gap-x-[36px] justify-center">
          {items.map((item) => {
            return <Accordion item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AccordionComponent;
