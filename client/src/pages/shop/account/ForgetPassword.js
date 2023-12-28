import React, { useEffect, useState } from "react";
import ShopNavbar from "../../../components/shop/ShopNavbar";
import ShopFooter from "../../../components/shop/ShopFooter";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getResetCode } from "../../../redux/actions/authAction";

const ForgetPassword = () => {
  const [email, setEmail] = useState("")

  const dispatch = useDispatch()
  const codeData = useSelector(state=>state.authReducer.sendCode)

  useEffect(()=>{
    if(codeData){
        console.log(codeData)
    }
  },[codeData])

  const handelSubmit = (e)=>{
    e.preventDefault()
    dispatch(getResetCode({
        email,
    }))
  }

  return (
    <div className="login-register-page">
      <ShopNavbar />
      <section className="page-intro">
        <div className="overlay"></div>
        <div className="rec"></div>
        <div className="rec rec-bottom"></div>
        <div className="container">
          <div className="page-intro-container">
            <div className="page-navigation">
              <Link to="/shop">Home</Link>
              <span>/</span>
              <span className="page-name">FORGET PASSWORD</span>
            </div>
            <h1 className="page-title">FORGET PASSWORD</h1>
          </div>
        </div>
      </section>
      <section className="login-container">
        <div className="title-box">
            <h3>Enter Your Email</h3>
            <p>Email To Send Reset Code</p>
        </div>
        <form className="form">
            <div className="field">
                <label htmlFor="email">Your Email</label>
                <input id="email" value={email} type="email" placeholder="Enter Your E-mail" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <button className="submit" type="submit" onClick={handelSubmit}>Send Code</button>
        </form>
      </section>
      <ShopFooter />
    </div>
  );
};

export default ForgetPassword;
