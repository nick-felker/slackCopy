import styled from "styled-components";
import {Input, useAppDispatch} from '../..';
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
                <Input
                    type="text"
                    placeholder="username"
                    {...register("username")}
                />
                <Input
                    type="text"
                    placeholder="email"
                    {...register("username")}
                />
                <Input
                    type="text"
                    placeholder="password"
                    {...register("username")}
                />
                <input type={'submit'}/>
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