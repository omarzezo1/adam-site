import React from "react";
import ShopNavbar from "../../components/shop/ShopNavbar";
import ShopFooter from "../../components/shop/ShopFooter";
import { Link } from "react-router-dom";

const Login = () => {
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
              <span className="page-name">LOGIN</span>
            </div>
            <h1 className="page-title">LOGIN</h1>
          </div>
        </div>
      </section>
      <section className="login-container">
        <div className="title-box">
            <h3>LOGIN TO ADMOS.</h3>
            <p>Don’t have an account? <Link to="/signup">Create a free account</Link></p>
        </div>
        <form className="form">
            <div className="field">
                <label htmlFor="email">Your Email</label>
                <input id="email" type="email" placeholder="Enter Your E-mail"/>
            </div>
            <div className="field">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Password"/>
                <Link to="" className="forget-password">Forgot Password?</Link>
            </div>
            <button className="submit" type="submit"><Link to="">Login</Link></button>
        </form>
      </section>
      <ShopFooter />
    </div>
  );
};

export default Login;
