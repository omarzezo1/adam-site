import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Sidebar from "../../components/admin/Sidebar";
import { createCoupon } from "../../redux/actions/couponAction";

const AddCoupon = () => {
  const [couponName, setCouponName] = useState("");
  const [discount, setDiscount] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch()
  const couponData = useSelector(state=> state.couponReducer.coupon)

  useEffect(()=>{
    if(couponData){
        if(couponData.status === 201){
          setCouponName("")
          setDiscount("")
          setDate("")
        }
    }
  },[couponData])

  const handelSubmit = (e)=>{
    e.preventDefault()
    dispatch(createCoupon({
        name: couponName,
        expire: date,
        discount: discount
    }))
  }

  return (
    <div className="admin-page">
    <div className="container">
      <div className="admin-page-wraper">
        <Sidebar/>
        <section className="dashboard-container">
          <h3>ADD NEW COUPON</h3>
          <div className="add-wraper">
            <form>
              <input type="text" placeholder="Coupon Name" value={couponName} onChange={(e)=> setCouponName(e.target.value)}/>
              <input type="number" placeholder="Coupon Discount" value={discount} onChange={(e)=> setDiscount(e.target.value)}/>
              <input type="date" value={date} onChange={(e)=> setDate(e.target.value)}/>
              <input className="submit" type="submit" value="Create Coupon" onClick={(e)=> handelSubmit(e)}/>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
  )
}

export default AddCoupon