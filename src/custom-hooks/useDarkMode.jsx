import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    try {
      let value;
      value = localStorage.getItem("theme") || "dark";
      return value;
    } catch (e) {
      console.log(e);
      value = "dark";
    }
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);
  });

  return [theme, setTheme];
};

export default useDarkMode;
