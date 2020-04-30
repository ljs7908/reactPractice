import React from "react";
import styled from "styled-components";
import M from "../dividePages/practice01/m1";
import palette from "../lib/styles/palette";

const Main = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 5rem;
  width: 840px;
  background: white;
  border-radius: px;
`;

const SinglePage = () => {
  return (
    <Main>
      <WhiteBox>
        <M />
      </WhiteBox>
    </Main>
  );
};

export default SinglePage;
