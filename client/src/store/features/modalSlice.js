import { createSlice } from "@reduxjs/toolkit"

const initialState = 'false'

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        setBranchForm(state, action){
            return state = action.payload
        },
        
    }
})

export const {setBranchForm} = modalSlice.actions
export default modalSlice.reducer