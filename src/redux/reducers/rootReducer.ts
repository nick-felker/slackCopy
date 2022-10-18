import { combineReducers } from "@reduxjs/toolkit";
import { userReducer, environmentReducer, workspaceReducer, channelReducer} from "./";
const rootReducer = combineReducers({
    user: userReducer,
    environment: environmentReducer,
    workspace: workspaceReducer,
    channel: channelReducer,
})

export default rootReducer;