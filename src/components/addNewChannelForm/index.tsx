import styled from "styled-components";
import {TextInput, 
    useAppDispatch, 
    SubmitButton, 
    useAppSelector, 
    selectUserData, 
    changeCreateNewChannelModalWindowFlag,
    addNewChannel,
    selectActiveWorkspaceId,
} from '../..';
import {Controller, useForm, Control} from 'react-hook-form';
import React from "react";

interface Props{

}

function AddNewChannelForm(props: Props){
    

    const activeWorkspaceId = useAppSelector(selectActiveWorkspaceId);
    const userData = useAppSelector(selectUserData);
    const dispatch = useAppDispatch();
    interface FormValues{
        channelName: string | undefined;
    }
    const {handleSubmit, getFieldState, getValues, control} = useForm<FormValues>()

    function addNewChannelFromForm(values: FormValues){
        if(!values.channelName?.trim()) return;
        dispatch(addNewChannel({name: values.channelName, workspaceId: activeWorkspaceId, channelId: Math.random().toString()}))
        dispatch(changeCreateNewChannelModalWindowFlag({createNewChannelModalWindowFlag: false}));
        return;
    }  

    return(
        <>
            <Form onSubmit={handleSubmit(addNewChannelFromForm)}>
                <Controller
                    control={control}
                    name="channelName"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <TextInput
                            labelText="Channel name"
                            type="text"
                            placeholder="cool name"
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                            value={value || ""}
                        />
                      )}
                />
                <SubmitButton text="Add" bgColor="#5736ff" textColor="white" />
            </Form>
           
        </>
    )
}
const Form = styled.form`
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
`




export default AddNewChannelForm;