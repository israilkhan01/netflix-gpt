import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState{
    user:Object|null
}
const initialState:userState = {
    user:null
}
const userSlice =  createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser:(state,action:PayloadAction<object>)=>{
            state.user =  action.payload;
        },
        removeUser:(state)=>{
            state.user = null;
        }
    }
});

export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;