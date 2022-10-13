import styled from "styled-components";
import {AddNewWorkSpaceWindow,
       useAppDispatch, 
       changeCreatingWorkSpaceFlag,
       selectCreatingWorkSpaceFlag,
       useAppSelector,
       WorkspacesList,
       ChatsList,
       MessagesList,
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
                <MessagesList/>

            </ExternalWrapper>
        </>
    )
}




const ExternalWrapper = styled.div`
    display: flex;
`

export default AppPage;