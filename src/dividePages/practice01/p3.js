import React from "react";
import styled from "styled-components";

const P50 = styled.div`
  background-color: green;
  flex: 1;
`;
const marginzero = {
  margin: "0px",
};

const P3 = () => {
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

export default P3;
