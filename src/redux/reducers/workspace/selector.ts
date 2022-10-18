import { RootState, WorkSpaceInterface } from "../../../";

export function selectWorkspaceById(state:RootState, id: string){
    return state.workspace.workspaces.filter((workspace: WorkSpaceInterface )=> workspace.selfId === id);
}
export function selectWorkspaces(state:RootState){
    return state.workspace.workspaces;
}
export function selectActiveWorkspaceId(state:RootState){
    return state.workspace.activeWorkspaceId;
}