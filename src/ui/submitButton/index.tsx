import React from 'react';
import styled from 'styled-components';




interface Props{
    textColor: string;
    bgColor: string;
    text: string;
    error?: string;
    value?: string;
    pattern?: any;
    format?: any;
    separator?: any;
}



const SubmitButton = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => (
    <>
        <Root {...props} textColor={props.textColor} bgColor={props.bgColor} value={props.text} type={'submit'} ref={ref}/>
    </>
)); 


interface RootProps{
    error?: string;
    bgColor?: string;
    textColor?: string;
    borderStyle?: string;
}


const Root = styled.input<RootProps>`
    z-index: 3;
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    font-family: Roboto;
    background: ${props=>props.bgColor};
    outline: none;
    border: ${props=> props.error === 'error' ? '1px solid red' : props.error === 'ok' ? '1px solid #17BC77' : '1px solid white'};
    padding: 14px 20px;
    ::placeholder{
        color: #717583;
        font-weight: 400;
        font-size: 14px;
    }
    border-radius: 10px;
    width: 280px;
    margin-top: 5px;
    color: ${props=> props.textColor};
    margin-bottom: 40px;
    :last-child(){
        margin-bottom: 0px;
    }
`
export default SubmitButton;