import React, { useEffect, useState } from "react";
import ShopNavbar from "../../components/shop/ShopNavbar";
import ShopFooter from "../../components/shop/ShopFooter";
import ProductCard from '../../components/shop/ProductCard'
import { Link } from "react-router-dom";
import Heart from "../../images/svg/heart.svg";
import HeartRed from "../../images/svg/heart-red.svg";
import User from "../../images/svg/user.svg";
import {
  addToWishlist,
  getLoggedUserWishlist,
  removeProductFromWishlist,
} from "../../redux/actions/wishlistAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProducts, getSingleProduct } from "../../redux/actions/productAction";
import { addToCart } from "../../redux/actions/cartAction";
import ReactStars from "react-rating-stars-component";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


import { Navigation } from 'swiper/modules';
import { createProductReview } from "../../redux/actions/productReviewsAction";

const SingleProduct = () => {
  const [boxId, setBoxId] = useState("1");
  const [heart, setHeart] = useState(false);
  const [allProducts, setAllProducts] = useState(false);
  const [productId, setProductId] = useState("");
  const [singleProduct, setSingleProduct] = useState({});
  const [allProductReviews, setAllProductReviws] = useState([]);
  const [toggleShowReviewBox, setToggleShowReviewBox] = useState(false)
  const [review, setReview] = useState("")
  const [rating, setRating] = useState("")
  const [reviewCreated, setReviewCreated] = useState(false)
  const [reviewError, setReviewError] = useState(false)

  const dispatch = useDispatch();

  const allWishlist = useSelector(
    (state) => state.wishlistReducer.loggedUserWishlist
  );
  const productData = useSelector(
    (state) => state.productReducer.singleProduct
  );


  const allProductsData = useSelector(
    (state) => state.productReducer.allProducts
  );

  const writeReviewData = useSelector(
    (state) => state.productReviewsReducer.review
  );

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])



  useEffect(()=>{
    if(allProductsData){
      if(allProductsData.status === 200){
        if(allProductsData.data){
          setAllProducts(allProductsData.data.data)
        }
      }
    }
  },[allProductsData])

  const { id } = useParams();
  useEffect(() => {
    setProductId(id);
  }, [id]);

  //get single product ID
  useEffect(() => {
    if (productId) {
      dispatch(getSingleProduct(productId));
    }
  }, [productId]);

  useEffect(() => {
    if (productData) {
      if (productData.data) {
        setSingleProduct(productData.data);
        setAllProductReviws(productData.data.reviews)
      }
    }
  }, [productData]);



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

  //get logged user wishlist
  useEffect(() => {
    if(localStorage.getItem("userToken")){
      dispatch(getLoggedUserWishlist());
    }
  }, []);

  useEffect(() => {
    if (allWishlist) {
      if (allWishlist.status === "success") {
        if (allWishlist.data) {
          allWishlist.data.map((wish) => {
            if (wish._id === productId) {
              setHeart(HeartRed);
            }
          });
        }
      }
    }
  }, [allWishlist]);

  const handelCart = () => {
    dispatch(
      addToCart({
        productId: productId,
      })
    );
    window.location = '/cart'
  };


  const ratingChanged = (newRating) => {
    setRating(newRating);
  };


  const handelWriteReview = ()=>{
    dispatch(createProductReview(productId,{
      review,
      rating,
  }))
  }

  useEffect(()=>{
    if(writeReviewData){
      if(writeReviewData.status === 201){
        setReviewCreated(true)
      }else if(writeReviewData.status === 400){
        setReviewError(true)
      }
    }
  },[writeReviewData])


  return (
    <div className="single-product-page">
      <ShopNavbar />
      <section className="single-product-intro">
        <div className="overlay"></div>
        <div className="rec"></div>
        <div className="rec rec-bottom"></div>
        <div className="container">
          <div className="product-intro-container">
            <div className="page-navigation">
              <Link to="/shop">Home</Link>
              <span>/</span>
              <span className="product-details">Product Details</span>
            </div>
            <h1 className="product-title">{singleProduct.title}</h1>
          </div>
        </div>
      </section>
      <section className="product-details-container">
        <div className="product-imgs">
          <img src={singleProduct.imageCover} alt="product-1" />
        </div>
        <div className="product-details">
          <h3 className="product-title">PROTEIN POWDER 2KG</h3>
          <div className="stock-rating">
            <span className="stock">{singleProduct.quantity} in stock</span>
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
              value={singleProduct.ratingsAverage}
            />
            </div>
          </div>
          <p className="product-des">{singleProduct.description}</p>
          <div className="product-price">
            <p className="price-before">${Math.ceil(singleProduct.price)}</p>
            <p className="price-after">${Math.ceil(singleProduct.priceAfterDiscount)}</p>
          </div>
          <div className="qty">
            {/* <h6>QUANTITY</h6>
            <div className="qty-input">
              <span className="incress" onClick={() => setQty(qty + 1)}>
                +
              </span>
              <input type="number" value={qty} onChange={(e)=> setQty(e.target.value)} />
              <span
                className="decress"
                onClick={() => qty > 1 && setQty(qty - 1)}
              >
                -
              </span>
            </div> */}
            <div className="add-to-wishlist" onClick={()=>handelAddToWishlist(singleProduct._id)}>
              <img src={heart ? HeartRed:Heart} alt="add-to-wishlist"/>
            </div>
            <div className="add-to-cart" onClick={()=>handelCart(singleProduct._id)}>Add To Cart</div>
          </div>
        </div>
      </section>
      <div className="description-reviews">
        <ul>
          <li className={boxId === "1" ? "active":""} onClick={()=>setBoxId('1')}>Descriptions</li>
          <li className={boxId === "2" ? "active":""} onClick={()=>setBoxId('2')}>Reviews</li>
        </ul>
        <div className="boxs-container">
          <div className="desc-box" style={{display: boxId === "1" ? "block":"none"}}>
            <p>
            {singleProduct.description}
            </p>
          </div>
          <div className="reviews-box" style={{display: boxId === "2" ? "block":"none"}}>
          <div className="add-new-reviews">
                  {/* <p className="no-reviews">No Reviews Yet</p> */}
                  <span className="write-review" onClick={()=>setToggleShowReviewBox(!toggleShowReviewBox)}>WRITE A REVIEW</span>
                  <div className="success-msg" style={{display: reviewCreated ? "flex":"none"}}>
                    <small>Success: </small>
                    <p className="review-text">Review added successfully</p>
                  </div>
                  <div className="error-msg" style={{display: reviewError ? "flex":"none"}}>
                    <small>Error: </small>
                    <p className="review-text">You already added review on this product</p>
                  </div>
                  <div className="review-box" style={{display: toggleShowReviewBox ? "block":"none"}}>
                    <div className="review-rating">
                      <h5>Rating</h5>
                      <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={30}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#8f6B29"
                      />
                    </div>
                    <textarea maxLength={200} placeholder="Write a review" value={review} onChange={(e)=>setReview(e.target.value)}></textarea>
                    <button className="submit" onClick={handelWriteReview}>Submit Review</button>
                  </div>
                </div>
            {
              allProductReviews.length > 0 ? (
                <div className="reviews-wraper">
                  {
                    allProductReviews.map((item, index)=>(
                      <div className="review" key={index}>
                      <div className="user">
                        <img src={User} alt="user-img"/>
                        <h6>{item.user.name}</h6>
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
                      value={item.rating}
                      />
                      </div>
                      <p>{item.review}</p>
                      </div>
                    ))
                  }
                </div>
              ):(
                null
              )
            }
          </div>
        </div>
      </div>
      <div className="look-alike">
        <div className="title"><h3>SIMILAR PRODUCTS</h3></div>
        <div className="product-container">
        <Swiper
          className="mySwiper"
          navigation={true} 
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            350: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {
            allProducts.length > 0 ? (
              allProducts.map((product, index)=>(
                <SwiperSlide key={index}>
                  <ProductCard product={product}/>
                </SwiperSlide>
              ))
            ):null
          }
        </Swiper>
        </div>
      </div>
      <ShopFooter />
    </div>
  );
};

export default SingleProduct;
