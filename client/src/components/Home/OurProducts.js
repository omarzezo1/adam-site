import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Product1 from '../../images/imgs/product-1.png'
import Product2 from '../../images/imgs/product-2.png'

// import required modules
import { Navigation } from "swiper/modules";

const OurProducts = () => {
  return (
    <section className="our-products">
      <div className="container">
        <div className="our-products-wraper">
          <h5>OUR PRODUCTS</h5>
          <h2 className="title">Latest Products</h2>
          <div className="products-container">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slide-number">
                    <p>01</p>
                    <p>03</p>
                </div>
                <div className="product-img">
                    <img loading="lazy" src={Product1} alt="product-1"/>
                </div>
                <div className="product-info">
                    <h3>
                    Here's What<br/>Industry Insiders<br/>Say About<br/>Business Cards
                    </h3>
                    <small>ADAM'S PRODUCT</small>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide-number">
                    <p>02</p>
                    <p>03</p>
                </div>
                <div className="product-img">
                    <img loading="lazy" src={Product2} alt="product-1"/>
                </div>
                <div className="product-info">
                    <h3>
                    12 Freaky Reasons<br/>Builds  Could Get<br/>You  Fired
                    </h3>
                    <small>ADAM'S PRODUCT</small>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
