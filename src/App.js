import React, { useState } from "react";
import styled from "styled-components";

import Lamp from "./Lamp";
import LightSwitch from "./LightSwitch";

const Room = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 10px solid black;
  margin: 0 auto;
`;

function App() {
  //lamp one state, the right hand one set changes what it is showing to the user. we set the default in()
  const [isLampOneOn, setIsLampOneOn] = useState(false);

  // lamp 2
  const [isLampTwoOn, setIsLampTwoOn] = useState(true);
  // we can have as many states as we want in here

  // these are the two functions that are called when we click the lightswitch, this gets called with the orevious state
  const handleLightSwitchOne = () => setIsLampOneOn((prev) => !prev);
  const handleLightSwitchTwo = () => setIsLampTwoOn((prev) => !prev);

  // the room component comes from styled components

  //i have created two props here Lamp on prop i have also created a prop called position
  return (
    <Room>
      <Lamp lampOn={isLampOneOn} position="left" />
      <Lamp lampOn={isLampTwoOn} position="right" />
      <LightSwitch
        name="one"
        callback={handleLightSwitchOne}
        switchOn={isLampOneOn}
        position="left"
      />
      <LightSwitch
        name="two"
        callback={handleLightSwitchTwo}
        switchOn={isLampTwoOn}
        position="right"
      />
    </Room>
  );
}

export default App;
