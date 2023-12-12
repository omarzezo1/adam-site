import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Avatar1 from "../../images/imgs/testimonials-img1.jpg";
import Avatar2 from "../../images/imgs/testimonials-img2.jpg";
import Part1 from "../../images/imgs/brand1-a.png";
import Part2 from "../../images/imgs/brand2-a.png";
import Part3 from "../../images/imgs/brand3-a.png";
import Part4 from "../../images/imgs/brand4-a.png";
import Part5 from "../../images/imgs/brand5-a.png";

import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-container">
          <div className="title">
            <h5>what clients say</h5>
            <h3>Testimonials</h3>
          </div>
          <div className="testimonials-wraper">
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="testimonial">
                  <div className="avatar">
                    <img loading="lazy" src={Avatar1} alt="avatar-1" />
                  </div>
                  <div className="testimonial-details">
                    <p>
                      We never hesitate in our support, and we never lose sight
                      of our main mission: serving our clients. Our job is to
                      always make it easy for clients to do business with us and
                      strive not only to meet their needs but also to exceed
                      their expectations
                    </p>
                    <h6>Daren Noel</h6>
                    <small>CEO</small>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial">
                  <div className="avatar">
                    <img loading="lazy" src={Avatar2} alt="avatar-1" />
                  </div>
                  <div className="testimonial-details">
                    <p>
                      We never hesitate in our support, and we never lose sight
                      of our main mission: serving our clients. Our job is to
                      always make it easy for clients to do business with us and
                      strive not only to meet their needs but also to exceed
                      their expectations
                    </p>
                    <h6>Conor Rashford</h6>
                    <small>Designer</small>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="parteners">
        <Swiper
          className="mySwiper"
          slidesPerView={5}
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
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <img loading="lazy" src={Part1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Part2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Part3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Part4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Part5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Part1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Part2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={Part3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
