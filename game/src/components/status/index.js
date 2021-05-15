import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StatusText } from "./commonStatus/";

const Wrapper = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
`;

const Status = () => {
  const { role, moveRole, winResult } = useSelector(state => ({
    role: state.app.role || "",
    moveRole: state.gameState.moveRole || "",
    winResult: state.app.winResult || false
  }));
  const [status, setStatus] = useState("");

  useEffect(() => {
    let res = "";
    if (!winResult) {
      if (role === moveRole) {
        res = "Твой ход";
      } else {
        res = "Ход противника";
      }
    } else {
      if (winResult.res === role) {
        res = "Победа!";
      } else {
        res = "В другой раз!";
      }
    }
    setStatus(res);
  }, [winResult, role, moveRole]);
  return (
    <Wrapper>
      <StatusText>{status}</StatusText>
    </Wrapper>
  );
};
export default Status;
