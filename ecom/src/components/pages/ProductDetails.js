import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CounterContext from "../CounterContext";

const ProductDetails = () => {
  const [product, setProduct] = useState("");
  const { counter, setCounter } = useContext(CounterContext);

  let { id } = useParams();
  const fetchData = () => {
    const url = encodeURI(`https://fakestoreapi.com/products/${id}`);
    return fetch(url)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    fetchData();
  }, [product]);

  return (
    <>
      hello
      {product && (
        <div className="row">
          <div className="col-md-2 col-sm-6 col-xs-12 m-5">
            <img
              src={product.image}
              alt={product.title}
              width="200px"
              height="200px"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 m-5">
            <h5>Name: {product.title}</h5>
            <p style={{ textTransform: "capitalize" }}>
              Category: {product.category}
            </p>
            <div className="d-flex">
              <button
                className="btn btn-primary"
                onClick={() => setCounter((prevCount) => prevCount - 1)}
                disabled={counter === 0 ? true : false}
              >
                -
              </button>
              <span className="m-2 ">Add to Cart</span>
              <button
                className="btn btn-primary"
                onClick={() => setCounter((prevCount) => prevCount + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
