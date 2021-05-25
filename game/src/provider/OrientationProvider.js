//flow
import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSizeAction } from "../redux/modules/appState";

type Props = {
  children: any
};

const OrientationProvider = (props: Props) => {
  const dispatch = useDispatch();
  const updateSize = () => {
    let result = 0;
    if (window.outerWidth > window.outerHeight) {
      result = window.outerHeight;
    } else {
      result = window.outerWidth;
    }
    dispatch(setSizeAction({ width: result }));
  };
  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize, true);
    return () => window.removeEventListener("resize", updateSize);
  });

  return <Fragment>{props.children}</Fragment>;
};
export default OrientationProvider;
