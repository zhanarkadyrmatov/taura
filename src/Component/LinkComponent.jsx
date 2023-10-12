import React from "react";
import Whatsapp from "../assets/whatsapp-icon.png";
import Telegram from "../assets/telegram.png";
import Instagram from "../assets/instagram.png";
import Chat from "../assets/Chat.png";

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
  return (
    <div className="fixed z-10 top-[135px] lg:top-[235px] xl:top-[238px] right-[20px] lg:right-[20px] xl:right-[50px]">
      <ul>
        {Link.map((e) => {
          return (
            <li className="bg-white p-[8px]  lg:p-[14px] rounded-[10px]  lg:rounded-[20px] cursor-pointer shadow-md mb-[20px]  lg:mb-[30px]">
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
        {/* <li className="bg-white p-[14px] rounded-[20px] cursor-pointer shadow-md">
          <a className="p-0" href="#">
            <img src={Whatsapp} alt="" />
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default LinkComponent;
