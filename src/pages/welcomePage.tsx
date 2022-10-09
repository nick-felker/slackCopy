import styled from "styled-components";
import {Header, LoginForm, CustomLink} from './../';

interface Props{

}

function WelcomePage(props:Props){
    return(
        <>
            <ExternalWrapper>
                <InnerWrapper>
                    <FormTitle>Welcome to the smart talk</FormTitle>
                    <WelcomeLinksWrapper>
                        <CustomLink text="Sign up" link="/registration"/>
                        <CustomLink text="Sign in" link="/login" bgColor="#9f8cff"/>
                        
                    </WelcomeLinksWrapper>
                </InnerWrapper>
                



            </ExternalWrapper>  
        </>
    )
}




const WelcomeLinksWrapper = styled.div`
    margin: 0 auto;
    width: 200px;
    display: flex;
    justify-content: space-between;
`


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

export default WelcomePage;