import React, { useState } from "react";
import { Textarea } from "@material-tailwind/react";
import { Select, Option, Button } from "@material-tailwind/react";
import axios from "axios";
import { useForm } from "react-hook-form";

function Form({ handleOpen }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    try {
      const response = axios.post(
        "http://192.168.89.10:8000/apps/feedback/",
        data
      );
      reset();
      console.log("Form submitted successfully:", response.data);
      console.log(data);
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
        console.error("Status Code:", error.response.status);
        console.error("Response Headers:", error.response.headers);
      } else if (error.request) {
        console.error(
          "No response was received from the server:",
          error.request
        );
      } else {
        console.error("Error while setting up the request:", error.message);
      }
      console.error("Error configuration:", error.config);
    }
  };

  return (
    <div className="xl:w-[720px] relative z-20 lg:w-[600px] rounded-lg xl:bg-[#F0F0F0] xl:bg-opacity-1 bg-opacity-30 bg-gray-300 px-[10px] py-[20px] lg:p-[40px] xl:p-[50px] lg:rounded-[30px]">
      <div className="hidden lg:block">
        <h2 className="text-center xl:text-[60px] xl:text-black   text-white font-[AtypDisplay]  text-[40px]">
          Напишите нам
        </h2>
        <p className="text-center xl:[20px] xl:text-black text-white font-[AtypDisplay]  text-[16px] mb-[30px]">
          Тут Вы можете задать интересующий Вас вопрос
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} action="">
        {errors.fio && <p className="text-red-600">Заполните это поле</p>}
        <input
          className=" xl:rounded-[20px] xl:h-[60px] xl:bg-opacity-30 xl:bg-black xl:placeholder:text-[16px] placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md mb-[10px] lg:mb-[20px] bg-opacity-50 bg-white p-[10px] w-full"
          type="text"
          placeholder="Имя и Фамилия"
          {...register("fio", { required: true })}
        />
        {errors.email && <p className="text-red-600">Заполните это поле</p>}
        <input
          className=" xl:placeholder:text-[16px] placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md lg:mb-[20px] mb-[10px] bg-opacity-50 bg-white p-[10px] w-full xl:rounded-[20px] xl:h-[60px] xl:bg-opacity-30 xl:bg-black"
          type="text"
          placeholder="Email или номер телефона"
          {...register("email", { required: true })}
        />

        <div className="flex justify-between items-center  gap-[10px]">
          <div className="w-[100%]">
            <select
              {...register("theme")}
              className="rounded-md mb-[10px] bg-opacity-50 bg-white p-[10px] w-full xl:rounded-[20px] xl:h-[60px] xl:bg-opacity-30 xl:bg-black"
              label=""
            >
              <option
                value="Cargo"
                className="text-[#161616] font-[Atyp Display]  opacity-70 text-[14px]"
              >
                Cargo
              </option>
              <option
                value="Forwarding"
                className="text-[#161616] font-[Atyp Display]  opacity-70 text-[14px]"
              >
                Forwarding
              </option>
            </select>
          </div>
          <div className="w-full">
            {errors.title && <p className="text-red-600">Заполните это поле</p>}
            <input
              className=" placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md mb-[10px] bg-opacity-50 bg-white p-[10px] w-full xl:placeholder:text-[16px] xl:rounded-[20px] xl:h-[60px] xl:bg-opacity-30 xl:bg-black"
              type="text"
              placeholder="Тема"
              {...register("title", { required: true })}
            />
          </div>
        </div>

        {errors.description && (
          <p className="text-red-600">Заполните это поле</p>
        )}
        <textarea
          className=" focus:rounded-md min-h-[80px] lg:min-h-[130px] placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md bg-opacity-50 xl:placeholder:text-[16px] bg-white p-[10px] w-full xl:rounded-[20px] xl:h-[60px] xl:bg-opacity-30 xl:bg-black"
          color="blue"
          label=""
          placeholder="Сообщение"
          {...register("description", { required: true })}
        />

        <Button
          type="submit"
          className="text-center xl:text-[24px] w-full p-[15px] mt-[20px] bg-[#1C1C1C] rounded-[10px]"
        >
          {isSubmitting ? (
            <span className="animate-spin">Loading...</span>
          ) : (
            "Отправить"
          )}
        </Button>
      </form>
    </div>
  );
}

export default Form;
