import styled from "styled-components";
import {
    selectMessagesArray,
    selectActiveChannelId,
    useAppSelector,
    AddNewMessageForm,
    selectChannelsArray,
    MessageElement,
} from '../../';

interface Props{

}


function MessagesList(props:Props){

    interface ChannelArrayInterface{
        workspaceId: string;
        name: string;
        channelId: string;
    }
    interface MessageInterface{
        message: string;
        author: string;
        channelId: string;
    }

    const activeChannelId = useAppSelector(selectActiveChannelId);
    const messagesList = useAppSelector(selectMessagesArray);
    const channelArray = useAppSelector(selectChannelsArray);

    return(
        <>
            <MainChatBlock>
                <ChatTitleContainer>
                    {
                        channelArray.map((elem:ChannelArrayInterface)=>{
                            if(elem.channelId === activeChannelId){
                                return(
                                    <ChatTitleText>#{elem.name}</ChatTitleText>
                                )
                            }
                        })
                    }
                </ChatTitleContainer>
                <MessagesContainer>
                    {messagesList.map((elem:MessageInterface)=>{
                        if(elem.channelId === activeChannelId){
                            return(
                                <MessageElement author={elem.author} message={elem.message}/>
                            )
                        }
                   })}
                </MessagesContainer>
                <MessageSendContainer>
                    <AddNewMessageForm/>
                </MessageSendContainer>
            </MainChatBlock>
        </>
    )
}

const ChatTitleContainer = styled.div`
    border-bottom: 1px solid #ebe6e6;
    padding: 10px 20px;
`
const ChatTitleText = styled.p`
    font-weight: bold;
`

const MessagesContainer = styled.div`
    padding: 20px;
`

const MessageSendContainer = styled.div`

`

const Message = styled.p`

`


const MainChatBlock = styled.div`
    position: relative;
    width: 80%;
`

export default MessagesList;