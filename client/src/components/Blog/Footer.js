import React from 'react'
import Whatsapp from '../../images/svg/whatsapp-green.svg'
import Telegram from '../../images/svg/telegram-blue.svg'
import Facebook from '../../images/svg/facebook-blog.svg'
import Twitter from '../../images/svg/twitter-blog.svg'
import Instagram from '../../images/svg/instagram-blog.svg'
import Youtube from '../../images/svg/youtube-blog.svg'
import Linkedin from '../../images/svg/linkedin.svg'
import Snapchat from '../../images/svg/snapchat.svg'
import Reddit from '../../images/svg/reddit.svg'


const Footer = () => {
  return (
    <footer className="footer-blog" dir='rtl'>
    <div className="container">
      <div className="footer-container">
        <div className="email-form">
          <div className="descbox">
            <h5>النشرة الدورية</h5>
            <p>أحصل على معلومات حصرية مجانا على البريد الإلكتروني</p>
          </div>
          <form>
            <input type="email" className="email-input" placeholder="أدخل بريدك الإلكتروني"/>
            <input type="submit" value="موافق" className="submit"/>
          </form>
        </div>

        <div className="contact-us">
          <div className="descbox">
            <h5>تواصل معنا</h5>
            <div className="whats-telegram">
              <div className="contact whatsapp">
                <a href="">
                <img src={Whatsapp} alt="whatsapp"/>
                <small>واتساب</small>
                </a>
              </div>
              <div className="contact telegram">
                <a href="">
                <img src={Telegram} alt="telegram"/>
                <small>تليجرام</small>
                </a>
              </div>
            </div>
          </div>
          <ul className="email-phone">
            <li>
              <h6>إيميل:</h6>
              <a href="">info@admosfoods.com</a>
            </li>
            <li>
              <h6>تليفون:</h6>
              <a href="">+1 (201) 616-0403</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="break">Admos Community<span>Social Channels</span></p>
      <div className="social-icons-wraper">
        <a href=""><img src={Facebook} alt="facebook"/></a>
        <a href=""><img src={Twitter} alt="twitter"/></a>
        <a href=""><img src={Instagram} alt="instagram"/></a>
        <a href=""><img src={Snapchat} alt="snapchat"/></a>
        <a href=""><img src={Reddit} alt="reddit"/></a>
        <a href=""><img src={Linkedin} alt="linkedin"/></a>
        <a href=""><img src={Youtube} alt="youtube"/></a>
      </div>
    </div>
  </footer>
  )
}

export default Footer