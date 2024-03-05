import React, { useState } from "react";
import "../../style/Cart/cartStyle.css";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { deleteFromCart } from "../../features/carts/cartSlice";
import { updateToCart, deleteFromSweetItems ,updateToSweetItems} from "../../features/carts/cartSlice";
import Pizzaman from "../../images/PizzaMan.png";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems); // Access cart items from cartSlice
  const sweetItems = useSelector((state) => state.cart.sweetItems);
console.log(cartItems)
console.log(sweetItems)
  const subTotal = (cartItems.reduce(
    (total, cartItem) => total + cartItem.prices * cartItem.quantity,
    0
  )) + (sweetItems.reduce(
    (total, sweetItem) => total + sweetItem.prices * sweetItem.quantity,
    0
  ))

  const handleIncrease = (item) => {
    const updatedQuantity = Math.min(item.quantity + 1, 5);
    dispatch(updateToCart({ ...item, quantity: updatedQuantity }));
    dispatch(updateToSweetItems({ ...item, quantity: updatedQuantity }));
  };


  const handleDecrease = (item) => {
    const updatedQuantity = Math.max(item.quantity - 1, 1);
    dispatch(updateToCart({ ...item, quantity: updatedQuantity }));
    dispatch(updateToSweetItems({ ...item, quantity: updatedQuantity }));
  };


  const handleRemoveCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  const handleRemoveSweet = (item) => {
    dispatch(deleteFromSweetItems(item));
  };

  const [show, setShow] = useState(false);
  const closeModal=()=> setShow(false)
  const openModal=()=>setShow(true)
  
  const Modal=()=>{
    const totalQuantity =
  cartItems.reduce((total, cartItem) => total + parseInt(cartItem.quantity), 0) +
  sweetItems.reduce((total, sweetItem) => total + parseInt(sweetItem.quantity), 0);
    console.log("Total Quantity:", totalQuantity)
      const [success, setSuccess] = useState(false);
    return (
      <>
   
       
      <div className="cartModal" >
      { success ? (
          <div className="confirmMessage">
            <img src={Pizzaman} alt="pizzaman"  />
            <h1 style={{ fontFamily: "Open Sans Condensed", fontSize: 30,color:'  rgba(85, 61, 65, 0.901)' }}>
              We have received your order, Thank you
            </h1>
            <h1 style={{ fontFamily: "Comfortaa", color:'  rgb(99, 91, 93)'}}>
              Order #{Math.round(Math.random() * 100000)}
            </h1>
            <p style={{ fontFamily: "Indie Flower", fontSize: 15 ,color:'  rgb(56, 52, 53)'}}>
              Will be ready in 20-30 min.
            </p>
            <button className="modelbutton" onClick={closeModal} > Close</button>
          </div>
          )
     :
      <div  className="checkout">
        <div className="cartItems">
            <div className="cart">
      {  cartItems.map((item, index) => {
        return(
          <div className="cartmodel-wrapper" key={index}>
         <div className="rowOne" key={index}>
                    <img className="cartimage" src={item.image} alt="" />
                    <div className="textOne">
                      <h2>{item.name} </h2>
                      <h2>Variant: {item.varients}</h2>
                    </div>
                      <h2>Price: {item.prices * item.quantity}</h2>
                      <h2>
                        Quantity:&nbsp;
                        {item.quantity} &nbsp;
                      </h2>
                    
                  </div>
          </div>
            )})}
             </div>
             </div>
            <div className="modelrow">
            <div className="rowTwo">
            <h2>Payment Info</h2>
            <h2>Sub Total</h2>
            <h2>$: {subTotal}/-</h2>
            <h2>Total quantity: {totalQuantity}</h2>
            </div>
            <div className="modelwrapper">
                <button className="modelbutton" onClick={closeModal} > Cancel</button>
                <button className="modelbutton"  onClick={() => setSuccess(true)} > Order</button>
            </div>
         
          </div>
      </div>
       }
        </div>
  
        </>
    )
  }




  return (
       <div className="cartContainer">
      <div className="cartWrapper">
        <div className="table">
          <h1 className="title">Cart</h1>
          <div className="cartItems">
            <div className="cart">
              {cartItems.map((item, index) => (
                <div className="rowOne" key={index}>
                  <img className="cartimage" src={item.image} alt="" />
                  <div className="textOne">
                    <h2>{item.name} </h2>
                    <h2>Variant: {item.variants}</h2>
                  </div>
                  <div className="textTwo">
                    <h2>Price: {item.prices * item.quantity}</h2>
                    <h2>
                      Quantity:&nbsp;
                      <FaMinusCircle
                        className="text-minus"
                        onClick={() => handleDecrease(item)}
                      />{" "}
                      &nbsp;
                      {item.quantity} &nbsp;
                      <FaPlusCircle
                        className="text-plus"
                        onClick={() => handleIncrease(item)}
                      />
                    </h2>
                  </div>
                  <FaTrash
                    className="text-danger"
                    onClick={() => handleRemoveCart(item)}
                  />
                </div>
              ))}
            </div>
            <div className="cart">
              {sweetItems.map((item, index) => (
                <div className="rowOne" key={index}>
                  <img className="cartimage" src={item.image} alt="" />
                  <div className="textOne">
                    <h2>{item.name} </h2>
                    <h2>Variant: {item.variants}</h2>
                  </div>
                  <div className="textTwo">
                    <h2>Price: {item.prices * item.quantity}</h2>
                    <h2>
                      Quantity:&nbsp;
                      <FaMinusCircle
                        className="text-minus"
                        onClick={() => handleDecrease(item)}
                      />{" "}
                      &nbsp;
                      {item.quantity} &nbsp;
                      <FaPlusCircle
                        className="text-plus"
                        onClick={() => handleIncrease(item)}
                      />
                    </h2>
                  </div>
                  <FaTrash
                    className="text-danger"
                    onClick={() => handleRemoveSweet(item)}
                  />
                </div>
              ))}
            </div>
          </div>
            <div className="rowTwo">
            <h2>Payment Info</h2>
            <h2>Sub Total</h2>
            <h2>$: {subTotal}/-</h2>
            <button className="button" onClick={()=>{openModal()}} > CheckOut</button>
          </div>
          {show && <Modal/>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
