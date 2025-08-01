import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Fooditem from "../FoodItem/Fooditem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-8">
      <h2 className="text-[#262626] font-medium text-[20px]">
        Top dishes near you
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-7 gap-7 gap-y-12">
        {food_list.map((item, index) => (
          <Fooditem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
