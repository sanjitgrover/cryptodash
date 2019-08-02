import React from "react";
import styled, { css } from "styled-components";
import AppContext from "./AppProvider";

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 100px auto 100px 100px;
`;
const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`}
text-shadow: 0px 0px 0px #03ff03;
text-transform: capitalize;
`}
`;

function ControlButton({ name }) {
  return (
    <AppContext.Consumer>
      {({ page }) => (
        <ControlButtonElem active={page === name}>{ (name)}</ControlButtonElem>
      )}
    </AppContext.Consumer>
  );
}

export default function() {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <ControlButton active name="Dashboard" />
      <ControlButton name="Settings" />
    </Bar>
  );
}
