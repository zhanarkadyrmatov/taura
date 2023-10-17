import React from "react";
import Form from "../utils/Form";

function FormComponent() {
  return (
    <div className="form bg-[#1C1C1C] py-[40px] my-[40px] lg:py-[54px] xl:my-[147px]">
      <div className="container">
        <div className="lg:flex lg:items-center xl:gap-[58px] gap-[10px]">
          <div>
            <h2 className="text-white text-center font-[AtypDisplay]  text-[24px] font-normal leading-normal xl:text-[80px] lg:text-[60px]">
              Остались вопросы?
            </h2>
            <p className="text-white xl:text-[28px] text-center font-[AtypDisplay]  text-[12px] font-normal leading-normal mb-[20px] mt-[10px] xl:mt-[40px] lg:text-[18px]">
              Напишите нашим специалистам и получите бесплатную консультацию
            </p>
          </div>
          <Form className="xl:w-[50%]" />
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
