import React from "react";

function Card() {
  return (
    <div className="card grid grid-cols-3 ">
      <div className=" bg-slate-400 col-span-3 rounded-[20px] overflow-hidden"></div>
      <div className="  col-span-2  overflow-hidden"></div>
      <div className="bg-white">01</div>
    </div>
  );
}

export default Card;
