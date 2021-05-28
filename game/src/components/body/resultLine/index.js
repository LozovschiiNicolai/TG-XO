import React from "react";
import { LINE_COORD } from "../../../configs";
import styled, { keyframes } from "styled-components";

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const Wrapper = styled.g`
  & line {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: ${dash} 2s ease-out forwards;
  }
`;

const ResultLine = ({ winResult, role }) => (
  <Wrapper>
    <line
      x1={LINE_COORD[`item${winResult.combination}`].x1}
      y1={LINE_COORD[`item${winResult.combination}`].y1}
      x2={LINE_COORD[`item${winResult.combination}`].x2}
      y2={LINE_COORD[`item${winResult.combination}`].y2}
      stroke={winResult.res === role ? "#219653" : "#EB5757"}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </Wrapper>
);
export default ResultLine;
