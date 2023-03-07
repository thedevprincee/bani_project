import {configureStore} from '@reduxjs/toolkit/'
import { isLoginSlice } from './features/isLoginSlice'
import apiSlice from './features/authSlice'
import modalSlice from './features/modalSlice'
import virtualSlice from './features/virtualSlice'
import branchSlice from './features/branchSlice'

const store = configureStore({
    reducer: {
        reducer: isLoginSlice.reducer,
        apiSlice: apiSlice,
        modal: modalSlice,
        virtual: virtualSlice,
        branch: branchSlice
    },
})

export default store