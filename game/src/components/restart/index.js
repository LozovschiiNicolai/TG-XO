import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { repeatRoundAction } from "../../redux/modules/appState";
import { StatusText } from "../status/commonStatus/";

const Wrapper = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  margin: 2.5% 0;
`;
const Button = styled.button`
  position: relative;
  background: linear-gradient(92.1deg, #2f80ed 0%, #bb6bd9 100%);
  font-family: sans-serif;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  padding: 0.7em 3em;
  border-radius: 1.3em;
  border: none;
  box-shadow: 2px 2px 4px #4f4f4f;
  outline: none;
  & span {
    background: #2f2f2f;
    color: transparent;
    text-shadow: 2px 2px 3px #aa6edc;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }
  &:active {
    box-shadow: inset 2px 2px 4px #4f4f4f;
    & span {
      background: transparent;
      color: #aa6edc;
      text-shadow: 2px 2px 3px #4f4f4f;
    }
  }
  @media (orientation: landscape) {
    font-size: 1em;
  }
`;
const Popup = () => {
  const { repeatRound } = useSelector(state => ({
    repeatRound: state.app.repeatRound || false
  }));
  const [message, setMessage] = useState("Еще раз");
  const dispatch = useDispatch();
  useEffect(() => {
    let mes = repeatRound ? "Ожидание соперника" : "Еще раз";
    setMessage(mes);
  }, [repeatRound]);
  const handleReplyRound = () => {
    setTimeout(() => {
      dispatch(repeatRoundAction(true));
    }, 500);
  };
  return (
    <Wrapper>
      {repeatRound ? (
        <StatusText>{message}</StatusText>
      ) : (
        <Button onClick={handleReplyRound}>
          <span>{message}</span>
        </Button>
      )}
    </Wrapper>
  );
};
export default Popup;
