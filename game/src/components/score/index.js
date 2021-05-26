import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StatusText } from "../status/commonStatus";

const Wrapper = styled.div`
  height: 10%;
  margin-top: 2.5%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (orientation: landscape) {
    width: 50%;
  }
`;
const Item = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 8em;
  &:last-of-type {
    flex-direction: row-reverse;
    margin-left: 5%;
  }
`;
const Name = styled.div`
  background: linear-gradient(135deg, #2f80ed 0%, #bb6bd9 100%);
  font-family: sans-serif;
  font-size: 45px;
  text-transform: uppercase;
  box-shadow: 2px 2px 4px #4f4f4f;
  outline: none;
  height: 1.37em;
  width: 1.37em;
  text-align: center;
  border-radius: 50%;
  font-weight: lighter;
  @media (orientation: landscape) {
    font-size: 2em;
  }
  & span {
    display: inline-block;
    vertical-align: middle;
    background: #2f2f2f;
    color: transparent;
    text-shadow: 2px 2px 3px #487ce9;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }
`;
const Symbol = styled(StatusText)`
  position: absolute;
`;
const Score = () => {
  const { gameScore } = useSelector(state => ({
    gameScore: state.gameState.gameScore || {}
  }));
  const firstLetter = name => name.split("")[0];
  return (
    <Wrapper>
      <Symbol>:</Symbol>
      {Object.values(gameScore).map((item, i) => (
        <Item key={i}>
          <Name>
            <span>{firstLetter(item.name)}</span>
          </Name>
          <StatusText>{item.score}</StatusText>
        </Item>
      ))}
    </Wrapper>
  );
};
export default Score;
