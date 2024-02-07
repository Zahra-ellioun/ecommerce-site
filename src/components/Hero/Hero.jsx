import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/Hero/headphone.png";
import Image2 from "../../assets/Hero/vr.png";
import Image3 from "../../assets/Hero/macbook.png";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title1: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title1: "Wireless",
    title2: "Virtual",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title1: "Branded",
    title2: "Laptops",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    oauseOnFocuse: true,
    // slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 pb-4">
      <div className="container">
        <div className="rounded-3xl bg-gradient-to-br from-gray-300 to-gray-100 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800">
          <Slider {...settings}>
            {HeroData.map((item) => (
              <div
                key={item.id}
                className=" rounded-3xl flex items-center justify-center "
              >
                <div className=" flex flex-col-reverse sm:flex-row justify-between items-center my-8 sm:my-32 lg:my-28 xl:my-20 mx-14 min-h-[400px]">
                  {/* text context */}

                  <div className="space-y-4 sm:w-56 text-center sm:text-left">
                    <h1 className="font-bold text-2xl sm:text-6xl lg:text-2xl ">
                      {item.subtitle}
                    </h1>
                    <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl ">
                      {item.title1}
                    </h1>
                    <h1 className="uppercase font-bold text-5xl sm:text-7xl xl:text-[150px] tracking-wide text-white dark:text-gray-700/50">
                      {item.title2}
                    </h1>
                    <button className="px-8 py-2 rounded-full bg-primary hover:scale-110 duration-150 text-white">
                      Shop By Categoury
                    </button>
                  </div>

                  {/* img  */}
                  <div className="w-[300px] lg:w-[450px] xl:w-[480px]">
                    <img src={item.img} alt="" className="w-full " />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
