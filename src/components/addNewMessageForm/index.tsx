import styled from "styled-components";
import {TextInput, 
    useAppDispatch, 
    SubmitButton, 
    useAppSelector, 
    selectUserData, 
    addNewMessage,
    selectActiveChannelId,
    selectActiveWorkspaceId,
} from '../..';
import {Controller, useForm, Control} from 'react-hook-form';
import React from "react";

interface Props{

}

function AddNewMessageForm(props: Props){
    

    const activeChannelId = useAppSelector(selectActiveChannelId);
    const userData = useAppSelector(selectUserData);
    const dispatch = useAppDispatch();
    interface FormValues{
        messageText: string | undefined;
    }
    const {handleSubmit, getFieldState, getValues, control, reset} = useForm<FormValues>()

    function addNewMessageFromForm(values: FormValues){
        if(!values.messageText?.trim()) return;
        dispatch(addNewMessage({message: values.messageText, channelId: activeChannelId, author: userData.username}));
        reset()
        return;
    }  

    return(
        <>
            <Form onSubmit={handleSubmit(addNewMessageFromForm)}>
                <Controller
                    control={control}
                    name="messageText"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Input
                            
                            type="text"
                            placeholder="print"
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                            value={value || ""}
                        />
                      )}
                />
                
            </Form>
           
        </>
    )
}

const Input = styled(TextInput)`
    position: relative;
    width: 94%;
    margin: 0 auto;
`

const Form = styled.form`
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
    
`




export default AddNewMessageForm;