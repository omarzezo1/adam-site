import React, { useEffect, useState } from "react";
import ShopNavbar from "../../../components/shop/ShopNavbar";
import ShopFooter from "../../../components/shop/ShopFooter";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getResetCode } from "../../../redux/actions/authAction";

const ResetCode = () => {
  const [code, setCode] = useState("")

  const dispatch = useDispatch()
  const codeData = useSelector(state=>state.authReducer.sendCode)

  useEffect(()=>{
    if(codeData){
        console.log(codeData)
    }
  },[codeData])

  const handelSubmit = (e)=>{
    e.preventDefault()
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
              <span className="page-name">RESET CODE</span>
            </div>
            <h1 className="page-title">RESET CODE</h1>
          </div>
        </div>
      </section>
      <section className="login-container">
        <div className="title-box">
            <h3>ENTER RESET CODE</h3>
            <p>Reset code sent to your email</p>
        </div>
        <form className="form">
            <div className="field">
                <label htmlFor="email">Reset Code</label>
                <input id="email" value={code} type="email" placeholder="Enter Reset Code" onChange={(e)=>setCode(e.target.value)}/>
            </div>
            <button className="submit" type="submit" onClick={handelSubmit}>Send Code</button>
        </form>
      </section>
      <ShopFooter />
    </div>
  );
};

export default ResetCode