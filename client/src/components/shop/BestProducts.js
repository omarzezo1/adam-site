import React, { useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


import { Navigation } from 'swiper/modules';

import ProductCard from "./ProductCard";
import {getAllProducts} from '../../redux/actions/productAction'
import {useDispatch, useSelector} from 'react-redux'
import {getLoggedUserWishlist,} from "../../redux/actions/wishlistAction";
const BestProducts = () => {
  const [allProducts, setAllProducts] = useState([])
  const [allWishlistArray, setAllWishListArray] = useState([]);
  const [heart, setHeart] = useState(false);
  const  [productToColoringHeart, setProductToColoringHeart] = useState([])


  const dispatch = useDispatch()
  const allProductsData = useSelector(state=>state.productReducer.allProducts)
  const allWishlist = useSelector(
    (state) => state.wishlistReducer.loggedUserWishlist
  );


  //get all Products
  useEffect(()=>{
    dispatch(getAllProducts())
    if (!localStorage.getItem("favProductsAdam")) {
      localStorage.setItem("favProductsAdam", JSON.stringify(allWishlistArray));
    }
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

    //get logged user wishlist
    useEffect(() => {
      dispatch(getLoggedUserWishlist());
    }, []);

  // add all wishlist products to localstorage
  useEffect(() => {
    if (allWishlist) {
      if (allWishlist.status === "success") {
        if (allWishlist.data) {
          setAllWishListArray(allWishlist.data);
          var storedFavProducts = JSON.parse(
            localStorage.getItem("favProductsAdam")
          );
          allWishlist.data.map((wish) => {
            if (!storedFavProducts.includes(wish._id)) {
              storedFavProducts.push(wish._id);
            }
          });
          localStorage.setItem(
            "favProductsAdam",
            JSON.stringify(storedFavProducts)
          );
        }
      }
    }
  }, [allWishlist]);


  //get fav Products List To Coloring Heart
  useEffect(()=>{
    if(localStorage.getItem("favProductsAdam")){
      setProductToColoringHeart(JSON.parse(
        localStorage.getItem("favProductsAdam")
      ));
    }
  },[localStorage.getItem("favProductsAdam")])



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
          {
            allProducts.length > 0 ? (
              allProducts.map((product, index)=>(
                productToColoringHeart.includes(product._id) ? (
                  <SwiperSlide key={index}>
                  <ProductCard product={product} favorite={true}/>
                  </SwiperSlide>
                ):(
                  <SwiperSlide key={index}>
                  <ProductCard product={product} favorite={false}/>
                  </SwiperSlide>
                )         
              ))
            ):null
          }

        </Swiper>
      </div>
    </section>
  );
};

export default BestProducts;
