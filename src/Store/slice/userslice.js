import { createSlice } from "@reduxjs/toolkit";

const Userslise = createSlice({
    name:'User',
    initialState:[],
    reducers:{
        addusers(state,action){
            state.push(action.payload)
        },
        deleteuser(state,action){
            state.splice( action.payload , 1)
        },
        alldeleteuser(state,action){
              return  state = []
                }
    }
} 
);

export const {addusers , deleteuser,alldeleteuser} = Userslise.actions;
export {Userslise}