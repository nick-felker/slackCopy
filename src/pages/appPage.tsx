import styled from "styled-components";
import {AddNewWorkSpaceWindow,
       useAppDispatch, 
       changeCreatingWorkSpaceFlag,
       selectCreatingWorkSpaceFlag,
       useAppSelector,
       WorkspacesList
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


const MainInfoBlock = styled.div`
    padding: 10px 10px 20px 10px;
    background-color: #3e103f;
    color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 20%;
`

const MainChatBlock = styled.div`
    padding: 10px;
    background-color: gray;
    position: relative;
    width: 80%;
`

export default AppPage;