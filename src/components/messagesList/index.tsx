import styled from "styled-components";


interface Props{

}

function MessagesList(props:Props){
    return(
        <>
            <MainChatBlock>
                    <div>MainChatBlock</div>
                    <div>MainChatBlock</div>
                    <div>MainChatBlock</div>
                    <div>MainChatBlock</div>
            </MainChatBlock>
        </>
    )
}

const MainChatBlock = styled.div`
    padding: 10px;
    background-color: gray;
    position: relative;
    width: 80%;
`

export default MessagesList;