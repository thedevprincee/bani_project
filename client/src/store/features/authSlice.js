import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState:{isLogin  : true},
    reducers:{
        setLoginFalse(state, action){
            state.isLogin = false
        },
        setLoginTrue(state, action){
            state.isLogin = true
        },
    }
})
export const actions = authSlice.actions
