import React from "react";
import Star from "../../images/svg/star.svg";
import Cart from "../../images/svg/cart-product.svg";
import { Link } from "react-router-dom";

const ProductCard = ({productImg, productTitle}) => {
  return (
    <div className="product">
      <div className="product-img">
      <Link to={"/shop/product"}>
        <img src={productImg} alt="product-1" />
      </Link>
      </div>
      <div className="product-details">
        <h3>
          <Link to={"/shop/product"}>{productTitle}</Link>
        </h3>
        <div className="price">
          <p className="price-before">$120.99</p>
          <p className="price-after">$110.99</p>
        </div>
        <div className="rating">
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
        </div>
        <div className="add-to-cart">
          <img src={Cart} className="cart-img" alt="cart-img" />
          <span>ADD TO CART</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
