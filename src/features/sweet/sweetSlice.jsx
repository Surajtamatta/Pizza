import {createSlice} from '@reduxjs/toolkit'
import {sweetdata} from '../../data/Product'
const initialState={
   sweetdata:sweetdata,
}

const sweetSlice=createSlice({
    name:'sweet',
    initialState,
    reducers:{
        restocked:(state,action)=>{
            state.sweetdata +=action.payload
        }
    }
})


export const sweetReducer = sweetSlice.reducer
export const sweetActions=sweetSlice.actions