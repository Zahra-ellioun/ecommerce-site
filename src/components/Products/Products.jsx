import React from "react";
import { Heading } from "../index";

const Products = () => {
  return (
    <div className=" pb-4">
      <div className="container">
        <Heading title={"our products"} subtitle={"explore our products"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"></div>
      </div>
    </div>
  );
};

export default Products;
