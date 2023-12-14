import React, { useEffect, useState } from "react";
import Star from "../../images/svg/star.svg";
import Heart from "../../images/svg/heart.svg";
import HeartRed from "../../images/svg/heart-red.svg";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeProductFromWishlist,
} from "../../redux/actions/wishlistAction";

const ProductCard = ({ product, favorite }) => {
  const [heart, setHeart] = useState(false);
  const dispatch = useDispatch();
 


  //add or remove product from wishlist
  const handelAddToWishlist = (productId) => {
    if (heart) {
      dispatch(removeProductFromWishlist(productId));
      setHeart(false);
    } else {
      dispatch(
        addToWishlist({
          productId: productId,
        })
      );
      setHeart(true);
    }
  };

  const removeFavProduct = (productId)=>{
    dispatch(removeProductFromWishlist(productId))
    let list = JSON.parse(localStorage.getItem("favProductsAdam")).filter(el=> el !== productId)
    localStorage.setItem("favProductsAdam", JSON.stringify(list))
    setHeart(false)
}


  const handelAddToCart = async (productId) => {
    await dispatch(
      addToCart({
        productId,
      })
    );
    window.location.href = "/cart";
  };

  return (
    <div className="product">
      <div className="product-img">
        <Link to={`/shop/product/${product._id}`}>
          <img src={product.imageCover} alt="product-1" />
        </Link>
      </div>
      <div className="product-details">
        <h3>
          <Link to={`/shop/product/${product._id}`}>{product.title}</Link>
        </h3>
        <div className="price">
          <p className="price-before">${Math.ceil(product.price)}</p>
          <p className="price-after">
            ${Math.ceil(product.priceAfterDiscount)}
          </p>
        </div>
        <div className="rating">
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
        </div>
        {/* src={favorite || heart ? HeartRed : Heart} */}
        <div className="add-to-cart">
          {
            favorite || heart ? (
              <img
              src={HeartRed}
              className="cart-img"
              alt="cart-img"
              onClick={() => removeFavProduct(product._id)}
            />
            ):(
              <img
              src={Heart}
              className="cart-img"
              alt="cart-img"
              onClick={() => handelAddToWishlist(product._id)}
            />
            )
          }
          <span onClick={() => handelAddToCart(product._id)}>ADD TO CART</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
