import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import creditInfoReducer from "./creditInfoReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    credits: creditInfoReducer
})

export default rootReducer;