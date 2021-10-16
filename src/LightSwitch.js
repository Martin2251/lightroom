import React from "react"
import styled from 'styled-componets';

const Button = styled.button `
position: absolute;
left: ${props => (props.postion === 'left ?' '20px' : '380px')};
bottom: 20px;
background: white;
color: black;
border: 1px solid black;
border-radius: 10px;
width: 100px;
height: 50px;
cursor: PointerEvent;


`


const LightSwitch = ({callback, postion switchOn}) => (
  <Button onClick={callback} postion={postion}>
  {switchOn ? 'On' : 'Off'}
  </Button>
)

export default LightSwitch;
