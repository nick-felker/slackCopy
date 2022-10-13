import styled from "styled-components";



interface Props{

}

function ChatsList(props:Props){
    return(
        <>
            <MainInfoBlock>
                    <div>MainInfoBlock</div>
                    <div>MainInfoBlock</div>
                    <div>MainInfoBlock</div>
                    <div>MainInfoBlock</div>
            </MainInfoBlock>
        </>
    )
}

const MainInfoBlock = styled.div`
    padding: 10px 10px 20px 10px;
    background-color: #3e103f;
    color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 20%;
`



export default ChatsList;