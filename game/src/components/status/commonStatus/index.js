import styled from "styled-components";

export const StatusText = styled.div`
  text-align: center;
  font-size: 1.8em;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: 200;
  color: #56ccf2;
  text-shadow: 2px 2px 4px #4f4f4f;
  @media (orientation: landscape) and (max-width: 1024px) {
    font-size: 1em;
  }
`;
