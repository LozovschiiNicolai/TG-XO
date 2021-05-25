import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StatusText } from "../status/commonStatus";
import { Spinner } from "./commonLoader/";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Loader = () => {
  const { loader } = useSelector(state => ({
    loader: state.app.loader
  }));

  return (
    <Wrapper>
      <Spinner />
      <StatusText>{loader}</StatusText>
    </Wrapper>
  );
};
export default Loader;
