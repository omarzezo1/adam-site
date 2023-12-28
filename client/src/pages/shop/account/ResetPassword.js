import React, { useEffect, useState } from "react";
import ShopNavbar from "../../../components/shop/ShopNavbar";
import ShopFooter from "../../../components/shop/ShopFooter";
import { Link, useNavigate } from "react-router-dom";
import {loginUser} from '../../../redux/actions/authAction'
import {useSelector, useDispatch} from 'react-redux'

const ResetPassword = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [errorsList, setErrorsList] = useState([])
  const [errorMsg, setErrorMsg] = useState("")
  const [hideMsg, setHideMsg] = useState(true)

  const loginUserData = useSelector(state=>state.authReducer.loginUser)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handelSubmit = (e)=>{
    e.preventDefault()
    dispatch(loginUser({
      email,
      password,
 }))
  }

  useEffect(()=>{
    if(loginUserData){
      if(loginUserData.status === 500){
        if(loginUserData.data){
          setErrorMsg(loginUserData.data.message)
          setTimeout(()=>{
            setHideMsg(false)
            window.location.reload()
          },3000)
        }
      }else if(loginUserData.status === 400){
        if(loginUserData.data){
          setErrorsList(loginUserData.data.errors)
          setTimeout(()=>{
            setHideMsg(false)
            window.location.reload()
          },3000)
        }
      }else if(loginUserData.status === 200){
        if(loginUserData.data){
          if(loginUserData.data.token)
          localStorage.setItem("userToken", loginUserData.data.token)
          navigate('/shop')
        }
      }
    }
  },[loginUserData])

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
              <span className="page-name">RESET PASSWORD</span>
            </div>
            <h1 className="page-title">RESET PASSWORD</h1>
          </div>
        </div>
      </section>
      <section className="login-container">
        <div className="title-box">
            <h3>RESET PASSWORD</h3>
            <p>Reset Password For Your Email</p>
        </div>
        <div className="msg-box">
          {
            errorMsg ? (
              <div className="err" style={{display: hideMsg ? "flex":"none"}}>
                <small>Error: </small>
                <p>{errorMsg}</p>
              </div>
            ):null
          }
          {
            errorsList ? (
              errorsList.map((err, index)=>(
                <div className="err" key={index}  style={{display: hideMsg ? "flex":"none"}}>
                  <small>Error: </small>
                  <p>{err.msg}</p>
                </div>
              ))
            ):null
          }
        </div>
        <form className="form">
            <div className="field">
                <label htmlFor="email">Your Email</label>
                <input id="email" value={email} type="email" placeholder="Enter Your E-mail" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="field">
                <label htmlFor="password">New Password</label>
                <input id="password" value={password} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button className="submit" type="submit" onClick={handelSubmit}>Login</button>
        </form>
      </section>
      <ShopFooter />
    </div>
  );
};

export default ResetPassword