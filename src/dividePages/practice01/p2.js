import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const P50 = styled.div`
  background-color: ${palette.cyan[1]};
  flex: 1;
`;

const SignUp = styled.div`
  witdh: 100%;
  background-color: #ffcc00;
  text-align: center;
  padding: 10px;
  align-items: center;
`;

const P2 = () => {
  return (
    <P50>
      <h3>Monthly Subscription</h3>
      <h2> $29</h2>
      <p>Full access for less than $1 a day</p>

      <SignUp>Sign Up</SignUp>
    </P50>
  );
};

export default P2;
