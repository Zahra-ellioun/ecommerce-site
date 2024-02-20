import React from "react";
import { Hero, Navbar, Category, Services } from "./components";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Category />
      <Services />
    </div>
  );
};

export default App;
