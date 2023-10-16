import React, { useState, useEffect } from "react";
import HeaderComponent from "../Component/HeaderComponent";
import FooterComponent from "../Component/FooterComponent";
import Compony from "../assets/compony.png";

import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
const newsData = [
  {
    id: 1,
    title: "News Article 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "03.01.2021",
    image: "compony1.png",
  },
  {
    id: 2,
    title: "News Article 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "03.02.2021",
    image: "compony2.png",
  },
  {
    id: 3,
    title: "News Article 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "03.01.2021",
    image: "compony1.png",
  },
  {
    id: 4,
    title: "News Article 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "03.02.2021",
    image: "compony2.png",
  },
  // Add more news articles here
];

export function DefaultPagination({
  currentPage,
  newsPerPage,
  totalNews,
  paginate,
}) {
  const [active, setActive] = useState(currentPage);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => {
      setActive(index);
      paginate(index);
    },
  });
  const next = () => {
    if (active === Math.ceil(totalNews / newsPerPage)) return;
    setActive(active + 1);
    paginate(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
    paginate(active - 1);
  };
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {Array.from({ length: Math.ceil(totalNews / newsPerPage) }).map(
          (_, index) => (
            <IconButton key={index} {...getItemProps(index + 1)}>
              {index + 1}
            </IconButton>
          )
        )}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === Math.ceil(totalNews / newsPerPage)}
      >
        Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}

function NewsPage() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 2; // Number of news articles to display per page

  // Fetch the news data from your API or JSON file
  useEffect(() => {
    // Simulate fetching data from newsData.json
    setNews(newsData);
  }, []);

  // Calculate the index of the last news article on the current page
  const indexOfLastNews = currentPage * newsPerPage;
  // Calculate the index of the first news article on the current page
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  // Get the news articles for the current page
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <HeaderComponent />
      <div className="price xl:py-[100px] py-[60px] lg:py-[80px] mb-[40px] lg:mb-[70px] xl:mb-[120px]">
        <div className="container">
          <h2 className="text-[#FFF] font-AtypDisplay text-[46px] lg:text-[76px] xl:text-[96px] font-normal leading-normal">
            Новости
          </h2>
          <p className="text-[#FFF] font-AtypDisplay text-[15px] lg:text-[26px] xl:text-[36px] font-normal leading-normal">
            Что у нас происходит
          </p>
        </div>
      </div>
      <main className="mb-[40px] lg:mb-[70px] xl:mb-[100px]">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2 lg:gap-[40px]">
            {currentNews.map((e) => {
              return (
                <div className="border-t-[1px] border-black pt-[15px] xl:pt-[30px] ">
                  <h2 className="font-AtypDisplay text-[16px] font-normal leading-[185%] text-[#161616] lg:text-[20px] xl:text-[30px]">
                    Lorem Ipsum is simply dummy text of the printing
                  </h2>
                  <p className="font-AtypDisplay text-[12px] font-normal leading-[185%] text-[#161616] opacity-70 lg:text-[14px] xl:text-[20px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard...
                  </p>
                  <p className="flex justify-between items-center font-AtypDisplay text-[15px] font-normal text-[#161616] mt-[10px] mb-[20px] xl:mb-[30px] xl:mt-[16px] lg:text-[15px] xl:text-[20px] ">
                    <span className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M24 12C24 12 19.5 3.75 12 3.75C4.5 3.75 0 12 0 12C0 12 4.5 20.25 12 20.25C19.5 20.25 24 12 24 12ZM1.7595 12C2.48477 10.8977 3.31896 9.87103 4.2495 8.9355C6.18 7.002 8.82 5.25 12 5.25C15.18 5.25 17.8185 7.002 19.752 8.9355C20.6825 9.87103 21.5167 10.8977 22.242 12C22.155 12.1305 22.059 12.2745 21.9495 12.432C21.447 13.152 20.7045 14.112 19.752 15.0645C17.8185 16.998 15.1785 18.75 12 18.75C8.82 18.75 6.1815 16.998 4.248 15.0645C3.31747 14.129 2.48478 13.1023 1.7595 12Z"
                          fill="#161616"
                        />
                        <path
                          d="M12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25ZM6.75 12C6.75 10.6076 7.30312 9.27226 8.28769 8.28769C9.27226 7.30312 10.6076 6.75 12 6.75C13.3924 6.75 14.7277 7.30312 15.7123 8.28769C16.6969 9.27226 17.25 10.6076 17.25 12C17.25 13.3924 16.6969 14.7277 15.7123 15.7123C14.7277 16.6969 13.3924 17.25 12 17.25C10.6076 17.25 9.27226 16.6969 8.28769 15.7123C7.30312 14.7277 6.75 13.3924 6.75 12Z"
                          fill="#161616"
                        />
                      </svg>
                      457
                    </span>
                    <span>03.01.2021</span>
                  </p>
                  <div>
                    <img
                      className="w-full h-[220px] xl:h-[381px]"
                      src={Compony}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <DefaultPagination
            currentPage={currentPage}
            newsPerPage={newsPerPage}
            totalNews={news.length}
            paginate={paginate}
          />
        </div>
      </main>
      <FooterComponent />
    </>
  );
}

export default NewsPage;
