import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { HiMinus, HiPlus } from "react-icons/hi2";

function Accordion({ item }) {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleAccordion = (itemId) => {
    if (openItemId === itemId) {
      setOpenItemId(null);
    } else {
      setOpenItemId(itemId);
    }
  };

  return (
    <>
      <div
        className="mb-[16px]  lg:mb-[26px] xl:mb-[30px] lg:w-[764px] xl:w-[700px]"
        key={item.id}
      >
        <div
          style={{
            backgroundColor: openItemId === item.id ? "#F0F0F0" : "#fff",
          }}
          className="flex justify-between items-center gap-2 py-[10px] px-[20px] rounded-[20px] lg:p-[30px] lg:shadow-md"
          onClick={() => toggleAccordion(item.id)}
        >
          <p className="text-[#161616] font-[AtypDisplay]  text-[14px] leading-6 lg:text-[16px] xl:text-[20px]">
            {item.title}
          </p>
          <p>
            {openItemId === item.id ? (
              <HiMinus className="xl:w-[30px] xl:h-[30px]" />
            ) : (
              <HiPlus className="xl:w-[30px] xl:h-[30px]" />
            )}
          </p>
        </div>
        <Collapse isOpened={openItemId === item.id}>
          <p className="text-[#161616] rounded-b-[20px] bg-white pt-[10px] pb-[16px] px-[16px] shadow-md  text-justify font-[AtypDisplay]  text-[12px] font-normal mr-[10px] ml-[10px] lg:p-[30px] lg:ml-[45px] lg:mr-[45px] lg:text-[16px] xl:text-[18px] ">
            {item.description}
          </p>
        </Collapse>
      </div>
    </>
  );
}

export default Accordion;
