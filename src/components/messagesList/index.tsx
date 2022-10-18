import styled from "styled-components";
import {
    selectMessagesArray,
    selectActiveChannelId,
    useAppSelector,
    AddNewMessageForm,
} from '../../';

interface Props{

}

function MessagesList(props:Props){
    interface MessageInterface{
        message: string;
        author: string;
        channelId: string;
    }

    const activeChannelId = useAppSelector(selectActiveChannelId);
    const messagesList = useAppSelector(selectMessagesArray);
    return(
        <>
            <MainChatBlock>
                    <MessageSendContainer>
                        <AddNewMessageForm/>
                    </MessageSendContainer>
                   {messagesList.map((elem:MessageInterface)=>{
                        if(elem.channelId === activeChannelId){
                            return(
                                <Message>
                                    {elem.message}
                                </Message>
                            )
                        }
                   })}
            </MainChatBlock>
        </>
    )
}

const MessageSendContainer = styled.div`

`

const Message = styled.p`

`


const MainChatBlock = styled.div`
    padding: 10px;
    background-color: gray;
    position: relative;
    width: 80%;
`

export default MessagesList;