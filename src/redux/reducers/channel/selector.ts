import { RootState } from "../../store";

export function selectCreatingNewChannelWindowFlag(state:RootState){
    return state.channel.createNewChannelModalWindowFlag;
}
export function selectChannelsArray(state:RootState){
    return state.channel.channelArray;
}