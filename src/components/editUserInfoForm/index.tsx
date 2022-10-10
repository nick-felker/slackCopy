import styled from "styled-components";
import {TextInput, useAppDispatch, SubmitButton, PasswordInput, authUser, useAppSelector, selectUserData, changeUserData} from '../..';
import {Controller, useForm, Control} from 'react-hook-form';
import React from "react";

interface Props{

}

function EditUserInfoForm(props: Props){
    


    const userData = useAppSelector(selectUserData);
    const dispatch = useAppDispatch();
    interface FormValues{
        email: string | undefined;
        username: string | undefined;
    }
    const {handleSubmit, getFieldState, getValues, control} = useForm<FormValues>()

    function editUserInfoFromForm(values: FormValues){
        if(!values.email?.trim() || !values.username?.trim()) return;
        dispatch(changeUserData({editUserInfoFlag: false, email: values.email, username: values.username}));
        return;
    }

    return(
        <>
            <Form onSubmit={handleSubmit(editUserInfoFromForm)}>
                <InputWrapper>
                    <InputLabel>Username</InputLabel>
                    <Controller
                        control={control}
                        name="username"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextInput
                                type="text"
                                placeholder={userData.username}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                                value={userData.username}
                                  
                            />
                        )}
                    />
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Email</InputLabel>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <TextInput
                                type="email"
                                placeholder={userData.email}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                                value={value || ""}
                            />
                        )}
                    />
                
                </InputWrapper>
                <SubmitButton text="Submit" bgColor="#5736ff" textColor="white" />
            </Form>
           
        </>
    )
}
const Form = styled.form`
    padding: 10px 0px;
    display: flex;
    
`
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const InputLabel = styled.label`
    color: #a2a4a6;
`




export default EditUserInfoForm;