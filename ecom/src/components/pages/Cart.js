import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartList, setCartList] = useState("");

  const fetchData = () => {
    return fetch("https://fakestoreapi.com/carts")
      .then((response) => response.json())
      .then((data) => setCartList(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ textAlign: "left" }}>
      {console.log("cart", cartList)}
      <table className="table m-5">
        <thead>
          <tr>
            <th scope="col">Cart Id</th>
            <th scope="col">User Id</th>
            <th scope="col">No. of produts</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {cartList &&
            cartList.map((category, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{category.id}</th>
                  <td>{category.userId}</td>
                  <td>{Object.keys(category.products).length}</td>
                  <td>{category.date.slice(0, 10)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
