import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState{
    value:Object
}
const initialState:userState = {
    value:{}
}
const userSlice =  createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser:(state,action:PayloadAction<object>)=>{
            state.value =  action.payload;
        },
        removeUser:(state,action:PayloadAction<object>)=>{
            state.value = {} ;
        }
    }
});

export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;