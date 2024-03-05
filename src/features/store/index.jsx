import { configureStore} from '@reduxjs/toolkit'
import {saveToLocalStorage } from '../localstorage'
import  pizzaSlice  from '../pizzas/pizzaSlice'
import { sweetReducer } from '../sweet/sweetSlice'
import cartSlice from '../carts/cartSlice'

export const store = configureStore({
  reducer: {
    pizzas:pizzaSlice,
    sweet:sweetReducer,
    cart:cartSlice

  },
   applyMiddleware:(buildGetDefaultMiddleware)=>buildGetDefaultMiddleware().concat(saveToLocalStorage ),
})

