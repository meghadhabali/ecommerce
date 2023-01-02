import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = ({ selectedCategory }) => {
  const [productList, setProductList] = useState("");

  const fetchData = () => {
    const url = encodeURI(
      `https://fakestoreapi.com/products/category/${selectedCategory}`
    );
    return fetch(url)
      .then((response) => response.json())
      .then((data) => setProductList(data));
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  return (
    <>
      <div className="row my-10">
        {productList &&
          productList.map((product) => (
            <Link
              className="col-md-2 col-sm-6 col-xs-12 m-5"
              style={{ textDecoration: "none", color: "#000" }}
              key={product.id}
              to={`/details/${product.id}`}
            >
              <img
                className="card-img-top"
                src={product.image}
                alt="Card"
                style={{ width: "100px", height: "100px" }}
              />
              <p>{product.title}</p>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Products;
