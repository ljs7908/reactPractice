import React from "react";
import styled from "styled-components";
import P2 from "./p2";
import P3 from "./p3";

const Divide = styled.div`
  display: flex;
  width: 100%;
`;

const d2 = () => {
  return (
    <Divide>
      <P2 />
      <P3 />
    </Divide>
  );
};

export default d2;
