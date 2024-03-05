import React,{ useState} from "react";
import "./LoginStyle.css"
import { Link } from "react-router-dom";
const Login = () =>{
   const [email,setemail] = useState('')
   const [password,setpassword] = useState('')
   const Loginhandler =()=>{
    //const user ={email,password}

   }

   return(
        <div className="LoginWrapper">
        <div className="center">
       
         <div className="Logincontainer">
            <div className="text">
               Login Form
            </div>
            <form action="#">
               <div className="data">
                  <label>Email or Phone</label>
                  <input type="email"  value={email} onChange={(e)=>setemail(e.target.value)} required />
               </div>
               <div className="data">
                  <label>Password</label>
                  <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}  required/>
               </div>
               <div className="forgot-pass">
                  <Link to={''}>Forgot Password?</Link>
               </div>
               <div className="btn">
                  <div className="inner"></div>
                  <button onClick={
                     Loginhandler
                     }>login</button>
               </div>
               <div className="signup-link">
                  NOT REGISTER? <Link to={'/Registration'}>Signup now</Link>
               </div>
            </form>
         </div>
      </div>
      </div>
    );
}
export default Login