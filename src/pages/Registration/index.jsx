import { useState } from "react";
import React from "react";
import "./RegisterStyle.css"
import { Link } from "react-router-dom";

const Registration = () =>{
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [confirmpassword,setconfirmpassword]=useState('')

    const registerhandler=()=>{
        if(password !==confirmpassword){
            alert('Password do not match')
        }else{
            const user ={name,email,password}

            alert("Register Successfull")
            console.log(user)
        }
   }
    return(
    <div className="RegContainer">
    <div className="wrapper">
    <h2>Registration</h2>
    <form action="#">
      <div className="input-box">
        <input type="text" placeholder="Enter your name" value={name} onChange={e => setname(e.target.value)} required/>
      </div>
      <div className="input-box">
        <input type="email" placeholder="Enter your email" value={email} onChange={e => setemail(e.target.value)} required/>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Create password" value={password} onChange={e => setpassword(e.target.value)} required/>
      </div>
      <div className="input-box" >
        <input type="password" placeholder="Confirm password" value={confirmpassword} onChange={e => setconfirmpassword(e.target.value)} required/>
      </div>
      <div className="policy">
        <input type="checkbox"/>
        <h3>I accept all terms & condition</h3>
      </div>
      <div className="input-box button">
        <input type="Submit" onClick={registerhandler} value="Register Now"/>
      </div>
      <div className="text">
        <h3>Already have an account? <Link to={'/Login'}>Login</Link></h3>
      </div>
    </form>
  </div>
  </div>
    );
}
export default Registration