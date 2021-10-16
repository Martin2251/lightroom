const Wrapper = styled.div`
  position: absolute;
  left: ${(props) => (props.postion === "left" ? "20px" : "380px")};
  top: 20px;
  background: ${(props) => (props.lampOn ? "orange" : "lightgrey")};
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Lamp = ({ lampOn, position }) => (
  <Wrapper lampOn={LampOn} position={position}>
    <div />
  </Wrapper>
);

export default Lamp;
