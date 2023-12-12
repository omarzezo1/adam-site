import React from 'react'
import ProductImg from '../../images/imgs/about-01.png'
import Left from '../../images/imgs/banner-shape-01.png'
import Check from '../../images/svg/check.svg'
import { Link } from 'react-router-dom'

const ProductInfo = () => {
  return (
    <section className='product-info'>
      <img src={Left} className='left' alt='left'/>
      <img src={Left} className='right' alt='right'/>
      <div className='section-title'><h5>ADMOS PRODUCT DETAILS AND FEATURES</h5></div>
      <div className='product-info-container'>
        <div className='product-img'>
          <img src={ProductImg} alt='product-img'/>
        </div>
        <div className='product-details'>
          <h4>Supplement Formulas Features of the most favorite Flavor </h4>
          <p>
          Our supplements are meticulously formulated with a focus on quality, efficacy, and innovation, ensuring that you receive the best possible results.
          </p>
          <ul>
            <li>
              <img src={Check} alt='check'/>
              Natural Ingredients
            </li>
            <li>
              <img src={Check} alt='check'/>
              Fishbone Diagram
            </li>
            <li>
              <img src={Check} alt='check'/>
              Flower Formula
            </li>
            <li>
              <img src={Check} alt='check'/>
              Increased Energy
            </li>
          </ul>
          <div className='line-after'>
            <p>
            Our supplements are meticulously formulated with a focus on quality, efficacy, and innovation.
            </p>
          </div>
          <div className='btns-wraper'>
            <Link className="link-btn" to={"/"}>Shop Now</Link>
            <Link className="link-btn" to={"/"}>Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInfo