import styled from "styled-components";
import { 
    useAppDispatch,
    changeCreateNewChannelModalWindowFlag,
    AddNewChannelForm,
} from '../../';

interface Props{

}

function AddNewChannelWindow(props:Props){
    const dispatch = useAppDispatch();
    return(
        <>
            <Overlay onClick={()=>dispatch(changeCreateNewChannelModalWindowFlag({createNewChannelModalWindowFlag: false}))}/>
            <ExternalWrapper>
                <Title>Create a new channel</Title>
                <AddNewChannelForm/>
            </ExternalWrapper>        
        </>
    )
}


const Overlay = styled.div`
    z-index: 4;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: gray;
    cursor: pointer;
    opacity: 0.7;
`

const Title = styled.div`
    font-size: 20px;
`

const ExternalWrapper = styled.div`
    padding: 20px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 5;
    width: 500px;
    height: 300px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export default AddNewChannelWindow;