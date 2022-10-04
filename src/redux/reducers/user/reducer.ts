import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { UserInterface } from "../../../";





const initialState: UserInterface = {
    authFlag: false,
}


interface AuthUserInterface{
    authFlag: boolean;
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers:{
        authUser: (state, {payload}: PayloadAction<AuthUserInterface>)=>{
            return {...state, ...payload};
        },
    }
})

export const {authUser}  = userReducer.actions;
export default userReducer.reducer;