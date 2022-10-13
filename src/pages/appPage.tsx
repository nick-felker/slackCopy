import styled from "styled-components";
import {AddNewWorkSpaceWindow,
       useAppDispatch, 
       changeCreatingWorkSpaceFlag,
       selectCreatingWorkSpaceFlag,
       useAppSelector,
    } from '../';
import {useState} from 'react';
interface Props{

}



interface WorkspaceProps{
    name: string;
}

function WorkspaceButton(props:WorkspaceProps){
    return(
        <WorkspaceWrapper>
            <WorkspaceSquare/>
            <WorkspaceName>{props.name}</WorkspaceName>
        </WorkspaceWrapper>
    )
}

const WorkspaceWrapper = styled.div`
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
    :hover{
        opacity: 0.5;
    }
    cursor: pointer;
    align-items: center;
`
const WorkspaceSquare = styled.div`
    background-color: #4287f5;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 5px;
`
const WorkspaceName = styled.p`
    position: relative;
    color: white;
    bottom: 35px;
`


function AppPage(props:Props){

    const dispatch = useAppDispatch();
    const creatingNewWorkSpaceFlag:boolean = useAppSelector(selectCreatingWorkSpaceFlag);

    return(
        <>
            {creatingNewWorkSpaceFlag === true ? <AddNewWorkSpaceWindow/> : null}
            <ExternalWrapper>
                <WorkspacesBlock>
                    <WorkspaceButton name="cool"/>
                    <CreateNewWorkspaceButton onClick={()=>dispatch(changeCreatingWorkSpaceFlag({createNewWorkSpaceFlag: true}))}><img src="./images/icons/add.svg"/></CreateNewWorkspaceButton>
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


const CreateNewWorkspaceButton = styled.button`
    background: none;
    padding: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.7;
    :hover{
        opacity: 0.3;
        transition: 0.5s;
    }
`


const ExternalWrapper = styled.div`
    display: flex;
`

const WorkspacesBlock = styled.div`
    padding: 15px;
    background-color: #3e103f;
    border-right: 1px solid rgba(215, 217, 219, .2);
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
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