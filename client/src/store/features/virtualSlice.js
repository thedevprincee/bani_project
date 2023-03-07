import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { postVirtual, getVirtual } from './virtualAPI'

export const getVirtualAsync = createAsyncThunk("/virtual", async(data)=>{
    const response = await getVirtual(data)
    // console.log(response.data);
    // return response.data
    if(!response.data.error){
        // const res = response.json()
        return response.data;
    } 
    
})
export const postVirtualAsync = createAsyncThunk("/add_virtual", async(data)=>{
    const response = await postVirtual(data)
    if(!response.data.error){
        console.log(response.data);
    }
})
const initialState = {
    data: [],
    loading: false
}
const virtualSlice = createSlice({
    name: "virtual",
    initialState, 
    reducers: {
        
    },
    extraReducers: (builder)=>{
        builder.addCase(getVirtualAsync.fulfilled, (state, action)=>{
            const {payload} = action;
            state.data = payload
        }),
        builder.addCase(postVirtualAsync.fulfilled, (state, action)=>{
            const {payload} = action;
            
        })
    }
})
export default virtualSlice.reducer
