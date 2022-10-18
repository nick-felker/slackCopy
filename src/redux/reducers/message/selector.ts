import { RootState } from "../../store";

export function selectMessagesArray(state:RootState){
    return state.message.messagesArray;
}