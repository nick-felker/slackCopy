import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { WorkSpaceInterface } from "../../../";



interface Workspaces{
    workspaces: WorkSpaceInterface[];
}



const initialState: Workspaces = {
    workspaces: [
        {bgColor: "#d7d9db", name: "cool", selfId: Math.random().toString(),}
    ]
}

interface AddNewWorkspace{
    bgColor: string;
    name: string;
}


export const workspaceReducer = createSlice({
    name: 'workspace',
    initialState,
    reducers:{
        addNewWorkspace: (state, {payload}: PayloadAction<AddNewWorkspace>)=>{
            state.workspaces.push({selfId: Math.random().toString(), name: payload.name, bgColor: payload.bgColor})
        },
    }
})

export const {addNewWorkspace}  = workspaceReducer.actions;
export default workspaceReducer.reducer;