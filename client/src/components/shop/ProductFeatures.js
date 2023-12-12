import React from "react";
import Product from "../../images/imgs/banner-img-2.png";
import Shap from "../../images/imgs/banner-shape-01.png";
import Drugs from '../../images/svg/drugs.svg'
import Tube from '../../images/svg/test-tube.svg'

const ProductFeatures = () => {
  return (
    <section className="product-features">
    <div className="product-features-container">
      <div className="section-title">
        <h3>Formulars Features</h3>
      </div>
      <div className="product-features-wraper">
        <ul className="left">
          <li>
            <div className="shap-icon">
              <span>
                <img src={Drugs} alt="drug"/>
              </span>
              <h6>Natural Ingredients</h6>
            </div>
          </li>
          <li>
            <div className="shap-icon">
              <span>
                <img src={Tube} alt="drug"/>
              </span>
              <h6>Natural Ingredients</h6>
            </div>
          </li>
          <li>
            <div className="shap-icon">
              <span>
                <img src={Drugs} alt="drug"/>
              </span>
              <h6>Natural Ingredients</h6>
            </div>
          </li>
        </ul>
        <div className="product-img">
          <img className="top-shap" src={Shap} alt="top-shap" />
          <img className="bottom-shap" src={Shap} alt="bottom-shap" />
          <img className="img-product" src={Product} alt="product-img" />
        </div>
        <ul className="right">
          <li>
            <div className="shap-icon">
              <span>
                <img src={Drugs} alt="drug"/>
              </span>
              <h6>Natural Ingredients</h6>
            </div>
          </li>
          <li>
            <div className="shap-icon">
              <span>
                <img src={Tube} alt="drug"/>
              </span>
              <h6>Natural Ingredients</h6>
            </div>
          </li>
          <li>
            <div className="shap-icon">
              <span>
                <img src={Drugs} alt="drug"/>
              </span>
              <h6>Natural Ingredients</h6>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
