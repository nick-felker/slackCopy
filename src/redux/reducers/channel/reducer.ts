import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { ChannelInterface } from "../../../";




const initialState: ChannelInterface = {
   createNewChannelModalWindowFlag: false,
   channelArray: [
    
   ],
   activeChannelId: "",
}


interface ChangeCreateNewChannelModalWindowFlag{
    createNewChannelModalWindowFlag: boolean;
}
interface AddNewChannel{
    workspaceId: string;
    name: string;
    channelId: string;
}

interface ChangeActiveChannelId{
    activeChannelId: string;
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
        changeActiveChannelId: (state, {payload}: PayloadAction<ChangeActiveChannelId>) =>{
            return {...state, ...payload};
        },
    }
})

export const {changeCreateNewChannelModalWindowFlag, addNewChannel, changeActiveChannelId}  = channelReducer.actions;
export default channelReducer.reducer;