import { RootState } from "../../store"

export function selectCreatingWorkSpaceFlag(state:RootState){
    return state.environment.createNewWorkSpaceFlag;
}