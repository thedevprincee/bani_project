import {configureStore} from '@reduxjs/toolkit'
import {authSlice} from './features/authSlice'
// import modalSlice from './features/modalSlice'
// modal: modalSlice

const store = configureStore({
    reducer: authSlice.reducer
})

export default store