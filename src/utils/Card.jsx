import React from "react";
import icon from "../assets/card_icon.png";
import { NavLink } from "react-router-dom";

function Card({ props, id }) {
  return (
    <div className="">
      <div className="relative  overflow-hidden bg-white w-full lg:h-[220px] h-[150px]">
        <div
          style={{
            backgroundImage: `url(${props})`,
          }}
          className="absolute inset-[5px] rounded-[15px] bg-no-repeat bg-center bg-cover  lg:rounded-[30px] "
        >
          <div className="icon  absolute  rounded-tl-[15px] lg:rounded-tl-[20px] w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]  xl:w-[110px] xl:h-[110px] bottom-0 right-0  bg-white">
            <div className="absolute bottom-0 right-0 lg:bottom-[10px] lg:right-[10px]">
              <NavLink className="cursor-pointer" to={`/news/${id}`}>
                <img
                  className="bg-black p-[8px] lg:p-[15px]  rounded-[15px] lg:rounded-[20px] xl:w-[90px] xl:h-[90px] lg:w-[60px] lg:h-[60px] w-[50px] h-[50px]"
                  src={icon}
                  alt=""
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
