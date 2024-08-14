import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets.js';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext.jsx';
 // Import the 'assets' object

const Navbar = ({setShowLogin}) => {

    const {getTotalCartAmount}=useContext(StoreContext);

    const [menu, setMenu] = useState("home");
    return (
      <div className="navbar">
        <Link to="/">
          {" "}
          <img src={assets.logo} alt="" className="logo" />
        </Link>
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile-app
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact us
          </a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          <button className="navbar-button" onClick={() => setShowLogin(true)}>
            sign in
          </button>
        </div>
      </div>
    );
}

export default Navbar
