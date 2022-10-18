import styled from "styled-components";
import {selectWorkspaceById, useAppSelector, useAppDispatch, changeActiveWorkspaceId, selectActiveWorkspaceId, RootState, WorkSpaceInterface} from '../../';


interface Props{

}

function ChatsList(props:Props){
    const activeWorkspaceId:string = useAppSelector(selectActiveWorkspaceId);
    const activeWorkspace = useAppSelector((state:RootState)=>selectWorkspaceById(state, activeWorkspaceId));
    return(
        <>
            <MainInfoBlock>
                <p>{activeWorkspace[0] === undefined ? "select workspace" : activeWorkspace[0].name}</p>
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