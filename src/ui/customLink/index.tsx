import styled from "styled-components";
import {Link} from 'react-router-dom';

interface Props{
    link: string;
    text: string;
    textColor?: string;
    bgColor?: string;
}

function CustomLink(props:Props){
    return(
        <Root bgColor={props.bgColor} textColor={props.textColor} to={props.link}>
            {props.text}
        </Root>
    )
}


interface RootProps{
    bgColor?: string;
    textColor?: string;
}

const Root = styled(Link)<RootProps>`
    background-color: ${props=>props.bgColor || "#5736ff"};
    color: ${props=>props.textColor || "white"};
    text-decoration: none;
    border-radius: 3px;
    font-size: 20px;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    padding: 5px 10px;
`

export default CustomLink;