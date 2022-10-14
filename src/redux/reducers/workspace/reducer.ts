import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { WorkSpaceInterface } from "../../../";



interface Workspaces{
    workspaces: WorkSpaceInterface[];
    activeWorkspaceId: string;
}



const initialState: Workspaces = {
    workspaces: [
        {bgColor: "#d7d9db", name: "cool", selfId: Math.random().toString(),}
    ],
    activeWorkspaceId: "",
}


interface ChangeActiveWorkspaceId{
    activeWorkspaceId: string;
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
        changeActiveWorkspaceId: (state, {payload}: PayloadAction<ChangeActiveWorkspaceId>) =>{
            return {...state, ...payload};
        },
    }
})

export const {addNewWorkspace, changeActiveWorkspaceId}  = workspaceReducer.actions;
export default workspaceReducer.reducer;