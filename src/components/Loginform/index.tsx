import styled from "styled-components";
import {TextInput, useAppDispatch, SubmitButton, PasswordInput, authUser, useAppSelector, selectUserData} from '../..';
import {Controller, useForm, Control} from 'react-hook-form';
import React from "react";

interface Props{

}

function LoginForm(props: Props){
    


    const userData = useAppSelector(selectUserData);
    const dispatch = useAppDispatch();
    interface FormValues{
        email: string | undefined;
        password: string | undefined;
    }
    const {handleSubmit, getFieldState, getValues, control} = useForm<FormValues>()

    function authUserFromForm(values: FormValues){
        if(!values.email?.trim() || !values.password?.trim()){
            return;
        }
        if(values.email === userData.email && values.password === userData.password){
            dispatch(authUser({authFlag: true}))
            window.location.href = "/personal";    
        }
        else{
            alert("fields does not correct")
        }
           
        
    }

    return(
        <>
            <Form onSubmit={handleSubmit(authUserFromForm)}>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <TextInput
                            labelText="Email Adress"
                            type="email"
                            placeholder="example@mail.ru"
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                            value={value || ""}
                        />
                      )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <PasswordInput
                            ref={ref}
                            labelText="Password"
                            placeholder="password"
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                            value={value || ""}
                        />
                      )}
                />
                <SubmitButton text="Login" bgColor="#5736ff" textColor="white" />
            </Form>
           
        </>
    )
}
const Form = styled.form`
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
`




export default LoginForm;