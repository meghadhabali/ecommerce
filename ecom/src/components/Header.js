import { useState, useContext } from "react";

import logo from "../images/logo.png";
import cart from "../images/cart4.svg";
import smiley from "../images/emoji-laughing-fill.svg";
import CounterContext from "./CounterContext";
const Header = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <>
      <h2>{`Hello ${counter} again!`}</h2>

      <nav className="navbar navbar-expand-sm">
        {console.log("count in header children", counter)}
        <div className="container-fluid">
          <img
            src={logo}
            width="20px"
            height="20px"
            className="image-resposive"
            alt="logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            {/* <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Link</a>
        </li>
      </ul> */}
            <form className="ms-5">
              <div className="form-group">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="navbar-nav ms-auto">
            <img
              src={cart}
              width="20px"
              height="20px"
              className=""
              alt="cartIcon"
            />
            <sup>{counter}</sup>
            <img
              src={smiley}
              width="20px"
              height="20px"
              className="ms-4"
              alt="Smiley"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
