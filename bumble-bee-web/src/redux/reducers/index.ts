import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import creditInfoReducer from "./creditInfoReducer";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    credits: creditInfoReducer,
    users: UserReducer
})

export default rootReducer;