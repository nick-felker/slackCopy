import styled from "styled-components";
import {RegistrationForm, Header} from '../';
interface Props{

}

function RegistrationPage(props:Props){
    return(
        <>
            <ExternalWrapper>
                <Header/>
                <InnerWrapper>
                    <FormTitle>Welcome Back</FormTitle>
                    <RegistrationForm/>
                </InnerWrapper>
                



            </ExternalWrapper>  
        </>
    )
}

const FormTitle = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 50px;
`


const InnerWrapper = styled.div`
    margin-top: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

const ExternalWrapper = styled.div`

`
export default RegistrationPage;