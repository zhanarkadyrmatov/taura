import React, { useState } from "react";
import Accordion from "../utils/Accordion";
import { fetchQuestion } from "../api/question";
import { useQuery } from "react-query";
import { Paginate } from "../utils/Paginate";
import Loading from "../utils/Loading";

function AccordionComponent() {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, isError, data } = useQuery(["question", currentPage], () =>
    fetchQuestion({ page: currentPage })
  );
  const newsPerPage = 4;
  if (isError) {
    return <div>Error: {isError.message}</div>;
  }
  const question = data || [];
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = question.slice(indexOfFirstNews, indexOfLastNews);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="flex xl:grid grid-cols-2 flex-wrap xl:gap-x-[36px] justify-center">
              {currentNews.map((item, index) => {
                return <Accordion key={index} item={item} />;
              })}
            </div>
            <div className="flex justify-center items-center">
              <Paginate
                currentPage={currentPage}
                newsPerPage={newsPerPage}
                totalNews={question.length}
                paginate={paginate}
                isLoading={isLoading}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AccordionComponent;
