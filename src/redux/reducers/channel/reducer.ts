import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { ChannelInterface } from "../../../";




const initialState: ChannelInterface = {
   createNewChannelModalWindowFlag: false,
   channelArray: [
    {workspaceId: "123", channelId: "3423", name: "3242s"}
   ],
   
}


interface ChangeCreateNewChannelModalWindowFlag{
    createNewChannelModalWindowFlag: boolean;
}
interface AddNewChannel{
    workspaceId: string;
    name: string;
    channelId: string;
}


export const channelReducer = createSlice({
    name: 'channel',
    initialState,
    reducers:{
        changeCreateNewChannelModalWindowFlag: (state, {payload}: PayloadAction<ChangeCreateNewChannelModalWindowFlag>) =>{
            return {...state, ...payload}
        },
        addNewChannel: (state, {payload}: PayloadAction<AddNewChannel>) =>{
            state.channelArray.push({name: payload.name, workspaceId: payload.workspaceId, channelId: Math.random().toString(),});
        },
    }
})

export const {changeCreateNewChannelModalWindowFlag, addNewChannel}  = channelReducer.actions;
export default channelReducer.reducer;