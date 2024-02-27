import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="capitalize font-bold text-4xl text-center mb-4">
        {title}
      </h1>
      <p className="capitalize text-gray-400 text-center text-sm">{subtitle}</p>
    </>
  );
};
export default Heading;
