import React, { useState } from "react";
import ShopNavbar from "../../components/shop/ShopNavbar";
import ShopFooter from "../../components/shop/ShopFooter";
import { Link } from "react-router-dom";
import ProductImg from "../../images/imgs/product-details-big-1.jpg";
import Star from "../../images/svg/star.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Product1 from "../../images/imgs/product-10.png";
import Product3 from "../../images/imgs/product-3.png";
import Product4 from "../../images/imgs/product-4.png";
import Product5 from "../../images/imgs/product-5.png";
import Product6 from "../../images/imgs/product-6.png";
import ProductCard from "../../components/shop/ProductCard";

import { Navigation } from 'swiper/modules';

const SingleProduct = () => {
  const [qty, setQty] = useState(1);
  const [boxId, setBoxId] = useState("1");
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
            <h1 className="product-title">PROTEIN POWDER 2KG</h1>
          </div>
        </div>
      </section>
      <section className="product-details-container">
        <div className="product-imgs">
          <img src={ProductImg} alt="product-1" />
        </div>
        <div className="product-details">
          <h3 className="product-title">PROTEIN POWDER 2KG</h3>
          <div className="stock-rating">
            <span className="stock">in stock</span>
            <span className="rating">
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
            </span>
          </div>
          <p className="product-des">
            Supex food is food produced by methods complying with the standards
            of Rrganic farming. Standards vary Lorem ipsum do
          </p>
          <div className="product-price">
            <p className="price-before">$210.00</p>
            <p className="price-after">$110.00</p>
          </div>
          <div className="qty">
            <h6>QUANTITY</h6>
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
            </div>
            <div className="add-to-cart">Add To Cart</div>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
            </p>
          </div>
          <div className="reviews-box" style={{display: boxId === "2" ? "block":"none"}}>ssss</div>
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
          <SwiperSlide>
            <ProductCard productImg={Product1} productTitle={"Pro Rule OQ 01"}/>
          </SwiperSlide>

          <SwiperSlide>
          <ProductCard productImg={Product3} productTitle={"Pro Rule OQ 01"}/>
          </SwiperSlide>

          <SwiperSlide>
          <ProductCard productImg={Product4} productTitle={"Pro Rule OQ 01"}/>
          </SwiperSlide>

          <SwiperSlide>
          <ProductCard productImg={Product5} productTitle={"Pro Rule OQ 01"}/>
          </SwiperSlide>

          <SwiperSlide>
          <ProductCard productImg={Product6} productTitle={"Pro Rule OQ 01"}/>
          </SwiperSlide>

          <SwiperSlide>
          <ProductCard productImg={Product5} productTitle={"Pro Rule OQ 01"}/>
          </SwiperSlide>

        </Swiper>
        </div>
      </div>
      <ShopFooter />
    </div>
  );
};

export default SingleProduct;
