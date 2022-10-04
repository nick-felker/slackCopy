import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./";

const rootReducer = combineReducers({
    user: userReducer,
})

export default rootReducer;