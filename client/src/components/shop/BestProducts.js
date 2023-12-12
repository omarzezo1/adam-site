import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Product1 from "../../images/imgs/product-10.png";
import Product3 from "../../images/imgs/product-3.png";
import Product4 from "../../images/imgs/product-4.png";
import Product5 from "../../images/imgs/product-5.png";
import Product6 from "../../images/imgs/product-6.png";

import { Navigation } from 'swiper/modules';

import ProductCard from "./ProductCard";

const BestProducts = () => {
  return (
    <section className="best-products">
        <div className="section-title"><h2>BEST SELLING PRODUCTS</h2></div>
      <div className="best-products-wraper">
      <Swiper
          className="mySwiper"
          navigation={true} 
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={40}
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
              slidesPerView: 4,
              spaceBetween: 40,
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
    </section>
  );
};

export default BestProducts;
