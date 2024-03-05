
import React, { useState } from "react";
import "../../../style/Poduct/StoreStyle.css"
import {useDispatch} from "react-redux"
import { addToCart } from "../../../features/carts/cartSlice";

const Pizza = ({Items}) => {


  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);


 
const dispatch=useDispatch()
const addToCartHandler=()=>{
  alert("The items are successfully added to carts")
  const cartItems = {
    id:Items.id,
    name: Items.name,
    varients:varient,
    prices: Items?.prices[0][varient] * quantity,
    quantity:quantity,
    category:Items.category,
    image:Items.image,
    description:Items.description
  }
  dispatch(addToCart(cartItems))
}


const [show, setShow] = useState(false);
const closeModal=()=> setShow(false)
const openModal=()=>setShow(true)

const Modal=()=>{
  return(
    <>
    <div className="Modal" >
        <div className="modalheader">
        <img src={Items.image} alt="" className="Image"/>     
        </div>
        <div className="modalbody">
          <h1>{Items.name}</h1>
          <p>{Items.description}</p>
          <button onClick={closeModal}>close</button> 
        </div>
      </div>
      </>
  )
}
  return (  
    <>
      <div className="Card" >
          <img src={Items.image} className="Image" alt="" onClick={openModal}/>
          
        <div className="cardInfo">
          <h1>{Items.name}</h1>
          
          <div className="varient">
          
              <div>
                <h6>Varients</h6>
                <select value={varient} onChange={(e) => setVarient(e.target.value)} >
                  {Items.varients.map((varient) => (
                    <option key={varient}>{varient}</option>
                  ))}
              </select>
              </div>
              <div>
                <h6>Quantity</h6>
                <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                  {[...Array(5).keys()].map((v, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
          </div>
            <button className="OrderButton" onClick={()=>addToCartHandler()}>Add to Cart</button>
        </div>
      </div>

      {show && <Modal/>}
      
      
      </>
  
  );
};

export default Pizza;