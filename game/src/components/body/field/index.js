import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { makeMoveAction } from "../../../redux/modules/gameState";
import IconX from "../../icon/x";
import IconO from "../../icon/o";
import { COORD } from "../../../configs";

const Item = styled.rect`
  fill: none;
  pointer-events: ${({ active }) => (active ? "all" : "none")};
`;
const Field = props => {
  const { role, field, moveRole } = props;

  const dispatch = useDispatch();
  return Object.entries(field).map((item, i) => (
    <g key={i}>
      <Item
        width="33"
        height="33"
        x={COORD[`item${i + 1}`].x}
        y={COORD[`item${i + 1}`].y}
        active={!item[1] && role === moveRole}
        result={item[1].toString()}
        onClick={() =>
          dispatch(makeMoveAction({ newMove: item[0], field, role, moveRole }))
        }
      />
      {item[1] === "x" ? (
        <IconX num={i} />
      ) : item[1] === "y" ? (
        <IconO num={i} />
      ) : (
        ""
      )}
    </g>
  ));
};
export default Field;
