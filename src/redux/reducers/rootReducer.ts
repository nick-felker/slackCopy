import { combineReducers } from "@reduxjs/toolkit";
import { userReducer, environmentReducer, workspaceReducer} from "./";
const rootReducer = combineReducers({
    user: userReducer,
    environment: environmentReducer,
    workspace: workspaceReducer,
})

export default rootReducer;