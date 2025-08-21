import React from "react";
import Button from "../Shared/Button";

const Banner = ({ data }) => {
  return (
    <div className="py-20">
      {console.log(`text-[${data.bgColor}]`)}
      <div className="container">
        <div
          className="h-full rounded-3xl text-white"
          style={{ backgroundColor: data.bgColor }}
        >
          {/* flex container */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            {/* part 1 */}
            <div className="p-6 sm:p-8">
              <p className="uppercase text-md sm:text-sm">{data.discount}</p>
              <p className="font-bold text-4xl uppercase lg:text-7xl">
                {data.title}
              </p>
              <p className="sm:text-sm">{data.date}</p>
            </div>
            {/* part 2 */}
            <div className="">
              <img
                src={data.img}
                alt=""
                className="w-[250px] md:w-[340px] mx-auto drop-shadow-[-12px_8px_8px_rgb(0,0,0,.4)] scale-110 lg:h-full"
              />
            </div>
            {/* part 3 */}
            <div className="space-y-4 p-6 sm:p-8">
              <p className="font-bold text-xl capitalize">{data.title2}</p>
              <p className="font-bold text-3xl sm:text-5xl tracking-wide loading-5">
                {data.title3}
              </p>
              <p className="text-sm">{data.title4}</p>
              <Button
                text={"Shop Now"}
                bgColor={"bg-white"}
                textColor={`text-[#f42c37]`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
