import React from "react";

const Button = ({ text, bgColor, textColor, handler = () => {} }) => {
  return (
    <button
      className={`${bgColor} ${textColor} hover:scale-105 duration-300 relative z-10 cursor-pointer px-8 py-2 rounded-full`}
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;
