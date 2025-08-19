import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className=" text-center mb-10 max-w-[600px]">
      <h1 className="capitalize font-bold text-3xl mb-4 lg:text-4xl">
        {title}
      </h1>
      <p className="capitalize text-gray-400 text-center text-xs">{subtitle}</p>
    </div>
  );
};
export default Heading;
