import React from "react";
import { Button } from "../index";

const ProductsCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      {data.map((item) => (
        <div key={item.id} className="space-y-1">
          <div className="relative">
            <img
              src={item.img}
              alt=""
              className="h-[180px] w-[260px] object-cover rounded-md"
            />
            <div className="absolute top-1/2 right-1/2 z-20">
              <Button
                text={"Add to card"}
                bgColor={"bg-primary"}
                textColor={"text-white"}
              />
            </div>
          </div>
          <p className="text-md font-semibold leading-7">{item.title}</p>
          <p className="text-sm font-bold leading-7">${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
