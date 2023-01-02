import React, { useState, useEffect } from "react";
import Category from "../Category";
import Products from "../Products";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("electronics");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {}, [selectedCategory]);
  return (
    <>
      <Category handleCategoryChange={handleCategoryChange} />
      <Products selectedCategory={selectedCategory}/>
    </>
  );
};

export default Home;
