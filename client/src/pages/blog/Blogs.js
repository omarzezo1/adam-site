import React from 'react'
import ShopNavbar from '../../components/shop/ShopNavbar'
import LatestBlog from '../../components/Blog/LatestBlog'
import Footer from '../../components/Blog/Footer'

const Blogs = () => {
  return (
    <div className='page-container'>
      <ShopNavbar/>
      <LatestBlog/>
      <Footer/>
    </div>
  )
}

export default Blogs