import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { createLogger } from 'redux-logger'
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";

const logger = createLogger();

const _applyMiddleware = composeWithDevTools(
    applyMiddleware(
        thunk,
        logger
    )
)

const store = createStore(
    rootReducer,
    _applyMiddleware
)

export default store