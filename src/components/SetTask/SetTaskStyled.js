import styled from "styled-components"
import { TodoBox } from "../layout/TodoBox"


export const SetStyled = styled(TodoBox)`
    border-radius: 0 0 15px 15px;
    height: 30vh;
    border-top: none;
`

export const TaskInput = styled.input`
    margin-top: 40px;
    width: 500px;
    background-color: inherit;
    color: #fafafa;
    border: none;
    border-bottom: 1px solid rgba(250, 250, 250, .5);
    
    ::placeholder {
        color: white;
    };

    &:focus{
        outline: none;
    };
`

export const TaskButton = styled.button`
    background-color: inherit;
    border: none;
    cursor: pointer;
    color: #fafafa;
    margin-left: 10px;
`

