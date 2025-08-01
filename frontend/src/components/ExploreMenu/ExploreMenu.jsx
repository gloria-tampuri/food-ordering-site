import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      <h1 className="text-[#262626] font-medium text-[24px]">
        Explore our menu
      </h1>
      <p className="max-w-[60%] text-[#808080]">
        Choose from a diverse menu featuring a delectable array of dishes to
        satisfy your cravings and elevate your dining experience, one delicious
        meal at a time.
      </p>
      <div className="flex justify-between align-middle gap-7 items-center mx-6 overflow-scroll ">
        {menu_list.map((menu, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === menu.menu_name ? "All" : menu.menu_name
              )
            }
          >
            <img
              src={menu.menu_image}
              alt="menu"
              className={`w-[7.5vw] min-w-[80px] cursor-pointer  rounded-[50%] transition-[0.2s] ${
                category === menu.menu_name
                  ? "border-[4px] border-[tomato] p-0.5"
                  : ""
              }`}
            />
            <p className="mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">
              {menu.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="mx-3 h-0.5 bg-[#e2e2e2] border-0" />
    </div>
  );
};

export default ExploreMenu;
