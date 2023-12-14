import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../../../images/svg/cart-black.svg";
import Heart from "../../../images/svg/heart-red.svg";
import FavProduct from "../../../components/shop/FavProduct";
import { getLoggedUserWishlist } from "../../../redux/actions/wishlistAction";
import ProfileNavigation from "../../../components/shop/ProfileNavigation";
import { getAllOrders } from "../../../redux/actions/orderAction";
import serverUrl from "../../../api/serverUrl";
import ShopNavbar from "../../../components/shop/ShopNavbar";
import ShopFooter from "../../../components/shop/ShopFooter";
import { Link } from "react-router-dom";

const Profile = () => {
  const [allWishies, setAllWishies] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const dispatch = useDispatch();
  const wishlist = useSelector(
    (state) => state.wishlistReducer.loggedUserWishlist
  );
  const ordersData = useSelector((state) => state.orderReducer.orders);

  useEffect(() => {
    if (ordersData) {
      if (ordersData.status === 200) {
        if (ordersData.data) {
          setAllOrders(ordersData.data.data);
        }
      }
    }
  }, [ordersData]);


  useEffect(() => {
    dispatch(getLoggedUserWishlist());
    dispatch(getAllOrders());
  }, []);

  useEffect(() => {
    if (wishlist) {
      if (wishlist.status === "success") {
        if (wishlist.data) {
          setAllWishies(wishlist.data);
        }
      }
    }
  }, [wishlist]);

  return (
    <div className="profile-page">
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
              <span className="page-name">PROFILE</span>
            </div>
            <h1 className="page-title">PROFILE</h1>
          </div>
        </div>
      </section>
      <section className="profile-container">
      <h2>PROFILE PAGE</h2>
          <ProfileNavigation />
          <div className="profile-wraper">
            <div className="orders">
              <h4>
                <img src={Cart} alt="orders" loading="lazy" />
                Your Orders
              </h4>
              <div className="orders-wraper">
                {allOrders.length > 0 ? (
                  allOrders.map((order, index) => (
                    <div className="order" key={index}>
                      <h5 className="order-number">
                        <small>#{order.id}</small>
                        Order's Number
                      </h5>
                      <div className="products-wraper">
                        {
                          order.cartItems ? (
                            order.cartItems.map((item, index)=>(
                              <div className="product-order" key={index}>
                              <div className="product-order-details">
                                <div className="product-price">
                                  <p>{Math.ceil(item.price) * item.count}.00 L.E</p>
                                </div>
                                <div className="name-size">
                                  <h3>TSH22SCOT20387TM1</h3>
                                  <p>{item.color}</p>
                                  <p>{Math.ceil(item.price)}.00 L.E</p>
                                </div>
                              </div>
                              <div className="product-img">
                                <img
                                  src={item.product && `${serverUrl}/products/${item.product.imageCover}`}
                                  alt="product-img"
                                />
                                <span>{item.count}</span>
                              </div>
                            </div>
                            ))
                          ):null
                        }
                      </div>
                      <div className="order-status">
                        <p className="price">{Math.ceil(order.totalOrderPrice)}.00 L.E</p>
                        <p>{order.isPaid ? "تم الدفع":"لم يتم الدفع"}</p>
                        <p>{order.isDelivered ? "تم التوصيل":"لم يتم التوصيل"}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="no-items">No Orders Yet</p>
                )}
              </div>
            </div>
            <div className="wishlist">
              <h4>
                <img src={Heart} alt="wishlist" loading="lazy" />
                Wishlist
              </h4>
              <div className="product-wraper">
                {allWishies.length > 0 ? (
                  allWishies.map((wish, index) => (
                    <FavProduct key={index} favProduct={wish} />
                  ))
                ) : (
                  <p className="no-items">
                    No Products Yet
                  </p>
                )}
              </div>
            </div>
          </div>
      </section>
      <ShopFooter/>
    </div>
  );
};

export default Profile;
