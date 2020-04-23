import React from "react";
import styled from "styled-components";
import P1 from "./p1";
import D2 from "./d2";

const Main1 = styled.div`
width = 100%;
`;

const m = () => {
  return (
    <Main1>
      <P1 />
      <D2 />
    </Main1>
  );
};

export default m;
