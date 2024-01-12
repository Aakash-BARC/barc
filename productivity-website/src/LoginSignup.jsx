import React, { useState } from 'react'
import './LoginSignup.css'
function LoginSignup() {
  const [action, setAction] = useState("Sign up");
  return (
    <div className='container'>
    <div className="header">
    <h3>XYZ WEBSITE</h3>
    <div className="text">{action}</div>
    </div>
    <div className="inputs">
      {action==='Sign In' ? <div></div>:<div className='input'>
   
   <input type='text' placeholder='Enter Name...'/>
 </div>}
    <div className='input'>

    <input type='email' placeholder='Enter Email...'/>
    </div>
    <div className='input'>

    <input type='password' placeholder='Enter Password...'/>
    </div>
    </div>
    <div className="submit-container">
      <div className="submit" onClick={()=>{setAction('Sign Up')}}>Sign up</div>
      <div className="submit" onClick={()=>{setAction('Sign In')}}>Sign In</div> 
    </div>
    {action==="Sign Up"?<div></div>:     <div className="forgot-pass">Forgot Password? <span>click here</span></div>
}
    </div>
  )
}

export default LoginSignup;