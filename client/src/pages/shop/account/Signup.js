import React,{useState, useEffect} from "react";
import ShopNavbar from "../../../components/shop/ShopNavbar";
import ShopFooter from "../../../components/shop/ShopFooter";
import { Link } from "react-router-dom";
import {createUser} from '../../../redux/actions/authAction'
import {useSelector, useDispatch} from 'react-redux'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [phone, setPhone] = useState("")

  const [errorsList, setErrorsList] = useState([])
  const [successMsg, setSuccessMsg] = useState(false)

  const userData = useSelector(state=>state.authReducer.signup)
  const dispatch = useDispatch()

  const handelSubmit = (e)=>{
    e.preventDefault()
    dispatch(createUser({
      name,
      email,
      password,
      passwordConfirm,
      phone,
  }))
  }

  useEffect(()=>{
    if(userData){
      if(userData.status === 201){
        if(userData.data){
          if(userData.data.token){
            setSuccessMsg(true)
          }
        }
      }else if(userData.status === 400){
        if(userData.data){
          setErrorsList(userData.data.errors)
        }
      }
    }
  },[userData])

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
              <span className="page-name">REGISTER</span>
            </div>
            <h1 className="page-title">REGISTER</h1>
          </div>
        </div>
      </section>
      <section className="login-container">
        <div className="title-box">
          <h3>REGISTER TO ADMOS.</h3>
          <p>
            Already have an account? <Link to="/login">Sing In</Link>
          </p>
        </div>
        <div className="msg-box">
          {
            successMsg ? (
              <div className="success">
                <small>Success: </small>
                <p>Successfully Registered</p>
              </div>
            ):null
          }
          {
            errorsList ? (
              errorsList.map((err, index)=>(
                <div className="err" key={index}>
                  <small>Error: </small>
                  <p>{err.msg}</p>
                </div>
              ))
            ):null
          }
        </div>
        <form className="form">
          <div className="field">
            <label htmlFor="username">Your Name</label>
            <input id="username" value={name} type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="field">
            <label htmlFor="email">Your Email</label>
            <input id="email" value={email} type="email" placeholder="Enter Your E-mail" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" value={password} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input id="confirm-password" value={passwordConfirm} type="password" placeholder="Confirm Password" onChange={(e)=>setPasswordConfirm(e.target.value)}/>
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" value={phone} type="number" placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}/>
          </div>
          <button className="submit" type="submit" onClick={handelSubmit}>
            Register
          </button>
        </form>
      </section>
      <ShopFooter />
    </div>
  );
};

export default Signup;
