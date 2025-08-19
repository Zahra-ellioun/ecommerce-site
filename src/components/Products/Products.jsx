import React from "react";
import { Heading, ProductsCard } from "../index";
import img1 from "../../assets/Products/p-1.jpg";
import img2 from "../../assets/Products/p-2.jpg";
import img3 from "../../assets/Products/p-3.jpg";
import img4 from "../../assets/Products/p-4.jpg";
const productsData = [
  {
    id: 1,
    img: img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: img3,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: img4,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
];
const Products = () => {
  return (
    <div className=" pb-4">
      <div className="container">
        <Heading title={"our products"} subtitle={"explore our products"} />

        <ProductsCard data={productsData} />
      </div>
    </div>
  );
};

export default Products;
