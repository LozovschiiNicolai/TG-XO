import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StatusText } from "./commonStatus/";
import { Spinner } from "../loader/commonLoader/";

const Wrapper = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
`;

const Status = () => {
  const { role, moveRole, winResult, statusLoader } = useSelector(state => ({
    role: state.app.role || "",
    moveRole: state.gameState.moveRole || "",
    winResult: state.gameState.winResult || false,
    statusLoader: state.app.statusLoader || false
  }));
  const [status, setStatus] = useState("");

  useEffect(() => {
    let res = "";
    if (!winResult.winStatus) {
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
      {statusLoader ? <Spinner /> : <StatusText>{status}</StatusText>}
    </Wrapper>
  );
};
export default Status;
