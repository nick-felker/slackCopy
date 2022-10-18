import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { ChannelInterface } from "../../../";




const initialState: ChannelInterface = {
   createNewChannelModalWindowFlag: false
}


interface ChangeCreateNewChannelModalWindowFlag{
    flag: boolean;
}


export const channelReducer = createSlice({
    name: 'channel',
    initialState,
    reducers:{
        changeCreateNewChannelModalWindowFlag: (state, payload: PayloadAction<ChangeCreateNewChannelModalWindowFlag>) =>{
            return {...state, ...payload};
        },
    }
})

export const {changeCreateNewChannelModalWindowFlag}  = channelReducer.actions;
export default channelReducer.reducer;