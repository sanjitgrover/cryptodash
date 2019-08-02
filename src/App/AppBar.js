import React from "react";
import styled, {css} from "styled-components";

const Logo=styled.div`
    font-size: 1.5em;
`

const Bar=styled.div`
display: grid;
grid-template-columns: 180px auto 100px 100px;
margin-bottom: 50px;
`
//function toProperCase();
const ControlButtonElem = styled.div`
cursor: pointer;
text-transform: capitalize;
${props=>props.active && css`
    text-shadow: 2px 2px #FF0000;
    
`}
`

function ControlButton({name, active}){
    return <ControlButtonElem active={active}>
        {name}
    </ControlButtonElem>
}


export default function(){
    return<Bar>
        <Logo>Cryptodash</Logo>
        <div></div>
        <ControlButton active name="dashboard"/>
        <ControlButton name="settings"/>

    </Bar>
}