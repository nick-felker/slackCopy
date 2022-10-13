import styled from "styled-components";
import {AddNewWorkSpaceWindow,
       useAppDispatch, 
       changeCreatingWorkSpaceFlag,
       selectCreatingWorkSpaceFlag,
       useAppSelector,
       WorkspacesList,
       ChatsList,
    } from '../';
import {useState} from 'react';
interface Props{

}


function AppPage(props:Props){

    const dispatch = useAppDispatch();
    const creatingNewWorkSpaceFlag:boolean = useAppSelector(selectCreatingWorkSpaceFlag);

    return(
        <>
            {creatingNewWorkSpaceFlag === true ? <AddNewWorkSpaceWindow/> : null}
            <ExternalWrapper>
                <WorkspacesList/>
                <ChatsList/>
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

const MainChatBlock = styled.div`
    padding: 10px;
    background-color: gray;
    position: relative;
    width: 80%;
`

export default AppPage;