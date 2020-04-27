import React from "react";
import styled from "styled-components";

const P100 = styled.div`
  witdh: 80%;
  background-color: yellow;
`;

const P1 = () => {
  return (
    <P100>
      <h1 style={{ color: "#336600", marginTop: "0px", paddingTop: "15px" }}>
        Join our community
      </h1>
      <h2 style={{ color: "#66ff66" }}>
        30-day, hassle-free money back gurantee
      </h2>
      <p
        style={{ color: "#777777", marginBottom: "0px", paddingBottom: "15px" }}
      >
        Gain access to our full library of tutorials along with expert code
        review.
        <br /> Perfect for any developers who are serious about haning their
        skills.
      </p>
    </P100>
  );
};

export default P1;
