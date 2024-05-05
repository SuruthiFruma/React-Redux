import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice';
const appStore=configureStore({
    reducer:{
        car:cartSlice
    }
})

export default appStore
