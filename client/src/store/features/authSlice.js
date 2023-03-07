import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "./authAPI"

export const loginAsync = createAsyncThunk("login",async(data)=>{
    const response = await authAPI.login(data)
    if(!response.data.error){
        localStorage.setItem("token", response.data.payload.token)
    }
    return response.data
})
export const signupAsync = createAsyncThunk("signup", async(data)=>{
    const response = await authAPI.signup(data)
    if(!response.data.error){
        localStorage.setItem("token", response.data.payload.token)
    }
    return response.data
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        data: {}
    },
    reducers:{
        logout: (state, action) => {
            localStorage.removeItem("token")
            state.data = {}
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(loginAsync.fulfilled, (state, action)=>{
            const {payload} = action;
            state.data = {
                ...payload.payload.user
            }
        }),
        builder.addCase(signupAsync.fulfilled, (state, action)=>{
            const {payload} = action;
            state.data = {
                ...payload.payload.user
            }
        })
    }
})

export const {logout} = authSlice.actions
export const getAuthData = (state) => state.auth.data
export default authSlice.reducer
