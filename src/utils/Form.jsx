import React from "react";
import { Textarea } from "@material-tailwind/react";
import { Select, Option, Button } from "@material-tailwind/react";

function Form() {
  return (
    <div className="xl:w-[720px] lg:w-[600px] rounded-lg xl:bg-[#F0F0F0] xl:bg-opacity-1 bg-opacity-30 bg-gray-300 px-[10px] py-[20px] lg:p-[40px] xl:p-[50px] lg:rounded-[30px]">
      <div className="hidden lg:block">
        <h2 className="text-center xl:text-[60px] xl:text-black   text-white font-atyp-display text-[40px]">
          Напишите нам
        </h2>
        <p className="text-center xl:[20px] xl:text-black text-white font-atyp-display text-[16px] mb-[30px]">
          Тут Вы можете задать интересующий Вас вопрос
        </p>
      </div>
      <form action="">
        <input
          className=" xl:rounded-[20px] xl:h-[60px] xl:bg-opacity-30 xl:bg-black xl:placeholder:text-[16px] placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md mb-[10px] lg:mb-[20px] bg-opacity-50 bg-white p-[10px] w-full"
          type="text"
          placeholder="Имя и Фамилия"
        />
        <input
          className=" xl:placeholder:text-[16px] placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md lg:mb-[20px] mb-[10px] bg-opacity-50 bg-white p-[10px] w-full xl:rounded-[20px] xl:h-[60px] xl:bg-opacity-30 xl:bg-black"
          type="text"
          placeholder="Email или номер телефона"
        />
        <div className="flex justify-between items-center lg:mb-[20px] gap-[10px]">
          <div className="w-[100%]">
            <select
              className="rounded-md mb-[10px] bg-opacity-50 bg-white p-[10px] w-full xl:rounded-[20px] xl:h-[60px] xl:bg-opacity-30 xl:bg-black"
              label=""
            >
              <option className="text-[#161616] font-[Atyp Display]  opacity-70 text-[14px]">
                Material
              </option>
              <option className="text-[#161616] font-[Atyp Display]  opacity-70 text-[14px]">
                Material
              </option>
            </select>
          </div>
          <input
            className=" w-50  placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md mb-[10px] bg-opacity-50 bg-white p-[10px] w-full xl:placeholder:text-[16px] xl:rounded-[20px] xl:h-[60px] xl:bg-opacity-30 xl:bg-black"
            type="text"
            placeholder="Тема"
          />
        </div>
        <Textarea
          className=" min-h-[80px] lg:min-h-[130px] placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md bg-opacity-50 xl:placeholder:text-[16px] bg-white p-[10px] w-full xl:rounded-[20px] xl:h-[60px] xl:bg-opacity-30 xl:bg-black"
          color="blue"
          label=""
          placeholder="Сообщение"
        />
        <Button className="text-center xl:text-[24px] w-full p-[15px] mt-[20px] bg-[#1C1C1C] rounded-[10px]">
          Отправить
        </Button>
      </form>
    </div>
  );
}

export default Form;
