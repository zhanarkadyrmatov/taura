import React, { useState } from "react";
import { Textarea } from "@material-tailwind/react";
import { Select, Option, Button } from "@material-tailwind/react";
import axios from "axios";

function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fio: "",
    email: "",
    number: null,
    theme: "Cargo",
    title: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({
    fio: false,
    email: false,
    number: false,
    title: false,
    description: false,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, fio: e.target.value });
  };

  const handleContactChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setFormData({ ...formData, number: Number(value) }); // сохраняем как число, если возможно
    } else {
      setFormData({ ...formData, email: value }); // сохраняем как строку, если не является числом
    }
  };

  const handleMessageChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleTemaChange = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const handleValidation = () => {
    const EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const errors = {
      fio: formData.fio.trim() === "",
      number: formData.number === null,
      email: !EMAIL_REGEXP.test(formData.email),
      title: formData.title.trim() === "",
      description: formData.description.trim() === "",
    };
    setFormErrors(errors);
  };

  // Обработка отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidation();
    if (Object.values(formErrors).every((error) => !error)) {
      setIsSubmitting(true);
      handleFormSubmit(e);
      setIsSubmitting(false);

      // handleFormSubmit(e);
    }
  };

  // Проверка при отправке формы
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.89.3:8000/apps/feedback/",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      setFormData({
        fio: "",
        email: "",
        number: null,
        theme: "Cargo",
        title: "",
        description: "",
      });
    } catch (error) {
      console.error("Error while submitting the form:", error);
      if (error.response) {
        console.error("Error status:", error.response.status);
        console.error("Error response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
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
      <form onSubmit={handleSubmit} action="">
        {formErrors.fio && (
          <p className="text-red-600">Please fill out this field.</p>
        )}
        {}
        <input
          className=" xl:rounded-[20px] xl:h-[60px] xl:bg-opacity-30 xl:bg-black xl:placeholder:text-[16px] placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md mb-[10px] lg:mb-[20px] bg-opacity-50 bg-white p-[10px] w-full"
          type="text"
          placeholder="Имя и Фамилия"
          value={formData.fio}
          onChange={handleInputChange}
        />
        {formErrors.email && (
          <p className="text-red-600">Please fill out this field.</p>
        )}
        <input
          className=" xl:placeholder:text-[16px] placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md lg:mb-[20px] mb-[10px] bg-opacity-50 bg-white p-[10px] w-full xl:rounded-[20px] xl:h-[60px] xl:bg-opacity-30 xl:bg-black"
          type="text"
          placeholder="Email или номер телефона"
          onChange={handleContactChange}
        />

        <div className="flex justify-between items-center  gap-[10px]">
          <div className="w-[100%]">
            <select
              onChange={(e) =>
                setFormData({ ...formData, theme: e.target.value })
              }
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
            {formErrors.title && (
              <p className="text-red-600">Заполните это поле</p>
            )}
            <input
              className=" placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md mb-[10px] bg-opacity-50 bg-white p-[10px] w-full xl:placeholder:text-[16px] xl:rounded-[20px] xl:h-[60px] xl:bg-opacity-30 xl:bg-black"
              type="text"
              placeholder="Тема"
              value={formData.title}
              onChange={handleTemaChange}
            />
          </div>
        </div>

        {formErrors.description && (
          <p className="text-red-600">Please fill out this field.</p>
        )}
        <textarea
          className=" focus:rounded-md min-h-[80px] lg:min-h-[130px] placeholder:text-[#161616] placeholder:opacity-70 placeholder:font-[Atyp Display]  placeholder:text-[14px] rounded-md bg-opacity-50 xl:placeholder:text-[16px] bg-white p-[10px] w-full xl:rounded-[20px] xl:h-[60px] xl:bg-opacity-30 xl:bg-black"
          color="blue"
          label=""
          placeholder="Сообщение"
          value={formData.description}
          onChange={handleMessageChange}
        />

        <Button
          onClick={handleSubmit}
          className="text-center xl:text-[24px] w-full p-[15px] mt-[20px] bg-[#1C1C1C] rounded-[10px]"
        >
          {isSubmitting ? (
            <span className="animate-spin">
              {/* Add your spinner component here */}
              Loading...
            </span>
          ) : (
            "Отправить"
          )}
        </Button>
      </form>
    </div>
  );
}

export default Form;
