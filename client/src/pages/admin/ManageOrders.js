import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/admin/Sidebar";
import { Link } from "react-router-dom";
import { getAllOrders } from "../../redux/actions/orderAction";
import ShopNavbar from "../../components/shop/ShopNavbar";
import ShopFooter from "../../components/shop/ShopFooter";

const ManageOrders = () => {
  const [ordersList, setOrdersList] = useState([]);
  const ordersData = useSelector((state) => state.orderReducer.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  useEffect(() => {
    if (ordersData) {
      if (ordersData.status === 200) {
        if (ordersData.data) {
          setOrdersList(ordersData.data.data);
          console.log(ordersList);
        }
      }
    }
  }, [ordersData]);

  return (
    <div className="admin-page">
      <ShopNavbar/>
      <div className="container">
        <div className="admin-page-wraper">
          <Sidebar />
          <section className="dashboard-container">
            <h3>MANAGE ORDRS</h3>
            <div className="add-wraper">
              {ordersList.length > 0 ? (
                ordersList.map((order, index) => (
                  <div className="coupon-card" key={index}>
                    <Link to={`/admin/order-details/${order._id}`}>
                      <span className="order-number">#{order.id}</span>
                      <div className="coupon-img"></div>
                      <ul className="coupon-details">
                        <li>
                          Username:
                          <p>{order.user.name}</p>
                        </li>
                        <li>
                          City:
                          <p>{order.shippingAddress.city}</p>
                        </li>
                        <li>
                          Address:
                          <p>{order.shippingAddress.details}</p>
                        </li>
                        <li>
                          Phone Number:
                          <p>{order.shippingAddress.phone}</p>
                        </li>
                        <li>
                          Order's Date:
                          <p>{order.createdAt}</p>
                        </li>
                      </ul>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="no-items">No Orders Yet</p>
              )}
            </div>
          </section>
        </div>
      </div>
      <ShopFooter/>
    </div>
  );
};

export default ManageOrders;
