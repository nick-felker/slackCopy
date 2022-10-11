import styled from "styled-components";


interface Props{

}

function AppPage(props:Props){
    return(
        <>
            <ExternalWrapper>
                <WorkspacesBlock>
                    <div>Workspa</div>
                    <div>Workspa</div>
                    <div>Workspa</div>
                    <div>Workspa</div>
                </WorkspacesBlock>
                <MainInfoBlock>
                    <div>MainInfoBlock</div>
                    <div>MainInfoBlock</div>
                    <div>MainInfoBlock</div>
                    <div>MainInfoBlock</div>
                </MainInfoBlock>
                <MainChatBlock>
                    <div>MainChatBlock</div>
                    <div>MainChatBlock</div>
                    <div>MainChatBlock</div>
                    <div>MainChatBlock</div>
                </MainChatBlock>

            </ExternalWrapper>
        </>
    )
}


const ExternalWrapper = styled.div`
    display: flex;
`

const WorkspacesBlock = styled.div`
    padding: 10px;
    background-color: #5736ff;
    border-right: 1px solid white;
    position: relative;
    width: 5%;
`

const MainInfoBlock = styled.div`
    padding: 10px 10px 20px 10px;
    background-color: #5736ff;
    color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 20%;
`

const MainChatBlock = styled.div`
    padding: 10px;
    background-color: red;
    position: relative;
    width: 80%;
`

export default AppPage;