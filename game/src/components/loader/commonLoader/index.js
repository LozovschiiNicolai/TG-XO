import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0);
  }
  100%{
    transform: rotate(359deg);
  }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #56ccf2;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-top: 5px solid transparent;
  border-radius: 50%;
  margin-bottom: 25px;
  animation: ${spin} 0.5s linear 0s infinite;
`;
