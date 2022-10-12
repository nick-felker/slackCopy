import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { EnvironmentInterface } from "../../../";



const initialState: EnvironmentInterface = {
    createNewWorkSpaceFlag: false,
}

interface CreatingWorkSpaceFlag{
    createNewWorkSpaceFlag: boolean;
}


export const environmentReducer = createSlice({
    name: 'environment',
    initialState,
    reducers:{
        changeCreatingWorkSpaceFlag: (state, {payload}: PayloadAction<CreatingWorkSpaceFlag>)=>{
            return {...state, ...payload};
        },
    }
})

export const {changeCreatingWorkSpaceFlag}  = environmentReducer.actions;
export default environmentReducer.reducer;