import React from "react";
import styled from "styled-components";

const P50 = styled.div`
  witdh = 100%;
  background-color: yellow;
`;

const marginzero = {
  marginTop: "0px",
};

const P2 = () => {
  return (
    <P50>
      <h1 style={marginzero}>Join our community</h1>
      <h2 style={marginzero}> 30-day, hassle-free money back gurantee</h2>
      <p style={marginzero}>
        Gain access to our full library of ~~~~~
        <br /> hihihi
      </p>
    </P50>
  );
};

export default P2;
