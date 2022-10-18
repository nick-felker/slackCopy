import { RootState } from "../../store";

export function selectCreatingNewChannelWindowFlag(state:RootState){
    return state.channel.createNewChannelModalWindowFlag;
}