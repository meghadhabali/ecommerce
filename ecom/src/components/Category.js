import React, { useState, useEffect } from "react";

const Category = ({handleCategoryChange}) => {
  const [categoryList, setCategoryList] = useState("");

  const fetchData = () => {
    return fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategoryList(data));
  };
  
  const handleChange = (e) => {
    handleCategoryChange(e.target.value);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{"textAlign": "left"}}>
      Select Category: 
      <select className="form-select-sm m-3" onChange={handleChange}>
        {categoryList &&
          categoryList.map((category) => {
            return (
              <option value={category} key={category}>
                {category}
              </option>
            );
          })}
      </select>

    </div>
  );
};

export default Category;
