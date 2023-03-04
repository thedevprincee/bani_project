import {configureStore} from '@reduxjs/toolkit/'
import { isLoginSlice } from './features/isLoginSlice'
import apiSlice from './features/authSlice'

const store = configureStore({
    reducer: {
        reducer: isLoginSlice.reducer,
        apiSlice: apiSlice
    },
   
})

export default store