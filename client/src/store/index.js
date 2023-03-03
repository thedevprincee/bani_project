import {configureStore} from '@reduxjs/toolkit'
import authSlice from './features/authSlice'
import modalSlice from './features/modalSlice'
// modal: modalSlice

const store = configureStore({
    reducer: {
        auth: authSlice,
        modal: modalSlice,
    },
})

export default store