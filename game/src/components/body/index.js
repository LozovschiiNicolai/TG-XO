import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import Field from "./field";
import ResultLine from "./resultLine";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  height: 50%;
`;

const Grid = styled.svg`
  width: 100%;
  height: 100%;
  & line {
    filter: drop-shadow(1px 1px 0.5px rgba(0, 0, 0, 0.25));
  }
  & g svg {
    animation: 0.5s ${fadeIn} ease-out;
  }
`;

const Body = () => {
  const { role, field, moveRole, winResult } = useSelector(state => ({
    role: state.app.role || "",
    field: state.gameState.field || {},
    moveRole: state.gameState.moveRole || "",
    winResult: state.app.winResult || false
  }));

  return (
    <Wrapper>
      <Grid viewBox="0 0 99 99">
        <line x1="0" y1="33" x2="99" y2="33" stroke="#2d9cdb" />
        <line x1="0" y1="66" x2="99" y2="66" stroke="#2d9cdb" />
        <line x1="33" y1="0" x2="33" y2="99" stroke="#2d9cdb" />
        <line x1="66" y1="0" x2="66" y2="99" stroke="#2d9cdb" />

        <Field moveRole={moveRole} field={field} role={role} />

        {winResult && <ResultLine winResult={winResult} role={role} />}
      </Grid>
    </Wrapper>
  );
};
export default Body;
