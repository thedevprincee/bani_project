import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { getBranch, postBranch } from './branchAPI'

export const postBranchAsync = createAsyncThunk("/addbranch", async(data)=>{
    const response = await postBranch(data)
    console.log(response.data);
    if(!response.data.error){
        // const res = JSON.stringify(response.data)
        // return res
    }
})
export const getBranchAsync = createAsyncThunk("/", async(data)=>{
    const response = await getBranch(data)
    if(!response.data.error){
        return response.data
    }
})
const initialState = {
    data: {}
} 
export const branchSlice = createSlice({
    name: "branch",
    initialState,
    reducers: {

    },
    extraReducers: (builder)=>{
        builder.addCase(getBranchAsync.fulfilled, (state, action)=>{
            const {payload} = action
            state.data.push(payload)
        }),
        builder.addCase(postBranchAsync.fulfilled, (state, action)=>{
            const {payload} = action
            // state.data =  payload
            // state.data = {
            //     ...payload.payload
            // }
        })
    }
})

export default branchSlice.reducer