import styled from "styled-components";
import {AddNewWorkSpaceWindow,
       
    } from '../';
import {useState} from 'react';
interface Props{

}



interface WorkspaceProps{
    name: string;
}

function Workspace(props:WorkspaceProps){
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
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 5px;
`
const WorkspaceName = styled.p`
    position: relative;
    bottom: 35px;
`


function AppPage(props:Props){

    const [newWorkspaceModalWindowFlag, setNewWorkspaceModalFlag] = useState(true);

    return(
        <>
            {newWorkspaceModalWindowFlag === false ? null : <AddNewWorkSpaceWindow/>}
            <ExternalWrapper>
                <WorkspacesBlock>
                    <Workspace name="cool"/>
                    <CreateNewWorkspaceButton><img src="./images/icons/add.svg"/></CreateNewWorkspaceButton>
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
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`


const ExternalWrapper = styled.div`
    display: flex;
`

const WorkspacesBlock = styled.div`
    padding: 15px;
    background-color: #5736ff;
    border-right: 1px solid white;
    position: relative;
   
    display: flex;
    
    align-items: center;
    flex-direction: column;
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