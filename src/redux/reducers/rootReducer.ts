import { combineReducers } from "@reduxjs/toolkit";
import { userReducer, environmentReducer } from "./";

const rootReducer = combineReducers({
    user: userReducer,
    environment: environmentReducer,
})

export default rootReducer;