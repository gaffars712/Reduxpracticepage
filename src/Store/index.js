import { configureStore } from "@reduxjs/toolkit";
import { Userslise } from "./slice/userslice";

const Store = configureStore({
    reducer:{
        user:Userslise.reducer

    }
});
export {Store}