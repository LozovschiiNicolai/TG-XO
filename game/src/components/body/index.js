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
`;

const Grid = styled.svg`
  & g svg {
    animation: 0.5s ${fadeIn} ease-out;
  }
`;

const Body = () => {
  const { role, field, moveRole, winResult } = useSelector(state => ({
    role: state.app.role || "",
    field: state.gameState.field || {},
    moveRole: state.gameState.moveRole || "",
    winResult: state.gameState.winResult || {}
  }));

  return (
    <Wrapper>
      <Grid viewBox="0 0 99 99">
        <g>
          <rect x="0" y="33" width="99" height="2" fill="rgba(0, 0, 0, 0.1)" />
          <rect x="0" y="66" width="99" height="2" fill="rgba(0, 0, 0, 0.1)" />
          <rect x="33" y="0" width="2" height="99" fill="rgba(0, 0, 0, 0.1)" />
          <rect x="66" y="0" width="2" height="99" fill="rgba(0, 0, 0, 0.1)" />
        </g>
        <g>
          <rect x="0" y="33" width="99" height="1" fill="#2d9cdb" />
          <rect x="0" y="66" width="99" height="1" fill="#2d9cdb" />
          <rect x="33" y="0" width="1" height="99" fill="#2d9cdb" />
          <rect x="66" y="0" width="1" height="99" fill="#2d9cdb" />
        </g>

        <Field moveRole={moveRole} field={field} role={role} />

        {winResult.winStatus && (
          <ResultLine winResult={winResult} role={role} />
        )}
      </Grid>
    </Wrapper>
  );
};
export default Body;
