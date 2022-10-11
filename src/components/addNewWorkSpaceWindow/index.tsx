import styled from "styled-components";


interface Props{

}

function AddNewWorkspaceWindow(props:Props){
    return(
        <>
            <Overlay/>
            <ExternalWrapper>
                <Title>Create a new workspace</Title>
                

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
    height: 700px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export default AddNewWorkspaceWindow;