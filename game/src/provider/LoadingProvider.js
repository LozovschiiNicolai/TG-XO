//flow
import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import qs from "qs";
import { getUrlParamsAction } from "../redux/modules/appState";

type Props = {
  children: any
};
const LoadingProvider = (props: Props) => {
  const dispatch = useDispatch();
  const rawUrlParams = qs.parse(window.location.search, {
    ignoreQueryPrefix: true
  });

  useEffect(() => {
    dispatch(getUrlParamsAction(rawUrlParams));
  });
  return <Fragment>{props.children}</Fragment>;
};
export default LoadingProvider;
