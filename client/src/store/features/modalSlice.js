import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isModal: 'false',
    modalType: "",
    modalTitle: "",
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        setBranchForm(state, action){
            return state = action.payload
            // return {...state, isModal: action.payload.isModel, 
            //   modalType: action.payload.modalType, 
            //   modelTitle: action.payload.modalTitle
            // }
        },
        
    }
})

export const {setBranchForm} = modalSlice.actions
export default modalSlice.reducer