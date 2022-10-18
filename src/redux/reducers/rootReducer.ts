import { combineReducers } from "@reduxjs/toolkit";
import { userReducer, environmentReducer, workspaceReducer, channelReducer, messageReducer} from "./";
const rootReducer = combineReducers({
    user: userReducer,
    environment: environmentReducer,
    workspace: workspaceReducer,
    channel: channelReducer,
    message: messageReducer,
})

export default rootReducer;