import styled from "styled-components";
import {useAppSelector, selectUserData, authUser, useAppDispatch, CustomLink} from '../../';


interface Props{

}

function Header(props:Props){
    const dispatch = useAppDispatch();
    function logoutUser(){
        dispatch(authUser({authFlag: false}));
        window.location.href = "/registration";
    }
    
    const userData = useAppSelector(selectUserData);

    return(
        <>
            <ExternalWrapper>
                <Title>
                    <CustomLink text="Smart talk" link="/app" textColor="black" bgColor="white"/>
                </Title>
                {userData.authFlag === true ? 
                <>
                     <UsernameBlockWrapper>
                        <UsernameTitle>
                            <CustomLink text={userData.username} link="/personal" bgColor="white" textColor="black"/>
                        </UsernameTitle>
                        <UsernameLogout onClick={logoutUser}>
                            logout
                        </UsernameLogout>
                    </UsernameBlockWrapper>
                </>
                :
                null
                }
                
            </ExternalWrapper>
        </>
    )
}


const UsernameBlockWrapper = styled.div`
    display: flex;
    align-items: center;
`

const UsernameTitle = styled.p`
    font-size: 18px;
`
const UsernameLogout = styled.p`
    cursor: pointer;
    padding: 5px;
    :hover{
        opacity: 0.8;
        transition: 0.5s;
    }
    margin: 2px 5px 0px 5px;
    opacity: 0.5;
    font-size: 15px;
`

const ExternalWrapper = styled.div`
    padding: 20px 50px 20px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f5f6f7;
`
const Title = styled.p`
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
`

export default Header;