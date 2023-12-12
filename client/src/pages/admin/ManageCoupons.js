import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../utilities/Sidebar";
import Trash from '../../images/svg/trash-white.svg'
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
                    console.log(couponsList)
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
            <h3>إدارة الكوبونات</h3>
            <div className="add-wraper">
                {
                    couponsList.length > 0 ? (
                        couponsList.map((coupon, index)=>(
                            <div className="coupon-card" key={index}>
                            <img className="trash" src={Trash} alt="delete-coupon" onClick={()=> handelDeleteCoupon(coupon._id)}/>
                            <ul className="coupon-details">
                              <li>
                              <p>{coupon.name}</p>
                                :اسم الكوبون
                            </li>
                            <li>
                              <p>{coupon.discount}%</p>
                                :نسبة الخصم
                            </li>
                            <li>
                              <p>{coupon.expire}</p>
                                :تاريخ الإنتهاء
                            </li>
                            </ul>
                            <div className="coupon-img"></div>
                          </div>
                        ))
                    ):(
                        <p className="no-items">لم يتم إنشاء كوبونات خصم حتى الأن
                        <Link to='/admin/add-coupon'>إنشاء كوبون</Link>
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
