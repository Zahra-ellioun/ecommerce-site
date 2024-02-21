import React from "react";
import { Hero, Navbar, Category, Services, Banner } from "./components";

const BannerData = {
  discount: "30% OFF",
  titile: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air SOlo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit lorem, eget bibendum diam. ",
  bgColor: "#f42c37",
};

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Category />
      <Services />
      <Banner />
    </div>
  );
};

export default App;
