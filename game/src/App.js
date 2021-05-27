import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Body from "./components/body";
import Status from "./components/status";
import Restart from "./components/restart";
import Score from "./components/score";
import Loader from "./components//loader";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(345.45deg, #bb6bd9 0%, #2f80ed 100%);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  margin: auto;
  width: 100vw;
`;
const App = () => {
  const { size, loader } = useSelector(state => ({
    size: state.app.size || {},
    loader: state.app.loader || ""
  }));
  return (
    <Wrapper>
      {loader.length ? (
        <Loader />
      ) : (
        <Container size={size}>
          <Score />
          <Status />
          <Body />
          <Restart />
        </Container>
      )}
    </Wrapper>
  );
};
export default App;
