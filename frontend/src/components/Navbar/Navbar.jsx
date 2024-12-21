import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("HOME");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo'>
        <img src={assets.logo} alt="Logo" />
      </Link>
      <ul className="navbar-menu">
        <Link 
          to="/" 
          onClick={() => setMenu("HOME")} 
          className={`${menu === "HOME" ? "active" : ""}`}
        >
          HOME
        </Link>
        <a 
          href="#explore-menu" 
          onClick={() => setMenu("MENU")} 
          className={`${menu === "MENU" ? "active" : ""}`}
        >
          MENU
        </a>
        <a 
          href="#app-download" 
          onClick={() => setMenu("MOBILE APP")} 
          className={`${menu === "MOBILE APP" ? "active" : ""}`}
        >
          MOBILE APP
        </a>
        <a 
          href="#footer" 
          onClick={() => setMenu("CONTACT US")} 
          className={`${menu === "CONTACT US" ? "active" : ""}`}
        >
          CONTACT US
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" className="navbar-icon" />
        <Link to='/cart' className='navbar-cart-icon'>
          <img src={assets.basket_icon} alt="Cart" />
          <div className={getTotalCartAmount() > 0 ? "cart-notification" : ""}></div>
        </Link>
        {!token ? (
          <button className="navbar-signin-btn" onClick={() => setShowLogin(true)}>
            SIGN IN
          </button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" className="navbar-profile-icon" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="Orders" />
                <p>ORDERS</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>LOGOUT</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

