import { createSlice } from '@reduxjs/toolkit';
import {saveToLocalStorage,loadFromLocalStorage}  from '../localstorage';


const initialState = {
  cartItems:loadFromLocalStorage('cartItems') || [], 
  sweetItems: loadFromLocalStorage('sweetItems') || [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
    state.cartItems.push(action.payload);   
   saveToLocalStorage('cartItems', state.cartItems);
    },
    updateToCart:(state,action)=>{
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.cartItems[index].quantity = quantity;
        state.cartItems[index].totalPrice = state.cartItems[index].prices * quantity;
      }
  
     },

    deleteFromCart: (state, action) => {
      const { item } = action.payload; 
     // console.log(item)
  const itemIndex = state.cartItems.findIndex(
    (cartItem) => cartItem.item === item 
    );
      if (itemIndex !== -1) {
    state.cartItems.splice(itemIndex, 1); 
    saveToLocalStorage('cartItems', state.cartItems); 
     }

    },
    addToSweetItems: (state, action) => {
      state.sweetItems.push(action.payload);
      saveToLocalStorage('sweetItems', state.sweetItems);
    },
    updateToSweetItems: (state, action) => {
      const { id, quantity } = action.payload;
      const index = state.sweetItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.sweetItems[index].quantity = quantity;
        state.sweetItems[index].totalPrice = state.sweetItems[index].prices * quantity;
      }
    },
    deleteFromSweetItems: (state, action) => {
      const { item } = action.payload;
      const itemIndex = state.sweetItems.findIndex((sweetItem) => sweetItem.item === item);
      if (itemIndex !== -1) {
        state.sweetItems.splice(itemIndex, 1);
        saveToLocalStorage('sweetItems', state.sweetItems);
      }
    },
  },
});


export const { addToCart, deleteFromCart, updateToCart, addToSweetItems, deleteFromSweetItems, updateToSweetItems  } = cartSlice.actions;
export default cartSlice.reducer;