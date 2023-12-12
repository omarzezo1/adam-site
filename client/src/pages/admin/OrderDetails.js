import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpecificOrder } from "../../redux/actions/orderAction";
import Img from '../../images/imgs/p-1.webp'

const OrderDetails = () => {
  const [specificOrderDetails, setSpecificOrderDetails] = useState([]);

  const { id } = useParams();

  const dispatch = useDispatch();
  const specificOrderData = useSelector(
    (state) => state.orderReducer.specificOrder
  );

  useEffect(() => {
    if (id) {
      dispatch(getSpecificOrder(id));
    }
  }, [id]);

  useEffect(() => {
    if (specificOrderData) {
      if (specificOrderData.status === 200) {
        if (specificOrderData.data) {
          setSpecificOrderDetails(specificOrderData.data.data);
          console.log(specificOrderDetails);
        }
      }
    }
  }, [specificOrderData]);

  return (
    <div className="order-details-page">
      <div className="container">
        {specificOrderDetails ? (
          <div className="order-wraper">
            <h2>تفاصيل الطلب رقم #{specificOrderDetails.id}</h2>
            <div className="order-details-container">
              <div className="order-items">
                <div className="order-products-wraper">
                  {
                    specificOrderDetails.cartItems ? (
                      specificOrderDetails.cartItems.map((product, index)=>(
                        <div className="product-cart" key={index}>
                        <div className="prodeuct-details">
                          <ul>
                            <li>
                              <p>{product.product && product.product.title}</p>
                              :كود المنتج
                            </li>
                            <li>
                              <p className="size">{product.color}</p>
                              :المقاس
                            </li>
                            <li>
                              <p className="size">{product.count}</p>
                              :عدد القطع
                            </li>
                            <li>
                              <p className="size">{product.price}.00 L.E</p>
                              :سعر القطعة الواحدة
                            </li>
                          </ul>
                        </div>
                        <div className="product-img">
                          <img src={`http://192.168.1.5:8000/products/${product.product.imageCover}`} alt="product-img"/>
                        </div>
                      </div>
                      ))
                    ):null
                  }
                </div>
              </div>
              <div className="order-details">
                <div className="user-info">
                  <h3>بيانات العميل</h3>
                  <ul>
                    <li>
                      <p>{specificOrderDetails.user && specificOrderDetails.user.name}</p>
                      :اسم العميل
                    </li>
                    <li>
                      <p>{specificOrderDetails.user && specificOrderDetails.user.email}</p>
                      :البريد الإلكتروني
                    </li>
                  </ul>
                </div>
                <div className="shipping-info">
                  <h3>بيانات الشحن</h3>
                  <ul>
                    <li>
                      <p>{specificOrderDetails.shippingAddress && specificOrderDetails.shippingAddress.city}</p>
                      :المحافظة
                    </li>
                    <li>
                      <p>{specificOrderDetails.shippingAddress && specificOrderDetails.shippingAddress.details}</p>
                      :العنوان بالتفصيل
                    </li>
                    <li>
                      <p>{specificOrderDetails.shippingAddress && specificOrderDetails.shippingAddress.phone}</p>
                      :رقم الهاتف
                    </li>
                    <li>
                      <p>{specificOrderDetails.shippingAddress && specificOrderDetails.shippingAddress.postalCode}</p>
                      :الرقم البريدي
                    </li>
                    <li>
                      <p>{Math.ceil(specificOrderDetails.totalOrderPrice)}.00 L.E</p>
                      :إجمالي الفاتورة
                    </li>                    
                    <li>
                      <p>{specificOrderDetails.createdAt}</p>
                      :تاريخ الطلب
                    </li>
                  </ul>
                </div>
                <div className="order-status">
                  <h3>حالة الطلب</h3>
                  <ul>
                    <li>
                      <p>{specificOrderDetails.isDelivered ? "تم التوصيل":"لم يتم التوصيل"}</p>
                      :حالة التوصيل
                    </li>
                    <li>
                      <p>{specificOrderDetails.isPaid ? "تم الدفع":"لم يتم الدفع"}</p>
                      :حالة الدفع
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default OrderDetails;
