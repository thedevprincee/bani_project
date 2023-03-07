import {configureStore} from '@reduxjs/toolkit/'
import { isLoginSlice } from './features/isLoginSlice'
import apiSlice from './features/authSlice'
import modalSlice from './features/modalSlice'
import bankSlice from './features/bankSlice'

const store = configureStore({
    reducer: {
        reducer: isLoginSlice.reducer,
        apiSlice: apiSlice,
        modal: modalSlice,
        bank: bankSlice,
    },
})

export default store