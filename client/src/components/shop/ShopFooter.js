import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import FooterLogo from '../../images/imgs/shop-logo1.png'
import Facebook from '../../images/svg/facebook.svg'
import Twiter from '../../images/svg/twitter.svg'
import Tiktok from '../../images/svg/tiktok.svg'
import Youtube from '../../images/svg/youtube.svg'
import Home from '../../images/svg/home.svg'
import Search from '../../images/svg/search.svg'
import Cart from '../../images/svg/cart-product.svg'
import User from '../../images/svg/user.svg'

import {useDispatch, useSelector} from 'react-redux'
import { getCartItems } from "../../redux/actions/cartAction";


const ShopFooter = () => {

const [numOfCartItems, setNumOfCartItems] = useState("");
const cartItemsData = useSelector(state=> state.cartReducer.cartItems)
const dispatch = useDispatch()

useEffect(()=>{
    if(localStorage.getItem("userToken")){
      dispatch(getCartItems())
    }
  },[])

  useEffect(()=>{
    if(cartItemsData){
      if(cartItemsData.status === "success"){
        setNumOfCartItems(cartItemsData.numOfCartItems)
      }
    }
  },[cartItemsData])


  return (
    <footer className='footer-shop'>
        <div className='footer-container'>
            <div className='inner-footer'>
                <div className='footer-links'>
                    <ul>
                        <li><Link to="">Products</Link></li>
                        <li><Link to="">Offers</Link></li>
                        <li><Link to="">Contact</Link></li>
                    </ul>
                </div>
                <div className='footer-logo'><img src={FooterLogo} alt='footer-logo'/></div>
                <div className='footer-social'>
                    <a href=''><img src={Facebook} alt=''/></a>
                    <a href=''><img src={Twiter} alt=''/></a>
                    <a href=''><img src={Tiktok} alt=''/></a>
                    <a href=''><img src={Youtube} alt=''/></a>
                </div>

            </div>
            <div className='end-footer'>
                <p className='copyright'>© Copyrights, 2023 ADMOS <a href=''>Developed by Omar Abd Elaziz</a></p>
                <div className='pages'>
                    <Link to={"/"}>Terms of Service</Link>
                    <Link to={"/"}>Privacy Policy</Link>
                </div>
            </div>
            <div className='footer-navigation'>
                <ul>
                    <li>
                        <Link to={"/shop"}><img src={Home} alt='home'/></Link>
                    </li>
                    <li>
                        <Link to={"/"}><img src={Search} alt='home'/></Link>
                    </li>
                    <li>
                        <Link to={"/cart"}><img src={Cart} alt='home'/></Link>
                        <span>{numOfCartItems ? numOfCartItems:0}</span>
                    </li>
                    <li>
                        {
                            localStorage.getItem("userToken") ? (
                                <Link to="/profile"><img src={User} alt='home'/></Link>
                            ):(
                                <Link to="/login"><img src={User} alt='home'/></Link>
                            )
                        }
                        {/* <Link to={localStorage.getItem("userToen") ? "/profile":"/login"}><img src={User} alt='home'/></Link> */}
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default ShopFooter