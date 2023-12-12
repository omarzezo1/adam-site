import React from "react";
import ShopNavbar from '../../components/shop/ShopNavbar'
import ShopFooter from '../../components/shop/ShopFooter'
import { Link } from "react-router-dom";
import ArticleImg from '../../images/imgs/blog/blog-details-01.png'
import Background from '../../images/imgs/blog/post-1.jpg'
import Author from '../../images/imgs/blog/blog-meta.png'
import Date from '../../images/svg/date-range.svg'
import Comments from '../../images/svg/comments.svg'
import Eye from '../../images/svg/eye.svg'

const SingleBlog = () => {
  return (
    <div className="single-blog-page">
        <ShopNavbar/>
      <section className="single-blog-intro" style={{backgroundImage: `url(${Background})`}}>
        <div className="overlay"></div>
        <div className="rec"></div>
        <div className="rec rec-bottom"></div>
        <div className="container">
          <div className="blog-intro-container">
          <div className="page-navigation">
                <Link to="/shop">Home</Link>
                <span>/</span>
                <span className="blog-details">Blog Details</span>
            </div>
            <h1 className="blog-title">hOW MUCH DO EAT YOU REALLY </h1>
          </div>
        </div>
      </section>
      <main className="content">
        <div className="article-img">
          <div className="overlay"></div>
          <img className="thum-img" src={ArticleImg} alt=""/>
          <div className="article-details">
            <div className="author-img-box">
              <img className="author-img" src={Author} alt=""/>
              <h6>KATHRYN MURPHY</h6>
            </div>
            <div className="date-box">
              <img src={Date} alt=""/>
              <h6>DEC 28, 2022</h6>
            </div>
            <div className="comments-box">
              <img src={Comments} alt=""/>
              <h6> (04) COMMENTS</h6>
            </div>
            <div className="views-box">
              <img src={Eye} alt=""/>
              <h6>1,526 VIEWERS</h6>
            </div>
          </div>
        </div>
        <article className="body">
          <h2>DISCOVER THE POWER OF XYZ SUPPLEMENT: UNLOCK YOUR FULL POTENTIAL</h2>
          <p>
          Designers should also focus on developing skills in areas such as user experience, user interface design, and data analysis, as these are becoming increasingly important in today's digital world. Additionally, designers should have a strong understanding of human psychology and behavior to create designs that are not users.
          </p>
          <a href="">can prepare for the future by being adaptable</a>
          <p>
          Moreover, designers should embrace sustainability and ethical design practices, as the world is becoming increasingly conscious of environmental and social issues. They should strive to create designs that are environmentally friendly, socially responsible, and inclusive of all individuals.
          </p>
          <p>
          In summary, designers can prepare for the future by being adaptable, continuously learning, developing new skills, understanding human psychology, and embracing sustainability and ethical design practices
          </p>
          <ul>
            <li>designers can <a href="">prepare</a> for the future by being adaptable</li>
            <li>designers can prepare for the future by being adaptable</li>
            <li>designers can prepare for the future by being adaptable</li>
            <li>designers can prepare for the future by being adaptable</li>
            <li>designers can prepare for the future by being adaptable</li>
          </ul>
          <p>
          In summary, designers can prepare for the future by being adaptable, continuously learning, developing new skills, understanding human psychology, and embracing sustainability and ethical design practices
          </p>
        </article>
      </main>
      <ShopFooter/>
    </div>
  );
};

export default SingleBlog;
