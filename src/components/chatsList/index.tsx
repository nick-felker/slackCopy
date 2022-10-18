import styled from "styled-components";
import {selectWorkspaceById, 
    useAppSelector, 
    useAppDispatch, 
    changeActiveWorkspaceId, 
    selectActiveWorkspaceId, 
    RootState, 
    WorkSpaceInterface, 
    selectCreatingNewChannelWindowFlag,
    AddNewChannelForm,
    changeCreateNewChannelModalWindowFlag,
    selectChannelsArray,
    changeActiveChannelId,
} from '../../';


interface Props{

}

function ChatsList(props:Props){
    interface ChannelArrayInterface{
        workspaceId: string;
        name: string;
        channelId: string;
    }
    const dispatch = useAppDispatch();
    const channelsArray = useAppSelector(selectChannelsArray);
    const activeWorkspaceId:string = useAppSelector(selectActiveWorkspaceId);
    const activeWorkspace = useAppSelector((state:RootState)=>selectWorkspaceById(state, activeWorkspaceId));
    return(
        <>  
            <MainInfoBlock>
                <WorkspacesTitle>{activeWorkspace[0] === undefined ? "" : activeWorkspace[0].name}</WorkspacesTitle>
                {activeWorkspace[0] === undefined ? null : 
                    <>
                        <ChannelTitleContainer>
                            <ChannelsTitle>Channels</ChannelsTitle>
                            <AddChanelIcon onClick={()=>dispatch(changeCreateNewChannelModalWindowFlag({createNewChannelModalWindowFlag: true}))} src="./images/icons/add.svg" />
                        </ChannelTitleContainer>
                        <ChannelsList>
                            {channelsArray.map((elem:ChannelArrayInterface)=>{
                                if(elem.workspaceId === activeWorkspaceId){
                                    return(
                                        <>
                                            <Channel onClick={()=>dispatch(changeActiveChannelId({activeChannelId: elem.channelId}))}>{elem.name}</Channel>
                                        </>
                                    )
                                }
                            })}
                        </ChannelsList>
                    
                    </>
                }
            </MainInfoBlock>
        </>
    )
}

const ChannelsList = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
`
const Channel = styled.p`
    font-size: 16px;
    padding-left: 10px;
    margin-bottom: 10px;
    :last-child{
        margin-bottom: 0px;
    }
    cursor: pointer;
    :hover{
        background-color: red;
        border-radius: 5px;
        transition: 0.5s;
    }
`

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