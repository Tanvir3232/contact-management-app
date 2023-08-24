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
        },
        deleteContact:(state,action)=>{
           state.contacts = state.contacts.filter(contact=>contact.id !== action.payload); 
        },
        editContact:(state,action)=>{
            const existContact = state.contacts.find(contact=>contact.id == action.payload.id);
            if(existContact){
                existContact.firstName = action.payload.firstName;
                existContact.lastName  = action.payload.lastName;
                existContact.status    = action.payload.status ;
            }
        }
    }
})
export const {showContact,addContact,deleteContact, editContact} = contactSlice.actions;
export default contactSlice.reducer;