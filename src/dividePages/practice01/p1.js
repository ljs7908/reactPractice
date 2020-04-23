import React from "react";
import styled from "styled-components";

const P100 = styled.div`
witdh = 100%;
background-color : pink;
`;

const marginzero = {
  margin: "0px",
};

const P1 = () => {
  return (
    <P100>
      <h1 style={marginzero}>Join our community</h1>
      <h2 style={marginzero}> 30-day, hassle-free money back gurantee</h2>
      <p style={marginzero}>
        Gain access to our full library of ~~~~~
        <br /> hihihi
      </p>
    </P100>
  );
};

export default P1;
