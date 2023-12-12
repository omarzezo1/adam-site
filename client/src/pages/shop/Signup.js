import React from "react";
import ShopNavbar from "../../components/shop/ShopNavbar";
import ShopFooter from "../../components/shop/ShopFooter";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="login-register-page">
      <ShopNavbar />
      <section className="page-intro">
        <div className="overlay"></div>
        <div className="rec"></div>
        <div className="rec rec-bottom"></div>
        <div className="container">
          <div className="page-intro-container">
            <div className="page-navigation">
              <Link to="/shop">Home</Link>
              <span>/</span>
              <span className="page-name">REGISTER</span>
            </div>
            <h1 className="page-title">REGISTER</h1>
          </div>
        </div>
      </section>
      <section className="login-container">
        <div className="title-box">
          <h3>REGISTER TO ADMOS.</h3>
          <p>
            Already have an account? <Link to="/login">Sing In</Link>
          </p>
        </div>
        <form className="form">
          <div className="field">
            <label htmlFor="username">Your Name</label>
            <input id="username" type="text" placeholder="Enter Your Name" />
          </div>
          <div className="field">
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" placeholder="Enter Your E-mail" />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" />
          </div>
          <button className="submit" type="submit">
            <Link to="">Register</Link>
          </button>
        </form>
      </section>
      <ShopFooter />
    </div>
  );
};

export default Signup;
