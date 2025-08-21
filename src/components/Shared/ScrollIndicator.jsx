import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  //   از یوز افکت استفاده می کنیم چون باید وقتی کامپوننت لود شد، گوش دادن به اسکرول شروع بشه و وقتی کامپوننت از بین رفت، گوش دادن قطع بشه.
  useEffect(() => {
    const handleScrollIndicator = () => {
      // بدست اوردن مقادیر در زمان اسکرول
      const scrollTopValue = document.documentElement.scrollTop;
      const scrollHeightValue = document.documentElement.scrollHeight;
      const ClientHeightValue = document.documentElement.clientHeight;
      //   بدست اوردن درصد اسکرول شده
      const scrollValue =
        (scrollTopValue / (scrollHeightValue - ClientHeightValue)) * 100;

      setScrollWidth(scrollValue);
      console.log("مقدار اسکرول", scrollValue);
    };
    // در زمان اسکرول شدن فانکشن اجرا بشه
    window.addEventListener("scroll", handleScrollIndicator);

    // پاک شدن ایونت لیستنر برای مصرف نشدن حافظه اضافه بعد از قطع اسکرول
    return () => {
      window.removeEventListener("scroll", handleScrollIndicator);
    };
  }, []);

  return (
    <div className=" w-full h-2 bg-gray-400">
      <div
        className="h-full bg-red-500 duration-800 "
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
