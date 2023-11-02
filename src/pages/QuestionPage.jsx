import React from "react";
import HeaderComponent from "../Component/HeaderComponent";
import FooterComponent from "../Component/FooterComponent";
import { fetchQuestion } from "../api/question";
import { useQuery } from "react-query";
import Loading from "../utils/Loading";
import { ScrollToTopOnMount } from "../utils/ScrollToTopOnMount";

function QuestionPage() {
  const { isLoading, isError, data } = useQuery("fetchQuestion", fetchQuestion);

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  console.log(data);
  return (
    <>
      <ScrollToTopOnMount />
      <HeaderComponent />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="companypage mt-[100px] xl:py-[100px] py-[60px] lg:py-[80px] mb-[40px] lg:mb-[76px] xl:mb-[120px]">
            <div className="container">
              <h2 className="text-[#FFF] font-[AtypDisplay]  text-[36px] lg:text-[76px] xl:text-[96px] font-normal leading-normal">
                Часто задаваемые вопросы
              </h2>
              <p className="text-[#FFF] font-[AtypDisplay]  text-[15px] lg:text-[24px] xl:text-[36px] font-normal leading-normal">
                Это короткий список довольно часто возникающих вопросов
              </p>
            </div>
          </div>
          <main className="mb-[40px] lg:mb-[70px] xl:mb-[100px]">
            <div className="container">
              <h2 className="text-[#161616] text-[26px] font-[AtypDisplay]  font-normal leading-[150%] mb-[20px] lg:mb-[30px]  xl:text-[36px] ">
                Все вопросы
              </h2>
              <div className="lg:grid grid-cols-3 justify-start items-start">
                <div className="">
                  <ul className="flex w-full flex-col items-center justify-center gap-[30px] lg:pr-[20px] lg:border-r-[1px] lg:border-black">
                    {data?.map((item) => {
                      return (
                        <li
                          key={item.id}
                          style={{
                            boxShadow:
                              "0px 0px 15px 0px rgba(119, 119, 119, 0.10)",
                          }}
                          className="text-[#161616] w-full text-[14px] font-[AtypDisplay] cursor-pointer  font-normal leading-normal py-[10px] px-[20px] bg-white rounded-[15px] lg:text-[16px] xl:text-[20px]"
                        >
                          <a href={`#${item.id}`}>{item.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="mt-[40px] lg:mt-0 lg:pl-[30px] col-span-2">
                  {data?.map((e) => {
                    return (
                      <div
                        id={`${e.id}`}
                        className="question1 xl:mb-[60px] mb-[20px] lg:mb-[30px] scroll-effect "
                      >
                        <h4 className="text-[#161616] text-[16px] font-[AtypDisplay]  font-normal leading-[150%] mb-[10px] lg:text-[18px] xl:text-[36px]">
                          {e.title}
                        </h4>
                        <p className="text-[#161616] text-[12px] font-[AtypDisplay]  font-normal leading-[150%] lg:text-[14px] xl:text-[20px]">
                          {e.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </main>
        </>
      )}

      <FooterComponent />
    </>
  );
}

export default QuestionPage;
