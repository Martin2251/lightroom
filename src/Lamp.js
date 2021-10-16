import React from "react";
import styled from "styled-components";

// everything inside the wrapper here is shown
// we can use props in our styled componets to modify our css
// we can grab the props that our sent into our styled component
// if it is set to the left i set it to 20px ? as a conditional
const Wrapper = styled.div`
  position: absolute;
  left: ${(props) => (props.position === "left" ? "20px" : "380px")};
  top: 20px;
  background: ${(props) => (props.lampOn ? "orange" : "lightgrey")};
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

// using es6 destructuting here

const Lamp = ({ lampOn, position }) => (
  <Wrapper lampOn={lampOn} position={position}>
    <div />
  </Wrapper>
);

export default Lamp;
