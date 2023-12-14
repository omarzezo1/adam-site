import React, { useEffect, useState } from "react";
import ShopNavbar from "../../../components/shop/ShopNavbar";
import ShopFooter from "../../../components/shop/ShopFooter";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllAddAddress,
  getSpecificAddress,
} from "../../../redux/actions/addressAction";
import { getLoggedUser } from "../../../redux/actions/authAction";
import { getCartItems } from "../../../redux/actions/cartAction";
import { createCashOrder } from "../../../redux/actions/orderAction";
import serverUrl from "../../../api/serverUrl";

const Checkout = () => {
  const [allUserAddress, setAllUserAddress] = useState([]);
  const [specificAddressInfo, setSpecificAddressInfo] = useState([]);
  const [loggedUserInfo, setLoggedUserInfo] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartId, setCartId] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState("");
  const [totalAfterDiscount, setTotalAfterDiscount] = useState("");

  const [sendOrderMsg, setSendOrderMsg] = useState(false);

  const userAddressData = useSelector(
    (state) => state.addressReducer.allAddress
  );
  const specificAddressData = useSelector(
    (state) => state.addressReducer.specificAddress
  );
  const loggedUserData = useSelector((state) => state.authReducer.getMe);
  const cartUserData = useSelector((state) => state.cartReducer.cartItems);
  const cashOrderData = useSelector((state) => state.orderReducer.cashOrder);

  const dispatch = useDispatch();

  //order data
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  //function to send order
  const handelSendOrder = () => {
    dispatch(
      createCashOrder(cartId, {
        shippingAddress: {
          details,
          phone,
          city,
          postalCode,
        },
      })
    );
  };

  useEffect(() => {
    if (cashOrderData) {
      if (cashOrderData.status === 201) {
        setSendOrderMsg(true);
        setTimeout(() => {
          window.location = "/profile";
        }, 3000);
      }
    }
  }, [cashOrderData]);

  useEffect(() => {
    dispatch(getAllAddAddress());
    dispatch(getLoggedUser());
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    if (specificAddressInfo) {
      setCity(specificAddressInfo.city);
      setPhone(specificAddressInfo.phone);
      setPostalCode(specificAddressInfo.postalCode);
    }
  }, [specificAddressInfo]);

  useEffect(() => {
    if (cartUserData) {
      if (cartUserData.status === "success") {
        if (cartUserData.data) {
          setCartId(cartUserData.data._id);
          setCartItems(cartUserData.data.products);
          setTotalAfterDiscount(cartUserData.data.totalAfterDiscount);
          setTotalCartPrice(cartUserData.data.totalCartPrice);
        }
      }
    }
  }, [cartUserData]);

  useEffect(() => {
    if (userAddressData) {
      if (userAddressData.status === "success") {
        if (userAddressData.data) {
          setAllUserAddress(userAddressData.data);
        }
      }
    }
  }, [userAddressData]);

  useEffect(() => {
    if (specificAddressData) {
      if (specificAddressData.status === "success") {
        if (specificAddressData.data) {
          setSpecificAddressInfo(specificAddressData.data);
          setDetails(specificAddressData.data.details);
        }
      }
    }
  }, [specificAddressData]);

  useEffect(() => {
    if (loggedUserData) {
      if (loggedUserData.status === 200) {
        if (loggedUserData.data) {
          setLoggedUserInfo(loggedUserData.data.data);
        }
      }
    }
  }, [loggedUserData]);

  return (
    <div className="checkout-page">
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
              <span className="page-name">CHECKOUT</span>
            </div>
            <h1 className="page-title">CHECKOUT</h1>
          </div>
        </div>
      </section>
      <section className="checkout-container">
        <div className="shipping-info">
          <h2>shipping Details</h2>
          <div className="address">
            <label htmlFor="address">Select Address</label>
            <select
              id="address"
              onChange={(e) => {
                dispatch(getSpecificAddress(e.target.value));
              }}
            >
              <option id="" value={0}>
                Select Address To shipping
              </option>
              {allUserAddress.length > 0
                ? allUserAddress.map((address, index) => (
                    <option key={index} value={address._id}>
                      {address.alias}
                    </option>
                  ))
                : null}
            </select>
            <Link to="/add-address" className="add-address">
              Add New Address
            </Link>
          </div>
          <div className="address-details">
            <label htmlFor="address-details">Detailed address</label>
            <input
              type="text"
              value={details}
              id="address-details"
              placeholder="Detailed shipping address"
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <div className="phone">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              value={phone}
              id="phone"
              placeholder="Phone Number To shipping"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="email">
            <label htmlFor="email-address">E-mail</label>
            <input
              type="email"
              value={loggedUserInfo.email}
              id="email-address"
              placeholder="E-mail To shipping"
            />
          </div>
          <div className="city">
            <label htmlFor="city">City</label>
            <input
              type="text"
              value={city}
              id="city"
              placeholder="City To shipping"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="name">
            <input
              type="number"
              value={postalCode}
              placeholder="Zip-code"
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <input
              type="text"
              value={loggedUserInfo.name}
              placeholder="Username"
            />
          </div>
          <div
            className="send-order-msg"
            style={{ display: sendOrderMsg ? "flex" : "none" }}
          >
            <h5>Success:</h5>
            <p>Your request has been sent successfully</p>
          </div>
          <div className="complete-order">
            <Link to="" onClick={handelSendOrder}>
              Send Order
            </Link>
          </div>
        </div>

        <div className="cart-items">
          <h3>Your Order</h3>
          <div className="cart-items-wraper">
            {cartItems.length > 0
              ? cartItems.map((item, index) => (
                  <div className="cart-item" key={index}>
                    <div className="product-img">
                      <span>{item.count}</span>
                      <img
                        src={`${serverUrl}/products/${item.product.imageCover}`}
                        alt="cart-item-img"
                      />
                    </div>
                    <div className="product-details">
                      <div className="name-size">
                        <h4>{item.product.title}</h4>
                        <p>{item.color}</p>
                      </div>
                      <div className="price">
                        <p>{item.price}.00 L.E</p>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
          <div className="price-details">
            <span>
              <h5>Total After Discount</h5>
              <p>
                {totalAfterDiscount
                  ? Math.ceil(totalAfterDiscount)
                  : Math.ceil(totalCartPrice)}
                .00 L.E
              </p>
            </span>
            <span>
              <h5>Shipping Cost:</h5>
              <p>50 L.E</p>
            </span>
            <span className="total-after-discount">
              <h5>Total:</h5>
              <p>
                {totalAfterDiscount
                  ? Math.ceil(totalAfterDiscount + 50)
                  : Math.ceil(totalCartPrice + 50)}
                .00 L.E
              </p>
            </span>
          </div>
        </div>
      </section>
      <ShopFooter />
    </div>
  );
};

export default Checkout;
