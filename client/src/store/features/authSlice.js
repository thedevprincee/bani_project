import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState:{isLogin  : false},
    reducers:{
        setLoginFalse(state, action){
            state.isLogin = false
        },
        setLoginTrue(state, action){
            state.isLogin = true
        },
    }
})
export const {setLoginFalse, setLoginTrue} = authSlice.actions
export default authSlice.reducer
