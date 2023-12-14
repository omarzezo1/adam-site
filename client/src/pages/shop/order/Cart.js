import React, { useEffect, useState } from "react";
import ShopNavbar from "../../../components/shop/ShopNavbar";
import ShopFooter from "../../../components/shop/ShopFooter";
import { Link } from "react-router-dom";

import CartItem from "../../../components/shop/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems, applyCoupon } from "../../../redux/actions/cartAction";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState("");
  const [couponName, setCouponName] = useState("");
  const [couponStatus, setCouponStatus] = useState(null);

  const dispatch = useDispatch();
  const cartItemsData = useSelector((state) => state.cartReducer.cartItems);
  const couponData = useSelector((state) => state.cartReducer.applyCoupon);

  useEffect(() => {
    if (couponData) {
      setCouponStatus(couponData);
    }
  }, [couponData]);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      dispatch(getCartItems());
    }
  }, []);

  useEffect(() => {
    if (cartItemsData) {
      if (cartItemsData.status === "success") {
        if (cartItemsData.data) {
          setTotalCartPrice(cartItemsData.data.totalCartPrice);
          setCartItems(cartItemsData.data.products);
        }
      }
    }
  }, [cartItemsData]);

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
        {
          cartItems.length > 0 ? (
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
                {cartItems.length > 0
                  ? cartItems.map((item, index) => (
                      <CartItem item={item} key={index} />
                    ))
                  : null}
              </div>
            </div>
            <div className="cart-details">
              <h3>Summary Order</h3>
              <div className="total">
                <h6>Subtotal</h6>
                <span>${totalCartPrice}</span>
              </div>
              {
                couponStatus ? (
                  couponStatus.status === "success" ? (
                    <div className="total discount">
                    <h6>Total</h6>
                    <span>${couponStatus.data.totalAfterDiscount}</span>
                    </div>
                  ):null
                ):null
              }
              {
                couponStatus ? (
                  couponStatus.status === 400 ? (
                    <div className="total expire">
                    <span>Coupon is invalid or has expired</span>
                    </div>
                  ):null
                ):null
              }
              <div className="cupon-box">
                <input
                  type="text"
                  value={couponName}
                  placeholder="Enter Your Code"
                  onChange={(e) => setCouponName(e.target.value)}
                />
                <button onClick={() => dispatch(applyCoupon({ couponName }))}>
                  Apply
                </button>
              </div>
              <div className="checkout-box">
                <Link to="/checkout">Continue To Checkout</Link>
                <Link to="/shop">Continue Shopping</Link>
              </div>
            </div>
          </section>
          ):(
            <div className="empty">
              <p>You have not added products to the cart yet</p>
              <Link to="/shop">Go To shopping</Link>
            </div>
          )
        }
      <ShopFooter />
    </div>
  );
};

export default Cart;
