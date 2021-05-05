import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  text-align: center;
  font-size: 1.5em;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: bold;
  color: red;
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
      if (winResult === role) {
        res = "Победа!";
      } else {
        res = "В другой раз!";
      }
    }
    setStatus(res);
  }, [winResult, role, moveRole]);
  return <Wrapper>{status}</Wrapper>;
};
export default Status;
