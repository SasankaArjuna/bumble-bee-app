import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import creditInfoReducer from "./creditInfoReducer";
import UserReducer from "./userReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    credits: creditInfoReducer,
    users: UserReducer,
    categories: categoryReducer
})

export default rootReducer;