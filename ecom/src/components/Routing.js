import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

const Rounting = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/details/:id" element={<ProductDetails />}></Route>
          <Route exact path='/cart' element={< Cart />}></Route>
          <Route exact path='/profile' element={< Profile />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Rounting;
