import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Fooditem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="w-[100%] m-auto  rounded-2xl shadow-2xs transition-[0.3s] ">
      <div className="relative">
        <img src={image} alt={name} className="w-[100%] rounded-t-lg" />
        {!itemCount ? (
          <img
            src={assets.add_icon_white}
            alt=""
            onClick={() => setItemCount((prev) => prev + 1)}
            className="w-[35px] absolute bottom-3.5 right-3.5 cursor-pointer rounded-[50px]"
          />
        ) : (
          <div className="absolute flex items-center gap-[10px] p-2 bottom-3.5 right-3.5 rounded-[50px] bg-white">
            <img
              src={assets.remove_icon_red}
              alt=""
              onClick={() => {
                setItemCount((prev) => prev - 1);
              }}
              className="w-8"
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green}
              alt=""
              className="w-8"
              onClick={() => {
                setItemCount((prev) => prev + 1);
              }}
            />
          </div>
        )}
      </div>
      <div className="p-7">
        <div className="flex justify-between items-center mb-3">
          <p className="text-[20px] font-medium">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-[70px]" />
        </div>
        <p className="text-[#676767] text-[12px]">{description}</p>
        <p className="text-[tomato] text-[22px] mx-2.5 ">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
