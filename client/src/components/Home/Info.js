import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideImg1 from "../../images/imgs/about-img.jpg";

const Info = () => {
  const [linkIndek, setLinkIndex] = useState("1");
  return (
    <section className="info">
      <div className="container">
        <div className="info-wraper">
          <div className="details-container">
            <div className="details">
              <h3
                id="1"
                className={linkIndek === "1" ? "active" : ""}
                onClick={(e) => setLinkIndex(e.target.id)}
              >
                <small>01</small>
                About Us
              </h3>
              <div
                className="inner-details"
                style={{ display: linkIndek === "1" ? "flex" : "none" }}
              >
                <div className="img">
                  <img src={SideImg1} alt="side-img" />
                </div>
                <div className="inner-info">
                  <h5>ABOUT US</h5>
                  <h2>
                    <span>01</span>
                    Who We Are
                  </h2>
                  <p>
                    Cras hendrerit elementum nibh, a faucibus sapien accumsan
                    quis. Nulla ullamcorper, magna quis faucibus volutpat, mi
                    mauris posuere nunc, sed elementum ante tortor id magna.
                    Suspendisse ullamcorper dui ut molestie malesuada. Mauris in
                    lectus ut ante laoreet vehicula a non sapien. Quisque eu
                    iaculis magna. Mauris eu velit quis massa consequat accumsan
                    et id lorem.
                  </p>
                  <Link to="" className="read-more">READ MORE</Link>
                </div>
              </div>
            </div>

            <div className="details">
              <h3
                id="2"
                className={linkIndek === "2" ? "active" : ""}
                onClick={(e) => setLinkIndex(e.target.id)}
              >
                <small>01</small>
                Insights
              </h3>
              <div
                className="inner-details"
                style={{ display: linkIndek === "2" ? "flex" : "none" }}
              >
                <div className="img">
                  <img loading="lazy" src={SideImg1} alt="side-img" />
                </div>
                <div className="inner-info">
                  <h5>Insights</h5>
                  <h2>
                    <span>02</span>
                    Who We Are
                  </h2>
                  <p>
                    Cras hendrerit elementum nibh, a faucibus sapien accumsan
                    quis. Nulla ullamcorper, magna quis faucibus volutpat, mi
                    mauris posuere nunc, sed elementum ante tortor id magna.
                    Suspendisse ullamcorper dui ut molestie malesuada. Mauris in
                    lectus ut ante laoreet vehicula a non sapien. Quisque eu
                    iaculis magna. Mauris eu velit quis massa consequat accumsan
                    et id lorem.
                  </p>
                  <Link to="" className="read-more">READ MORE</Link>
                </div>
              </div>
            </div>

            <div className="details">
              <h3
                id="3"
                className={linkIndek === "3" ? "active" : ""}
                onClick={(e) => setLinkIndex(e.target.id)}
              >
                <small>03</small>
                News and Media
              </h3>
              <div
                className="inner-details"
                style={{ display: linkIndek === "3" ? "flex" : "none" }}
              >
                <div className="img">
                  <img loading="lazy" src={SideImg1} alt="side-img" />
                </div>
                <div className="inner-info">
                  <h5>News and Media</h5>
                  <h2>
                    <span>03</span>
                    Who We Are
                  </h2>
                  <p>
                    Cras hendrerit elementum nibh, a faucibus sapien accumsan
                    quis. Nulla ullamcorper, magna quis faucibus volutpat, mi
                    mauris posuere nunc, sed elementum ante tortor id magna.
                    Suspendisse ullamcorper dui ut molestie malesuada. Mauris in
                    lectus ut ante laoreet vehicula a non sapien. Quisque eu
                    iaculis magna. Mauris eu velit quis massa consequat accumsan
                    et id lorem.
                  </p>
                  <Link to="" className="read-more">READ MORE</Link>
                </div>
              </div>
            </div>

            <div className="details">
              <h3
                id="4"
                className={linkIndek === "4" ? "active" : ""}
                onClick={(e) => setLinkIndex(e.target.id)}
              >
                <small>04</small>
                Our Group
              </h3>
              <div
                className="inner-details"
                style={{ display: linkIndek === "4" ? "flex" : "none" }}
              >
                <div className="img">
                  <img loading="lazy" src={SideImg1} alt="side-img" />
                </div>
                <div className="inner-info">
                  <h5>Our Group</h5>
                  <h2>
                    <span>04</span>
                    Who We Are
                  </h2>
                  <p>
                    Cras hendrerit elementum nibh, a faucibus sapien accumsan
                    quis. Nulla ullamcorper, magna quis faucibus volutpat, mi
                    mauris posuere nunc, sed elementum ante tortor id magna.
                    Suspendisse ullamcorper dui ut molestie malesuada. Mauris in
                    lectus ut ante laoreet vehicula a non sapien. Quisque eu
                    iaculis magna. Mauris eu velit quis massa consequat accumsan
                    et id lorem.
                  </p>
                  <Link to="" className="read-more">READ MORE</Link>
                </div>
              </div>
            </div>

            <div className="details">
              <h3
                id="5"
                className={linkIndek === "5" ? "active" : ""}
                onClick={(e) => setLinkIndex(e.target.id)}
              >
                <small>05</small>
                Opportunity
              </h3>
              <div
                className="inner-details"
                style={{ display: linkIndek === "5" ? "flex" : "none" }}
              >
                <div className="img">
                  <img loading="lazy" src={SideImg1} alt="side-img" />
                </div>
                <div className="inner-info">
                  <h5>Opportunity</h5>
                  <h2>
                    <span>05</span>
                    Who We Are
                  </h2>
                  <p>
                    Cras hendrerit elementum nibh, a faucibus sapien accumsan
                    quis. Nulla ullamcorper, magna quis faucibus volutpat, mi
                    mauris posuere nunc, sed elementum ante tortor id magna.
                    Suspendisse ullamcorper dui ut molestie malesuada. Mauris in
                    lectus ut ante laoreet vehicula a non sapien. Quisque eu
                    iaculis magna. Mauris eu velit quis massa consequat accumsan
                    et id lorem.
                  </p>
                  <Link to="" className="read-more">READ MORE</Link>
                </div>
              </div>
            </div>

            <div className="details">
              <h3
                id="6"
                className={linkIndek === "6" ? "active" : ""}
                onClick={(e) => setLinkIndex(e.target.id)}
              >
                <small>06</small>
                Location Facts
              </h3>
              <div
                className="inner-details"
                style={{ display: linkIndek === "6" ? "flex" : "none" }}
              >
                <div className="img">
                  <img loading="lazy" src={SideImg1} alt="side-img" />
                </div>
                <div className="inner-info">
                  <h5>Location Facts</h5>
                  <h2>
                    <span>06</span>
                    Who We Are
                  </h2>
                  <p>
                    Cras hendrerit elementum nibh, a faucibus sapien accumsan
                    quis. Nulla ullamcorper, magna quis faucibus volutpat, mi
                    mauris posuere nunc, sed elementum ante tortor id magna.
                    Suspendisse ullamcorper dui ut molestie malesuada. Mauris in
                    lectus ut ante laoreet vehicula a non sapien. Quisque eu
                    iaculis magna. Mauris eu velit quis massa consequat accumsan
                    et id lorem.
                  </p>
                  <Link to="" className="read-more">READ MORE</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="links">
            <ul>
              <li
                id="1"
                className={linkIndek === "1" ? "active" : ""}
                onClick={(e) => setLinkIndex(e.target.id)}
              >
                <small>01</small>
                About Us
              </li>
              <li
                id="2"
                className={linkIndek === "2" ? "active" : ""}
                onClick={(e) => setLinkIndex(e.target.id)}
              >
                <small>02</small>
                Insights
              </li>
              <li
                id="3"
                className={linkIndek === "3" ? "active" : ""}
                onClick={(e) => setLinkIndex(e.target.id)}
              >
                <small>03</small>
                News and Media
              </li>
              <li
                id="4"
                className={linkIndek === "4" ? "active" : ""}
                onClick={(e) => setLinkIndex(e.target.id)}
              >
                <small>04</small>
                Our Group
              </li>
              <li
                id="5"
                className={linkIndek === "5" ? "active" : ""}
                onClick={(e) => setLinkIndex(e.target.id)}
              >
                <small>05</small>
                Opportunity
              </li>
              <li
                id="6"
                className={linkIndek === "6" ? "active" : ""}
                onClick={(e) => setLinkIndex(e.target.id)}
              >
                <small>06</small>
                Location Facts
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
