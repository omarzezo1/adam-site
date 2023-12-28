import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpecificOrder } from "../../../redux/actions/orderAction";
import serverUrl from "../../../api/serverUrl";
import ShopNavbar from "../../../components/shop/ShopNavbar";
import ShopFooter from "../../../components/shop/ShopFooter";

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
        }
      }
    }
  }, [specificOrderData]);

  return (
    <div className="order-details-page">
      <ShopNavbar />
      <div className="container">
        {specificOrderDetails ? (
          <div className="order-wraper">
            <h2>Order's Details #{specificOrderDetails.id}</h2>
            <div className="order-details-container">
              <div className="order-details">
                <div className="user-info">
                  <h3>User Info</h3>
                  <ul>
                    <li>
                      Username:
                      <p>
                        {specificOrderDetails.user &&
                          specificOrderDetails.user.name}
                      </p>
                    </li>
                    <li>
                      E-mail:
                      <p>
                        {specificOrderDetails.user &&
                          specificOrderDetails.user.email}
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="shipping-info">
                  <h3>Shipping Info</h3>
                  <ul>
                    <li>
                      City:
                      <p>
                        {specificOrderDetails.shippingAddress &&
                          specificOrderDetails.shippingAddress.city}
                      </p>
                    </li>
                    <li>
                      Address Details:
                      <p>
                        {specificOrderDetails.shippingAddress &&
                          specificOrderDetails.shippingAddress.details}
                      </p>
                    </li>
                    <li>
                      Phone Number:
                      <p>
                        {specificOrderDetails.shippingAddress &&
                          specificOrderDetails.shippingAddress.phone}
                      </p>
                    </li>
                    <li>
                      Zip Code:
                      <p>
                        {specificOrderDetails.shippingAddress &&
                          specificOrderDetails.shippingAddress.postalCode}
                      </p>
                    </li>
                    <li>
                      Total:
                      <p>
                        {Math.ceil(specificOrderDetails.totalOrderPrice)}.00 L.E
                      </p>
                    </li>
                    <li>
                      Order's Date:
                      <p>{specificOrderDetails.createdAt}</p>
                    </li>
                  </ul>
                </div>
                <div className="order-status">
                  <h3>Order's Status</h3>
                  <ul>
                    <li>
                      Delivery Status:
                      <p>
                        {specificOrderDetails.isDelivered
                          ? "Delivered"
                          : "Not delivered"}
                      </p>
                    </li>
                    <li>
                      Payment Status:
                      <p>{specificOrderDetails.isPaid ? "Paid" : "Not Paid"}</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="order-items">
                <div className="order-products-wraper">
                  {specificOrderDetails.cartItems
                    ? specificOrderDetails.cartItems.map((product, index) => (
                        <div className="product-cart" key={index}>
                          <div className="product-img">
                            <img
                              src={`${serverUrl}/products/${product.product.imageCover}`}
                              alt="product-img"
                            />
                          </div>
                          <div className="prodeuct-details">
                            <ul>
                              <li>
                                Product's Code:
                                <p>
                                  {product.product && product.product.title}
                                </p>
                              </li>
                              <li>
                                Size:
                                <p className="size">{product.color}</p>
                              </li>
                              <li>
                                Quantity:
                                <p className="size">{product.count}</p>
                              </li>
                              <li>
                                Price per piece:
                                <p className="size">{product.price}.00 L.E</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <ShopFooter />
    </div>
  );
};

export default OrderDetails;
