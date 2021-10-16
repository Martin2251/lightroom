import logo from './logo.svg';
import './App.css';

import Lamp from "./Lamp";
  import LightSwitch from "./LightSwitch";

  const Room = styled.div
  postion: relative
  width: 500px
  height: 500px;
  border: 10px solid black;
  margin: 0 auto ;

function App() {

  //lamp one
  const [isLampOneOn, setIsLampOneOn] = useState(false);

  // lamp 2
  const [isLampTwoOn, setIsLampTwoOne] = useState(true);

  const handlseSwitchOne = () => setIsLampOneOn(prev => !prev);
  const handleSwitchTwo = () => setIsLampTwoOne(prev => !prev);




  return (
    <Room>
      <Lamp lampOm = {isLampOneOn} postion="left" />
      <Lamp lampOm = {isLampOneOn} postion="right" />
      <LightSwitch
      name="one"
      callback={handlseSwitchOne}
      switchOn= {isLampOneOn}
      postion="left"
 />
       <LightSwitch
      name="two"
      callback={handleSwitchTwo}
      switchOn= {isLampTwoOn}
      postion="right"
 />

    </Room>

    </div>
  );
}

export default App;
