import React, { useState } from 'react'
import "./LoginSignup.css"
import { assets } from '../Assets/assets'
const LoginSignup = ({setShowLogin}) => {
    const [currState , setCurrState]=useState("Login")
    
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login" ?<></>: <input type="text" placeholder='name' required/>}
                <input type="email" placeholder='email' required />
               
                <input type="password" placeholder='password' required />
                
            </div>
            <button className='login-popup-submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <p>{currState==="Login"?"Don't have an account?":"Already have an account?"} <span onClick={()=>setCurrState(currState==="Login"?"Sign Up":"Login")}>{currState==="Login"?"Sign Up":"Login"}</span></p>
            </div>
        </form>
      
    </div>
  )
}

export default LoginSignup
