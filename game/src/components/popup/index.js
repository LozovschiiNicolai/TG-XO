import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { repeatRoundAction } from "../../redux/modules/appState";

const Wrapper = styled.div`
  position: absolute;
  top: 15%;
  height: 30%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 2em;
  text-transform: uppercase;
  font-family: sans-serif;
  text-align: center;
`;
const Button = styled.div`
  background: green;
  padding: 0.5em 1em;
  border-radius: 1em;
`;
const Popup = () => {
  const { winResult, repeatRound } = useSelector(state => ({
    winResult: state.app.winResult || false,
    repeatRound: state.app.repeatRound || false
  }));
  const [message, setMessage] = useState("Еще раз");
  const dispatch = useDispatch();
  useEffect(() => {
    let mes = repeatRound ? "Ожидание соперника" : "Еще раз";
    setMessage(mes);
  }, [repeatRound]);
  const handleReplyRound = () => {
    dispatch(repeatRoundAction(true));
  };
  return (
    winResult && (
      <Wrapper>
        {repeatRound ? (
          <span>{message}</span>
        ) : (
          <Button onClick={handleReplyRound}>{message}</Button>
        )}
      </Wrapper>
    )
  );
};
export default Popup;
