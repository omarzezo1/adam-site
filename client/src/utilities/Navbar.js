import React, { useEffect, useState } from 'react'
import Logo from '../images/imgs/logo-light.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Ar from '../images/svg/flag-ar.svg'
import En from '../images/svg/flag-en.svg'
import Search from '../images/svg/search.svg'
import Menu from '../images/svg/menu.svg'
import Close from '../images/svg/close.svg'



const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [scroll, setScroll] = useState(false)
    const [lang, setLang] = useState(false)
    const [Flag, setFlag] = useState(Ar)
    const [mobileMenu, setMobileMenu] = useState(true)
    const [closeMenu, setCloseMenu] = useState(false)

    //to manage language
    useEffect(()=>{
        if(location.pathname.startsWith("/ar")){
            setFlag(En)
            setLang(true)
        }else{
            setFlag(Ar)
            setLang(false)
        }
    },[location.pathname])

    //show or hide navbar
    useEffect(()=>{
        window.addEventListener("load", ()=>{
            if(window.scrollY > 0){
                setScroll(true)
            }else{
                setScroll(false)
            }
        })

        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 0){
                setScroll(true)
            }else{
                setScroll(false)
            }
        })
    },[])

  return (
    <nav className='navbar' style={{background: scroll ? "rgb(51, 51, 51,.9)":"transparent"}}>
        <div className='container'>
            <div className='nav-container'>
                <div className='logo'>
                    <a href="/">
                        <img src={Logo} alt='logo'/>
                    </a>
                </div>
                <div className='nav-wraper'>
                    {
                        lang ? (
                            <ul className={mobileMenu ? "hide-menu":""}>
                            <li>
                                <NavLink to="/" onClick={()=>setMobileMenu(true)}>تواصل معنا</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" onClick={()=>setMobileMenu(true)}>المتجر</NavLink>
                            </li>
                            <li>
                                <NavLink to="/gallery" onClick={()=>setMobileMenu(true)}>المدونة</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blogs" onClick={()=>setMobileMenu(true)}>الأعمال</NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop"  onClick={()=>setMobileMenu(true)}>من نحن</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contacts"  onClick={()=>setMobileMenu(true)}>الرئيسية</NavLink>
                            </li>
                        </ul>
                        ):(
                            <ul className={mobileMenu ? "hide-menu":""}>
                            <li>
                                <NavLink to="/" onClick={()=>setMobileMenu(true)}>HOME</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" onClick={()=>setMobileMenu(true)}>ABOUT US</NavLink>
                            </li>
                            <li>
                                <NavLink to="/gallery" onClick={()=>setMobileMenu(true)}>PRODUCTS</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blogs" onClick={()=>setMobileMenu(true)}>BLOG</NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop"  onClick={()=>setMobileMenu(true)}>SHOP</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contacts"  onClick={()=>setMobileMenu(true)}>CONTACTS</NavLink>
                            </li>
                        </ul>
                        )
                    }
                    <div className='nav-icons'>
                        <div className='mobile-menu' onClick={()=>{
                            setMobileMenu(false)
                            setCloseMenu(true)
                        }}>
                            <img src={Menu} alt='mobile-menu'/>
                        </div>
                        <div className='close-menu' style={{display: closeMenu ? "block":"none"}} onClick={()=>{
                            setCloseMenu(false)
                            setMobileMenu(true)
                        }}>
                            <img src={Close} alt='close-menu'/>
                        </div>
                        <div className='cart' onClick={()=>{
                            if(lang){
                                navigate(location.pathname.slice(3))
                                setLang(false)
                                localStorage.setItem("lang", false)
                                setFlag(Ar)
                            }else{
                                navigate(`/ar${location.pathname}`)
                                setLang(true)
                                localStorage.setItem("lang", true)
                                setFlag(En)
                            }
                        }}>
                            <img src={Flag} alt='cart'/>
                            {/* <span>0</span> */}
                        </div>
                        <div className='search'>
                            <img src={Search} alt='search'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar