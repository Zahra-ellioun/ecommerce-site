import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const scrollTopValue = document.documentElement.scrollTop;
  const scrollHeightValue = document.documentElement.scrollHeight;
  const ClientHeightValue = document.documentElement.clientHeight;

  const scrollValue =
    (scrollTopValue / (scrollHeightValue - ClientHeightValue)) * 100;

  useEffect(() => {
    setScrollWidth(scrollValue);
  }, [scrollValue]);

  return (
    <div className=" w-full h-2 bg-gray-400">
      <div
        className="h-full bg-red-500"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
