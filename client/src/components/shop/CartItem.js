import React, { useEffect, useState } from 'react'
import Remove from "../../images/svg/close-black.svg";
import serverUrl from '../../api/serverUrl'
import { deleteCartItem, updateQty } from '../../redux/actions/cartAction';

import { useDispatch, useSelector } from 'react-redux';

const CartItem = ({item}) => {
  const [qty, setQty] = useState(item.count);

  const dispatch = useDispatch()

  const handelDeleteCartItem = async(itemId)=>{
    await dispatch(deleteCartItem(itemId))
    window.location.reload()
  }

  //incress qty
  const incressQty = async(id)=>{
    setQty(qty + 1)
    await dispatch(updateQty(id,{
      count: qty + 1,
  }))
  window.location.reload()
  }

  //decress qty
  const decressQty = async(id)=>{
    if(qty > 1){
      setQty(qty - 1)
    }
    await dispatch(updateQty(id,{
      count: qty - 1,
  }))
  window.location.reload()
  }

  return (
    <div className="item">
    <div className="item-img">
      <div className="img">
      <img src={`${serverUrl}/products/${item.product.imageCover}`} alt="item-img" />
      </div>
      <h4>{item.product.title}</h4>
    </div>
    <div className="item-details">
      <p className="price">${Math.ceil(item.price)}</p>
      <div className="qty">
        <div className="qty-input">
          <span className="incress" onClick={()=>incressQty(item._id)}>
            +
          </span>
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
          <span
            className="decress"
            onClick={() => decressQty(item._id)}
          >
            -
          </span>
        </div>
      </div>
      <p className="totla">${Math.ceil(item.price * item.count)}</p>
      <img className="remove" src={Remove} alt="remove" onClick={()=>handelDeleteCartItem(item._id)}/>
    </div>
  </div>
  )
}

export default CartItem