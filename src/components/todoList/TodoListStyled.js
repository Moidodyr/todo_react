import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"


export const ListStyled = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 700px;
    margin-top: 30px;
`

export const WrapList = styled.ul`
    box-shadow: 0px 0px 6px 3px rgba(49, 116, 175, .9) inset;
    margin-top: 10px;
    width: 300px;
    min-height: 500px;
    background-color: #fafafa;
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1px 0;
    padding: 15px;
    background: linear-gradient(90deg, rgba(49,116,175,1) 0%, rgba(130,175,215,1) 50%, rgba(49,116,175,1) 100%);
    color: #fafafa;
    cursor: pointer;
    transition: all .5s;

    svg:hover {
        color: #104372;
    }
`

export const Icon = styled(FontAwesomeIcon)`
    margin: 0 5px;
    cursor: pointer;
`