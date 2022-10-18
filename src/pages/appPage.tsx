import styled from "styled-components";
import {AddNewWorkSpaceWindow,
       useAppDispatch, 
       changeCreatingWorkSpaceFlag,
       selectCreatingWorkSpaceFlag,
       useAppSelector,
       WorkspacesList,
       ChatsList,
       MessagesList,
       selectCreatingNewChannelWindowFlag,
       AddNewChannelWindow
    } from '../';
import {useState} from 'react';
interface Props{

}


function AppPage(props:Props){

    const dispatch = useAppDispatch();
    const creatingNewWorkSpaceFlag:boolean = useAppSelector(selectCreatingWorkSpaceFlag);
    const creatingNewChannelFlag:boolean = useAppSelector(selectCreatingNewChannelWindowFlag);

    return(
        <>
            {creatingNewWorkSpaceFlag === true ? <AddNewWorkSpaceWindow/> : null}
            {creatingNewChannelFlag === true ? <AddNewChannelWindow/> : null} 
            <ExternalWrapper>
                <WorkspacesList/>
                <ChatsList/>
                <MessagesList/>
            </ExternalWrapper>
        </>
    )
}




const ExternalWrapper = styled.div`
    display: flex;
`

export default AppPage;