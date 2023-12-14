import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/admin/Sidebar";
import Trash from '../../images/svg/trash-white.svg'
import Discount from '../../images/svg/offer.svg'
import { deleteCoupon, getAllCoupons } from "../../redux/actions/couponAction";
import { Link } from "react-router-dom";

const ManageCoupons = () => {
    const [couponsList, setCouponsList] = useState([])
    const dispatch = useDispatch()
    const couponsData = useSelector(state=> state.couponReducer.coupons)

    //delete coupon
    const handelDeleteCoupon = (id)=>{
        dispatch(deleteCoupon(id))
        window.location.reload()
    } 

    useEffect(()=>{
        dispatch(getAllCoupons())
    },[])

    useEffect(()=>{
        if(couponsData){
            if(couponsData.status === 200){
                if(couponsData.data){
                    setCouponsList(couponsData.data.data)
                }
            }
        }
    },[couponsData])


  return (
    <div className="admin-page">
      <div className="container">
        <div className="admin-page-wraper">
          <Sidebar />
          <section className="dashboard-container">
            <h3>MANAGE COUPONS</h3>
            <div className="add-wraper">
                {
                    couponsList.length > 0 ? (
                        couponsList.map((coupon, index)=>(
                            <div className="coupon-card" key={index}>
                            <img className="trash" src={Trash} alt="delete-coupon" onClick={()=> handelDeleteCoupon(coupon._id)}/>
                            <div className="coupon-img">
                              <img src={Discount} alt="discount"/>
                            </div>
                            <ul className="coupon-details">
                              <li>
                                Coupon Name:
                                <p>{coupon.name}</p>
                            </li>
                            <li>
                                Coupon Discount:
                                <p>{coupon.discount}%</p>
                            </li>
                            <li>
                                Expire Date:
                                <p>{coupon.expire}</p>
                            </li>
                            </ul>
                          </div>
                        ))
                    ):(
                        <p className="no-items">No Coupons Yet
                        <Link to='/admin/add-coupon'>Create First Coupon</Link>
                        </p>
                    )
                }
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ManageCoupons;
