import styled from "styled-components";
import {selectWorkspaceById, useAppSelector, useAppDispatch, changeActiveWorkspaceId, selectActiveWorkspaceId, RootState, WorkSpaceInterface} from '../../';


interface Props{

}

function ChatsList(props:Props){
    const activeWorkspaceId:string = useAppSelector(selectActiveWorkspaceId);
    const activeWorkspace = useAppSelector((state:RootState)=>selectWorkspaceById(state, activeWorkspaceId));
    return(
        <>
            <MainInfoBlock>
                <WorkspacesTitle>{activeWorkspace[0] === undefined ? "" : activeWorkspace[0].name}</WorkspacesTitle>
                <ChannelTitleContainer>
                    <ChannelsTitle>Channels</ChannelsTitle>
                    <AddChanelIcon src="./images/icons/add.svg" />
                </ChannelTitleContainer>
            </MainInfoBlock>
        </>
    )
}

const ChannelTitleContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 20px;
`
const AddChanelIcon = styled.img`
    cursor: pointer;
`

const WorkspacesTitle = styled.p`
    font-size: 24px;
    text-transform: uppercase;
`

const ChannelsTitle = styled.p`
    font-size: 17px;
    opacity: 0.8;
    
`
const MainInfoBlock = styled.div`
    padding: 10px 10px 20px 10px;
    background-color: #3e103f;
    color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 15%;
`



export default ChatsList;