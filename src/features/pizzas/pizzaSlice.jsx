import {createSlice} from '@reduxjs/toolkit'
import {pizzasdata} from '../../data/Product'
const initialState={
   pizzasdata:pizzasdata,
   
}

const pizzaSlice=createSlice({
    name:'pizzas',
    initialState,
    reducers:{
      
        restocked:(state,action)=>{
            state.pizzasdata +=action.payload
        }
    }
})

export const { addToCart, restocked } = pizzaSlice.actions;
export default pizzaSlice.reducer;
