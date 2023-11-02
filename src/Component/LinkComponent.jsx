import React, { useState, useEffect } from "react";
import Whatsapp from "../assets/whatsapp-icon.png";
import Telegram from "../assets/telegram.png";
import Instagram from "../assets/instagram.png";
import Chat from "../assets/Chat.png";
import { BsFillCapslockFill } from "react-icons/bs";

const Link = [
  {
    id: 1,
    img: Whatsapp,
  },

  {
    id: 2,
    img: Telegram,
  },
  {
    id: 3,
    img: Instagram,
  },
  {
    id: 4,
    img: Chat,
  },
];
function LinkComponent() {
  const [showToTopButton, setShowToTopButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowToTopButton(true);
    } else {
      setShowToTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed z-10 top-[135px] lg:top-[235px] xl:top-[238px] right-[20px] lg:right-[20px] xl:right-[50px]">
      <ul>
        {Link.map((e) => {
          return (
            <li
              key={e.id}
              className="bg-white p-[8px]  lg:p-[14px] rounded-[10px]  lg:rounded-[20px] cursor-pointer shadow-md mb-[20px]  lg:mb-[30px]"
            >
              <a className="" href="#">
                <img
                  className="w-[24px] h-[24px] lg:h-[32px] lg:w-[32px]"
                  src={e.img}
                  alt=""
                />
              </a>
            </li>
          );
        })}
        {showToTopButton && (
          <button
            className="bg-white p-[8px] lg:p-[14px] rounded-[10px] lg:rounded-[20px] cursor-pointer shadow-md mb-[20px] lg:mb-[30px]"
            onClick={scrollToTop}
          >
            <BsFillCapslockFill className=" fill-[#29abee] w-[24px] h-[24px] lg:h-[32px] lg:w-[32px]" />
          </button>
        )}
      </ul>
    </div>
  );
}

export default LinkComponent;
