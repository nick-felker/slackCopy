import styled from "styled-components";


interface Props{
    author: string;
    message: string;
}

function MessageElement(props:Props){
    return(
        <>
            <ExternalWrapper>
                <AuthorText>{props.author}</AuthorText>
                <MessageText>{props.message}</MessageText>
            </ExternalWrapper>
        </>
    )
}

const ExternalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-left: 30px;
`
const AuthorText = styled.p`
    font-weight: bold;
    padding-bottom: 5px;
`
const MessageText = styled.p`

`


export default MessageElement;