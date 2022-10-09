import {useState} from 'react';
import styled from "styled-components";
import {Header, useAppSelector, selectUserData, EditUserInfoForm, useAppDispatch, changeUserData} from '../';

interface Props{

}

function UserPage(props:Props){
    const dispatch = useAppDispatch();

    const userData = useAppSelector(selectUserData);

    return(
        <ExternalWrapper>
            <Header/>
            <InnerWrapper>
                <PageTitleWrapper>
                    <PageTitleWrapperText>My profile</PageTitleWrapperText>
                    <PageTitleWrapperEditInfoButton onClick={()=>dispatch(changeUserData({editUserInfoFlag: true}))}>edit</PageTitleWrapperEditInfoButton>
                </PageTitleWrapper>
                {userData.editUserInfoFlag === false ? 
                <>
                    <UserDataFieldsWrapper>
                        <UserameFieldWrapper>
                            <UserameFieldWrapperTitle>Username</UserameFieldWrapperTitle>
                            <UserameFieldWrapperValue>{userData.username}</UserameFieldWrapperValue>
                        </UserameFieldWrapper>
                        <EmailFieldWrapper>
                            <EmailFieldWrapperTitle>Email</EmailFieldWrapperTitle>
                            <EmailFieldWrapperValue>{userData.email}</EmailFieldWrapperValue>
                        </EmailFieldWrapper>
                    </UserDataFieldsWrapper>
                </>
                :
                <EditUserInfoForm/>
                }
            </InnerWrapper>
        </ExternalWrapper>
    )
}

const UserDataFieldsWrapper = styled.div`
    display: flex;
    align-items: center;
`

const UserameFieldWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 70px;
`

const UserameFieldWrapperTitle = styled.p`
    color: #a2a4a6;
    margin-bottom: 10px;
`
const UserameFieldWrapperValue = styled.p`
    
`

const EmailFieldWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

const EmailFieldWrapperTitle = styled.p`
    color: #a2a4a6;
    margin-bottom: 10px;
`
const EmailFieldWrapperValue = styled.p`

`


const InnerWrapper = styled.div`
    width: 1600px;
    padding-top: 50px;
    margin: 0 auto;
`

const PageTitleWrapperEditInfoButton = styled.button`
    font-size: 20px;
    margin-left: 30px;
    color: white;
    border-radius: 5px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    background-color: #5736ff;
`

const PageTitleWrapperText = styled.h1`

`

const PageTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
`

const ExternalWrapper = styled.div`

`

export default UserPage;