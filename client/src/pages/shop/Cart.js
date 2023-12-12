import React, { useState } from "react";
import ShopNavbar from "../../components/shop/ShopNavbar";
import ShopFooter from "../../components/shop/ShopFooter";
import { Link } from "react-router-dom";

import CartItem from "../../components/shop/CartItem";

const Cart = () => {
  return (
    <div className="cart-page">
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
              <span className="page-name">CART</span>
            </div>
            <h1 className="page-title">CART</h1>
          </div>
        </div>
      </section>
      <section className="cart-container">
        <div className="cart-items">
          <ul className="cart-titles">
            <li className="items">item</li>
            <div className="titles-group">
                <li className="price">price</li>
                <li className="qty">QUANTITY</li>
                <li className="total">total</li>
                <li>remove</li>
            </div>
          </ul>
          <div className="items-wraper">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
          </div>
        </div>
        <div className="cart-details">sss</div>
      </section>
      <ShopFooter />
    </div>
  );
};

export default Cart;
