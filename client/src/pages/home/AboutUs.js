import React from "react";
import { Link } from "react-router-dom";
import Info from '../../components/Home/Info'
import Navbar from "../../utilities/Navbar";
import Footer from "../../utilities/Footer";

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="about-page">
      <div className="about-container">
        <div className="about-intro">
          <div className="container">
            <div className="intro-info">
              <h3>ABOUT US</h3>
              <p>
                We believe that our
                <br />
                work creates shared
                <br />
                value for
                <span>Customers</span>
              </p>
              <div className="work-with">
                <Link to="">WORK WITH US</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Info/>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
