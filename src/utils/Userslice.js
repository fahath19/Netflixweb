import { createSlice } from "@reduxjs/toolkit";

let Userslice=createSlice({
        name:'userdata',
        initialState:null,

        reducers:{

            adduser(state,action){
                return action.payload;
            },
            removeuser:(state,action)=>{
                return null
            }
        }
})

export const {adduser,removeuser}=Userslice.actions;
export default Userslice.reducer;