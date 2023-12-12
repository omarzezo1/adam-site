import React, { useState } from 'react'
import Product from "../../images/imgs/product-10.png";
import Remove from "../../images/svg/close-black.svg";

const CartItem = () => {
  const [qty, setQty] = useState(1);
  return (
    <div className="item">
    <div className="item-img">
      <div className="img">
      <img src={Product} alt="item-img" />
      </div>
      <h4>PRO RULE OQ 01</h4>
    </div>
    <div className="item-details">
      <p className="price">$10.99</p>
      <div className="qty">
        <div className="qty-input">
          <span className="incress" onClick={() => setQty(qty + 1)}>
            +
          </span>
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
          <span
            className="decress"
            onClick={() => qty > 1 && setQty(qty - 1)}
          >
            -
          </span>
        </div>
      </div>
      <p className="totla">$10.99</p>
      <img className="remove" src={Remove} alt="remove" />
    </div>
  </div>
  )
}

export default CartItem