import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { MessageArrayInterface } from "../../../";



const initialState:MessageArrayInterface = {
    messagesArray: [
        {message: "", author: "", channelId: ""},
    ],
}


interface AddNewMessage{
    message: string;
    author: string;
    channelId: string;
}

export const messageReducer = createSlice({
    name: 'message',
    initialState,
    reducers:{
       addNewMessage: (state, {payload}:PayloadAction<AddNewMessage>) =>{
            state.messagesArray.push({message: payload.message, author: payload.author, channelId: payload.channelId});
       },
    }
})

export const {addNewMessage}  = messageReducer.actions;
export default messageReducer.reducer;