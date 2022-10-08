import styled from "styled-components";
import {TextInput, useAppDispatch, SubmitButton, PasswordInput} from '../..';
import {Controller, useForm} from 'react-hook-form';

interface Props{

}

function LoginForm(props: Props){
    
    interface FormValues{
        username: string;
        email: string;
        password: string;
    }
    const dispatch = useAppDispatch();
    const {register, handleSubmit, getFieldState, getValues} = useForm<FormValues>()

    function authUser(values: FormValues){
        console.log(values);
    }

    return(
        <>
            <Form onSubmit={handleSubmit(authUser)}>
                <TextInput
                    labelText="Email Adress"
                    type="email"
                    placeholder="example@mail.ru"
                    {...register("email")}
                />
                <PasswordInput
                    labelText="Password"
                    placeholder="password"
                    {...register("password")}
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