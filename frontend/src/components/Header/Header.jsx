import React from "react";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div
      className="h-[34vw] my-8 mx-auto bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      <div className=" absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]">
        <h2 className="font-bold text-white text-[max(4.2vw,22px)]">Order your favourite food here</h2>
        <p className="text-white">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients to satisfy your cravings and
          elevate your dining experience, one delicious meal at a time.
        </p>
        <button className="bg-white text-[#49557e] py-3 px-8 rounded-[50px] transition duration-300 hover:bg-[#fff4f2]">View More</button>
      </div>
    </div>
  );
};

export default Header;
