import React, { useState } from "react";
import Header from "./Header";
import Rounting from "./Routing";
import CounterContext from "./CounterContext";

const MainPage = () => {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContext.Provider
      value={{
        counter: counter,
        setCounter: setCounter,
      }}
    >
      <Header />
      <Rounting />
    </CounterContext.Provider>
  );
};

export default MainPage;
