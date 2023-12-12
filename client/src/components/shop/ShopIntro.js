import React from "react";
import MainImg from "../../images/imgs/banner-img-2.png";
import SubImg from "../../images/imgs/banner-img-1.png";
import Cutting from "../../images/imgs/claws-animal-scratches_755228-528 (1).png";
import RightTree from "../../images/imgs/banner-shape-01.png";
import LeftTree from "../../images/imgs/banner-shape-05.png";

const ShopIntro = () => {
  return (
    <section className="shop-intro">
      <div className="rec"></div>
      <div className="rec rec-bottom"></div>
      <img className="right-tree" src={RightTree} alt="tree" />
      <img className="left-tree" src={RightTree} alt="tree" />
      <img className="right-tree-bottom" src={RightTree} alt="tree" />
      <img className="left-tree-bottom" src={LeftTree} alt="tree" />
      <div className="container">
        <div className="shop-intro-container">
          <img className="left-shap" src={Cutting} alt="left-img" />
          <img className="right-shap" src={Cutting} alt="left-img" />
          <div className="product-images-wraper">
            <div className="main-img">
              <img src={MainImg} alt="" />
            </div>
            <div className="sub-imgs">
              <img src={SubImg} alt="" />
              <img src={SubImg} alt="" />
            </div>
          </div>
            <div className='heading'>
                <h3>ADMOS Increase your Energy</h3>
                <a href="/" className="featured-ingredients">Featured Ingredients</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ShopIntro;
