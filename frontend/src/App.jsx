import React, { useState } from "react";
import Navbar from "./component/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"; 
import Footer from "./component/Footer/Footer";
import LoginPopUp from "./component/LoginPopUp/loginPopUp";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";


const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}

      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder/>} />
          {/* <Route path="/menu" element={<Menu />} />
       
        */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
