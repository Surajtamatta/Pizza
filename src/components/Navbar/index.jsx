import React, {useState} from "react";
import{Menudata,Socialdata} from "../../data/Navbar";
import "../../style/Navbar/Navbarstyle.css";
import {useSelector} from 'react-redux'
const Navbar=()=>{

const cartItems = useSelector((state)=>state.cart.cartItems)


  const[clicked,setClick] = useState(false)
  const handleClick=()=>setClick(!clicked)
  
    return(
      
      <nav className="NavbarItems">
       <h1>Pizza</h1>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          { Menudata.map((item,index)=> {
                if(item.title ==="Cart"){
                  return (
                    <li key={index}>
                    <a href={item.url}  className={item.cName}>{item.title}
                    { 
                      cartItems.length === 0 ? 
                      null
                      :
                      <div className="quantity">{cartItems.length}</div>
                    }
                    </a>
                    </li>
                  )
                
              }
             
              return(
                <li key={index}>
                <a href={item.url}  className={item.cName}>{item.title}</a>

                </li>
              )
              
           
            
                
          })}
        </ul>
        <div className="menu-icons" onClick={handleClick}>
         <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className="nav-menu">
        { Socialdata.map((item,index)=> {
                return(
                  <span key={index}>
                  <li key={index}>
                <a href={item.url} id={item.id}  className={item.cName}> </a>
              </li>
              </span>
                )
              }
            )
          }
       
        </ul>
      </nav>
      
    )
  }



export default Navbar;