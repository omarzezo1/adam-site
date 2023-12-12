import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../../images/svg/cart-black.svg";
import Heart from "../../images/svg/heart-red.svg";
import Img from "../../images/imgs/p-1.webp";
import FavProduct from "../../components/products/FavProduct";
import { getLoggedUserWishlist } from "../../redux/actions/wishlistAction";
import ProfileNavigation from "../../utilities/ProfileNavigation";
import { getAllOrders } from "../../redux/actions/orderAction";
import serverUrl from '../../api/serverUrl'

const Profile = () => {
  const [allWishies, setAllWishies] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [allCartItems, setAllCartItems] = useState([]);
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
          console.log(allOrders);
        }
      }
    }
  }, [ordersData]);

  useEffect(() => {
    if (allOrders) {
      setAllCartItems(allOrders.cartItems);
      console.log(allCartItems);
    }
  }, [allOrders]);

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
      <div className="container">
        <div className="profile-page-container">
          <h2>الصفحة الشخصية</h2>
          <ProfileNavigation />
          <div className="profile-wraper">
            <div className="orders">
              <h4>
                <img src={Cart} alt="orders" loading="lazy" />
                الطلبات التي قمت بها
              </h4>
              <div className="orders-wraper">
                {allOrders.length > 0 ? (
                  allOrders.map((order, index) => (
                    <div className="order" key={index}>
                      <h5 className="order-number">
                        <small>#{order.id}</small>
                        رقم الطلب
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
                  <p className="no-items">لا يوجد لديك أي طلبات حتى الأن</p>
                )}
              </div>
            </div>
            <div className="wishlist">
              <h4>
                <img src={Heart} alt="wishlist" loading="lazy" />
                قائمة المفضلة لديك
              </h4>
              <div className="product-wraper">
                {allWishies.length > 0 ? (
                  allWishies.map((wish, index) => (
                    <FavProduct key={index} favProduct={wish} />
                  ))
                ) : (
                  <p className="no-items">
                    لا يوجد لديك أي منتجات في المفضلة حتى الأن
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
