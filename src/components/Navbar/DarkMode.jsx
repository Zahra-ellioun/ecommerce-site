import React, { useEffect } from "react";
import darkModePic from "../../assets/darkMode/dark-mode-button.png";
import { useState } from "react";
import lightModePic from "../../assets/darkMode/light-mode-button.png";

const DarkMode = () => {
  let [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // access to html element
  const element = document.documentElement;
  console.log(element);

  // set theme mode to local storage and add to html element
  useEffect(() => {
    // if you want to remain theme style before reftesh
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
      element.classList.remove("light");
    }
  });

  return (
    <div className="relative">
      <img
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        src={darkModePic}
        className={`h-6 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
        alt=""
      />
      <img src={lightModePic} className={`h-6 cursor-pointer`} alt="" />
    </div>
  );
};
export default DarkMode;
