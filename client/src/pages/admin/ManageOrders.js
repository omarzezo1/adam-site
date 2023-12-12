import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../utilities/Sidebar";
import { Link } from "react-router-dom";
import { getAllOrders } from "../../redux/actions/orderAction";

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
      <div className="container">
        <div className="admin-page-wraper">
          <Sidebar />
          <section className="dashboard-container">
            <h3>إدارة الطلبات</h3>
            <div className="add-wraper">
              {ordersList.length > 0 ? (
                ordersList.map((order, index) => (
                  <div className="coupon-card" key={index}>
                    <Link to={`/order-details/${order._id}`}>
                        <span className="order-number">#{order.id}</span>
                      <ul className="coupon-details">
                        <li>
                          <p>{order.user.name}</p>
                          :اسم العميل
                        </li>
                        <li>
                          <p>{order.shippingAddress.city}</p>
                          :المحافظة
                        </li>
                        <li>
                          <p>{order.shippingAddress.details}</p>
                          :العنوان
                        </li>
                        <li>
                          <p>{order.shippingAddress.phone}</p>
                          :رقم الهاتف
                        </li>
                        <li>
                          <p>{order.createdAt}</p>
                          :تاريخ الطلب
                        </li>
                      </ul>
                      <div className="coupon-img"></div>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="no-items">
                  لم يتم إستقبال طلبات حتى الأن
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
