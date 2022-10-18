import styled from "styled-components";
import {useAppSelector, useAppDispatch, selectWorkspaceById, selectWorkspaces, addNewWorkspace, changeCreatingWorkSpaceFlag, WorkSpaceInterface, changeActiveWorkspaceId} from '../../';





interface WorkspaceProps{
    name: string;
    selfId: string;
    bgColor: string;

}

function WorkspaceButton(props:WorkspaceProps){

    const dispatch = useAppDispatch();

    return(
        <WorkspaceWrapper onClick={()=>dispatch(changeActiveWorkspaceId({activeWorkspaceId: props.selfId}))}>
            <WorkspaceSquare>
            <WorkspaceName>{props.name}</WorkspaceName>
            </WorkspaceSquare>
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
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 20px;
`
const WorkspaceName = styled.p`
    color: white;
`



interface Props{

}

function WorkspacesList(props: Props){

    const dispatch = useAppDispatch();
    const workspaceArray = useAppSelector(selectWorkspaces);

    return(
        <>
            <WorkspacesBlock> 
                {workspaceArray.map((elem: WorkSpaceInterface)=>{
                    return(
                        <>
                            <WorkspaceButton bgColor={elem.bgColor} selfId={elem.selfId} name={elem.name}/>
                        </>
                    )
                })}
                <CreateNewWorkspaceButton onClick={()=>dispatch(changeCreatingWorkSpaceFlag({createNewWorkSpaceFlag: true}))}><img src="./images/icons/add.svg"/></CreateNewWorkspaceButton>
            </WorkspacesBlock>
           
        
        </>
    )
}


const WorkspacesBlock = styled.div`
    padding: 15px;
    background-color: #3e103f;
    border-right: 1px solid rgba(215, 217, 219, .2);
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
`


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

export default WorkspacesList;