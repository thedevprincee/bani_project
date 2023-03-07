import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    bankName: "",
    bankLogo: "",
    accountNo: "",
    inFlow: "",
    createdAt: "",
}

const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers:{
        setBank(state, action){
            return state = action.payload
        },
        
    }
})

export const {setBank} = bankSlice.actions
export default bankSlice.reducer