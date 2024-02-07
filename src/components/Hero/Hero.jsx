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
    <div>
      <div>
        <Slider {...settings}>
          {/* slide 1 */}
          <div></div>
          {/* slide 2 */}
          <div></div>
          {/* slide 3  */}
          <div></div>
        </Slider>
      </div>
    </div>
  );
};
export default Hero;
