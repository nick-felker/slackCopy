import { RootState, WorkSpaceInterface } from "../../../";

export function selectWorkspaceById(state:RootState, id: string){
    state.workspace.workspaces.filter((workspace: WorkSpaceInterface )=> workspace.selfId === id);
}
export function selectWorkspaces(state:RootState){
    return state.workspace.workspaces;
}