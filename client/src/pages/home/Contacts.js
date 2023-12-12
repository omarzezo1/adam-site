import React from "react";
import Navbar from "../../utilities/Navbar";
import Footer from "../../utilities/Footer";
import Call from "../../images/svg/phone.svg";
import Email from "../../images/svg/mail.svg";
import Location from "../../images/svg/location.svg";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <div className="contacts-page">
        <div className="container">
          <div className="contacts-page-wraper">
            <div className="title">
              <h2>Contact Us</h2>
            </div>
            <div className="contacts-container">
              <div className="contact-info">
                <ul>
                  <li>
                    <img src={Call} alt="call" />
                    <span>+1 623-812-4957</span>
                  </li>
                  <li>
                    <img src={Email} alt="email" />
                    <span>support@promo-theme.com</span>
                  </li>
                  <li>
                    <img src={Location} alt="location" />
                    <span>5022 Baker Street London 10013</span>
                  </li>
                </ul>
                <div className="map">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.466137133211!2d32.55488513540826!3d29.96603102922866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145625765e873361%3A0x758c004011a678d5!2z2LPZgdin2LHZiiBzdWV6!5e0!3m2!1sar!2seg!4v1622752386580!5m2!1sar!2seg"
                allowFullScreen=""
                loading="lazy"
                title="safarymap"
                className="map-frame"
              ></iframe>
                </div>
              </div>
              <div className="contact-form">
                <form>
                    <input type="text" placeholder="Full Name"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="text" placeholder="Subject"/>
                    <div className="msg-box">
                        <label>Message</label>
                        <textarea cols='40' rows='6'></textarea>
                    </div>
                    <div className="send-btn">
                        <button>Send</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
