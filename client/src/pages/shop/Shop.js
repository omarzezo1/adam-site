import React from 'react'
import ShopIntro from '../../components/shop/ShopIntro'
import ShopNavbar from '../../components/shop/ShopNavbar'
import ProductInfo from '../../components/shop/ProductInfo'
import BestProducts from '../../components/shop/BestProducts'
import ProductFeatures from '../../components/shop/ProductFeatures'
import Ask from '../../components/shop/Ask'
import ShopFooter from '../../components/shop/ShopFooter'
import OurBlogs from '../../components/shop/OurBlogs'

const Shop = () => {
  return (
    <div className='shop-page'>
        <ShopNavbar/>
        <ShopIntro/>
        <ProductInfo/>
        <BestProducts/>
        <ProductFeatures/>
        <OurBlogs/>
        <Ask/>
        <ShopFooter/>
    </div>
  )
}

export default Shop