import { createSlice } from "@reduxjs/toolkit";
const initialContacts = {
    contacts:[]
}
export const contactSlice = createSlice({
    name:"contacts",
    initialState:initialContacts,
    reducers:{
        showContact:(state)=>state,
        addContact:(state,action)=>{
            state.contacts.push(action.payload);
        }
    }
})
export const {showContact,addContact} = contactSlice.actions;
export default contactSlice.reducer;