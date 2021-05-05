import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { makeMoveAction } from "../../redux/modules/gameState";
import Icon from "../icon";

const Grid = styled.div`
  background: ${({ winResult }) => (winResult ? "red" : "gray")};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1em;
  height: 50vh;
  border: 1px solid;
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
  pointer-events: ${({ active }) => (active ? "all" : "none")};
  & svg {
    height: ${({ result }) => (result === "y" ? "37%" : "30%")};
  }
`;
const Body = () => {
  const { role, field, moveRole, winResult } = useSelector(state => ({
    role: state.app.role || "",
    field: state.gameState.field || {},
    moveRole: state.gameState.moveRole || "",
    winResult: state.app.winResult || false
  }));

  const dispatch = useDispatch();
  return (
    <Grid winResult={winResult}>
      {Object.entries(field).map((item, i) => (
        <Item
          active={!item[1] && role === moveRole}
          result={item[1].toString()}
          onClick={() =>
            dispatch(
              makeMoveAction({ newMove: item[0], field, role, moveRole })
            )
          }
          key={i}
        >
          {item[1] && <Icon icon={item[1]} />}
        </Item>
      ))}
    </Grid>
  );
};
export default Body;
