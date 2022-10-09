import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { UserInterface } from "../../../";





const initialState: UserInterface = {
    authFlag: false,
    username: "",
    password: "",
    email: "",
}


interface AuthUserInterface{
    authFlag: boolean;
}

interface ChangeUserDataInterface{
    username: string;
    password: string;
    email: string;
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers:{
        authUser: (state, {payload}: PayloadAction<AuthUserInterface>)=>{
            return {...state, ...payload};
        },
        changeUserData: (state, {payload}: PayloadAction<ChangeUserDataInterface>) =>{
            return {...state, ...payload}
        },
    }
})

export const {authUser, changeUserData}  = userReducer.actions;
export default userReducer.reducer;