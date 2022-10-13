import styled from "styled-components";
import {TextInput, useAppDispatch, SubmitButton, addNewWorkspace,useAppSelector, selectUserData, changeCreatingWorkSpaceFlag} from '../..';
import {Controller, useForm, Control} from 'react-hook-form';
import React from "react";

interface Props{

}

function AddNewWorkSpaceForm(props: Props){
    


    const userData = useAppSelector(selectUserData);
    const dispatch = useAppDispatch();
    interface FormValues{
        workspaceName: string | undefined;
    }
    const {handleSubmit, getFieldState, getValues, control} = useForm<FormValues>()

    function addNewWorkSpaceFromForm(values: FormValues){
        if(!values.workspaceName?.trim()) return;
        dispatch(addNewWorkspace({name: values.workspaceName, bgColor: "#4287f5"}));
        dispatch(changeCreatingWorkSpaceFlag({createNewWorkSpaceFlag: false}));
        return;
    }  

    return(
        <>
            <Form onSubmit={handleSubmit(addNewWorkSpaceFromForm)}>
                <Controller
                    control={control}
                    name="workspaceName"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <TextInput
                            labelText="Workspace name"
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




export default AddNewWorkSpaceForm;