import React from 'react'
import Logo from '../images/imgs/logo-light.png'
import Phone from '../images/svg/phone.svg'
import Mail from '../images/svg/mail.svg'
import Location from '../images/svg/location.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='footer-container'>
                <div className='info-footer'>
                    <div className='logo-footer'>
                        <img src={Logo} alt='logo-footer'/>
                    </div>
                    <div className='info-footer-wraper'>
                        <p>
                        Aliquam ornare velit non ligula dignissim auctor. Nunc pharetra consectetur aliquet. Orci varius natoque penatibus et magnis dis parturient montes.
                        </p>
                    </div>
                    <div className='copyright'>
                        <p>© 2023 Luxa, Developed by Omar Abd El-aziz</p>
                    </div>
                </div>
                <div className='links-footer'>
                    <h6>Links</h6>
                    <div className='links-footer-wraper'>
                        <ul>
                            <li>
                            <Link to="">404 Page</Link>
                            </li>
                            <li>
                            <Link to="">About Me</Link>
                            </li>
                            <li>
                            <Link to="">About Us</Link>
                            </li>
                            <li>
                            <Link to="">Coming Soon</Link>
                            </li>
                            <li>
                            <Link to="">Services</Link>
                            </li>
                        </ul>

                        <ul>
                            <li>
                            <Link to="">Product List</Link>
                            </li>
                            <li>
                            <Link to="">Contacts</Link>
                            </li>
                            <li>
                            <Link to="">My account</Link>
                            </li>
                            <li>
                            <Link to="">Checkout</Link>
                            </li>
                            <li>
                            <Link to="">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='contacts-footer'>
                    <h6>Contacts</h6>
                    <ul className='contacts-footer-wraper'>
                        <li>
                            <Link to="">
                                <img src={Phone} alt=''/>
                                +1 623-812-4957
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <img src={Mail} alt=''/>
                                support@promo-theme.com
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <img src={Location} alt=''/>
                                5022 Baker Street London 10013
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer