import React, { useEffect, useState } from "react";
import Star from "../../images/svg/star.svg";
import Heart from "../../images/svg/heart.svg";
import HeartRed from "../../images/svg/heart-red.svg";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";
import {
  addToWishlist,
  removeProductFromWishlist,
} from "../../redux/actions/wishlistAction";

import ReactStars from "react-rating-stars-component";


const ProductCard = ({ product, favorite }) => {
  const [heart, setHeart] = useState(false);
  const dispatch = useDispatch();
 
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

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


  const handelAddToCart = (productId) => {
    dispatch(
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
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={30}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#8f6B29"
              edit={false}
              value={product.ratingsAverage}
            />
        </div>
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
