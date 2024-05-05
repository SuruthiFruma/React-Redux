import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice';
const appStore=configureStore({
    reducer:{
        cart:cartSlice
    }
})

export default appStore
