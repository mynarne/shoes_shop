import { configureStore, createSlice } from '@reduxjs/toolkit'
import userReducer from './state/userSlice'
import cartReducer from './state/cartSlice'


export default configureStore({
   reducer: { 
    user: userReducer,
    cart: cartReducer
   }
})