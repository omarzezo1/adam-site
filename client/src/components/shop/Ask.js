import React, { useState } from "react";


const Ask = () => {
  const [askIndex, setAskIndex] = useState("");
  return (
    <section className="ask">
      <div className="title-section">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="ask-container">
        <div className="ask-box">
            <h4 id="1" onClick={(e)=> setAskIndex(e.target.id)}>
                What are the key benefits of our supplement?
                <span>{askIndex === "1" ? "-":"+" }</span>
            </h4>
            <div className="answer" style={{display: askIndex === "1" ? "block":"none"}}>
                <p>
                Our supplement is carefully formulated to provide comprehensive support for your health and wellness needs. It combines a unique blend of vitamins, minerals, antioxidants.
                </p>
            </div>
        </div>

        <div className="ask-box">
            <h4 id="2" onClick={(e)=> setAskIndex(e.target.id)}>
                How does our supplement support overall health and wellness ?
                <span>{askIndex === "2" ? "-":"+" }</span>
            </h4>
            <div className="answer" style={{display: askIndex === "2" ? "block":"none"}}>
                <p>
                Our supplement is carefully formulated to provide comprehensive support for your health and wellness needs. It combines a unique blend of vitamins, minerals, antioxidants.
                </p>
            </div>
        </div>

        <div className="ask-box">
            <h4 id="3" onClick={(e)=> setAskIndex(e.target.id)}>
            Can our supplement help with weight management?
            <span>{askIndex === "3" ? "-":"+" }</span>
            </h4>
            <div className="answer" style={{display: askIndex === "3" ? "block":"none"}}>
                <p>
                Our supplement is carefully formulated to provide comprehensive support for your health and wellness needs. It combines a unique blend of vitamins, minerals, antioxidants.
                </p>
            </div>
        </div>

        <div className="ask-box">
            <h4 id="4" onClick={(e)=> setAskIndex(e.target.id)}>
            Is our supplement safe to take with other medications ?
            <span>{askIndex === "4" ? "-":"+" }</span>
            </h4>
            <div className="answer" style={{display: askIndex === "4" ? "block":"none"}}>
                <p>
                Our supplement is carefully formulated to provide comprehensive support for your health and wellness needs. It combines a unique blend of vitamins, minerals, antioxidants.
                </p>
            </div>
        </div>

        <div className="ask-box">
            <h4 id="5" onClick={(e)=> setAskIndex(e.target.id)}>
            How long does it take to see results from our supplement ?
            <span>{askIndex === "5" ? "-":"+" }</span>
            </h4>
            <div className="answer" style={{display: askIndex === "5" ? "block":"none"}}>
                <p>
                Our supplement is carefully formulated to provide comprehensive support for your health and wellness needs. It combines a unique blend of vitamins, minerals, antioxidants.
                </p>
            </div>
        </div>

        <div className="ask-box">
            <h4 id="6" onClick={(e)=> setAskIndex(e.target.id)}>
            What is the science behind the ingredients in our supplement?
            <span>{askIndex === "6" ? "-":"+" }</span>
            </h4>
            <div className="answer" style={{display: askIndex === "6" ? "block":"none"}}>
                <p>
                Our supplement is carefully formulated to provide comprehensive support for your health and wellness needs. It combines a unique blend of vitamins, minerals, antioxidants.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Ask;
