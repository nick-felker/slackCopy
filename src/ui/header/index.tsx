import styled from "styled-components";



interface Props{

}

function Header(props:Props){
    return(
        <>
            <ExternalWrapper>
                <Title>Smack</Title>
                <DoUserRegisterStatus>user not auth</DoUserRegisterStatus>
            </ExternalWrapper>
        </>
    )
}


const DoUserRegisterStatus = styled.p`
    font-size: 20px;
    font-weight: 300;
`

const ExternalWrapper = styled.div`
    padding: 20px 50px 20px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.p`
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
`

export default Header;