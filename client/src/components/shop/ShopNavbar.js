import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ShopLogo from "../../images/imgs/shop-logo1.png";
import Search from "../../images/svg/search.svg";
import User from "../../images/svg/user.svg";
import Cart from "../../images/svg/cart-product-black.svg";
import MobileMenu from "../../images/svg/menu-2.svg";
import Close from "../../images/svg/close.svg";
import Login from "../../images/svg/login.svg";
import Logout from "../../images/svg/logout.svg";
import Dashboard from "../../images/svg/dashboard.svg";
import Home from "../../images/svg/home.svg";
import Products from "../../images/svg/products.svg";
import Offer from "../../images/svg/offer.svg";
import Blog from "../../images/svg/blog.svg";
import Facebook from "../../images/svg/facebook.svg";
import Twitter from "../../images/svg/twitter.svg";
import Instagram from "../../images/svg/instagram.svg";
import Youtube from "../../images/svg/youtube.svg";

import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../redux/actions/authAction";
import { getCartItems } from "../../redux/actions/cartAction";

const ShopNavbar = () => {
  const [navScroll, setNavScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [logedUser, setLogedUser] = useState([]);
  const [numOfCartItems, setNumOfCartItems] = useState("");

  const logedUserData = useSelector((state) => state.authReducer.getMe);
  const cartItemsData = useSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch();

  //logout
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userToken");
    localStorage.removeItem("favProductsAdam")
    window.location.href = '/shop'
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      dispatch(getLoggedUser());
      dispatch(getCartItems());
    }
  }, []);

  useEffect(() => {
    if (cartItemsData) {
      if (cartItemsData.status === "success") {
        setNumOfCartItems(cartItemsData.numOfCartItems);
      }
    }
  }, [cartItemsData]);

  useEffect(() => {
    if (logedUserData) {
      if (logedUserData.status === 200) {
        if (logedUserData.data) {
          setLogedUser(logedUserData.data.data);
        }
      }
    }
  }, [logedUserData]);

  return (
    <nav className={`${navScroll ? "shop-navbar onscroll" : "shop-navbar"}`}>
      <div className="container">
        <div className="shop-navbar-container">
          <ul
            className={mobileMenu ? "nav-links show-mobile-menu" : "nav-links"}
          >
            <img
              className="close-menu"
              src={Close}
              alt="close-menu"
              onClick={() => setMobileMenu(false)}
            />
            <li>
              <NavLink to="/shop">
                <img src={Home} alt="home" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop/products">
                <img src={Products} alt="products" />
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop/offers">
                <img src={Offer} alt="offer" />
                Best Offers
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs">
                <img src={Blog} alt="blog" />
                Blog
              </NavLink>
            </li>
            {localStorage.getItem("userToken") ? (
              <>
                <li className="login">
                  <NavLink to="/profile">
                    <img src={User} alt="user" />
                    My Profile
                  </NavLink>
                </li>
                <li className="signup">
                  <NavLink to="/" onClick={logout}>
                    <img src={Logout} alt="logout" />
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="login">
                  <NavLink to="/login">
                    <img src={Login} alt="login" />
                    Login
                  </NavLink>
                </li>
                <li className="signup">
                  <NavLink to="/signup">
                    <img src={User} alt="login" />
                    Register
                  </NavLink>
                </li>
              </>
            )}
            <li className="social-icons">
              <div className="icons-container">
                <a href="">
                  <img src={Facebook} alt="facebook" />
                </a>
                <a href="">
                  <img src={Twitter} alt="twitter" />
                </a>
                <a href="">
                  <img src={Instagram} alt="instagram" />
                </a>
                <a href="">
                  <img src={Youtube} alt="youtube" />
                </a>
              </div>
            </li>
          </ul>
          <div className="shop-logo">
            <Link to="/shop">
              <img src={ShopLogo} alt="shop-logo" />
            </Link>
          </div>
          <div className="mobile-menu" onClick={() => setMobileMenu(true)}>
            <img src={MobileMenu} alt="mobile-menu" />
          </div>
          <div className="icons-container">
            <div className="search">
              <img src={Search} alt="user" />
            </div>
            <div
              className="login-register"
              onClick={() => setUserMenu(!userMenu)}
            >
              <img src={User} alt="search" />
              <span>My Account</span>
              {localStorage.getItem("userToken") ? (
                <div className={userMenu ? "user-menu show" : "user-menu"}>
                  {logedUser ? (
                    logedUser.role === "admin" ? (
                      <Link to="/admin">
                        <img src={Dashboard} alt="" />
                        Dashboard
                      </Link>
                    ) : (
                      <Link to="/profile">
                        <img src={User} alt="" />
                        My Profile
                      </Link>
                    )
                  ) : null}
                  <Link to="/" onClick={logout}>
                    <img src={Logout} alt="" />
                    Logout
                  </Link>
                </div>
              ) : (
                <div className={userMenu ? "user-menu show" : "user-menu"}>
                  <Link to="/login">
                    <img src={Login} alt="" />
                    Login
                  </Link>
                  <Link to="/signup">
                    <img src={User} alt="" />
                    Register
                  </Link>
                </div>
              )}
            </div>
            <div className="cart">
              <Link to="/cart">
                <img src={Cart} alt="menu" />
                <span>{numOfCartItems ? numOfCartItems : 0}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ShopNavbar;
