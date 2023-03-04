import { createSlice } from '@reduxjs/toolkit';

export const isLoginSlice = createSlice({
    name: 'isLogin',
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
export const {setLoginFalse, setLoginTrue} = isLoginSlice.actions