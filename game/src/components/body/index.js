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
        <defs>
          <filter id="landscape" x="0" y="0" width="200%" height="200%">
            <feOffset result="offOut" in="SourceAlpha" dx="0" dy="1" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
          <filter id="portrait" x="0" y="0" width="200%" height="200%">
            <feOffset result="offOut" in="SourceAlpha" dx="1" dy="0" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        <rect
          filter="url(#landscape)"
          x="0"
          y="33"
          width="99"
          height="1"
          fill="#2d9cdb"
        />
        <rect
          filter="url(#landscape)"
          x="0"
          y="66"
          width="99"
          height="1"
          fill="#2d9cdb"
        />
        <rect
          filter="url(#portrait)"
          x="33"
          y="0"
          width="1"
          height="99"
          fill="#2d9cdb"
        />
        <rect
          filter="url(#portrait)"
          x="66"
          y="0"
          width="1"
          height="99"
          fill="#2d9cdb"
        />

        <Field moveRole={moveRole} field={field} role={role} />

        {winResult.winStatus && (
          <ResultLine winResult={winResult} role={role} />
        )}
      </Grid>
    </Wrapper>
  );
};
export default Body;
