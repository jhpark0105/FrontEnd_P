import React, {useState} from "react";
import Child from "./Child";

function App() {
  const [fatherAge, setFatherAge] = useState(34);
  const [childAge, setChildAge] = useState(3);

  const changeFatherAge = () => { //아빠 나이 변경 이벤트 핸들러
    setFatherAge(fatherAge + 1);
  }

  const changeChildAge = () => { //자식 나이 변경 이벤트 핸들러
    setChildAge(childAge + 1); 
  }

  console.log("아빠 나이가 변경됨(리렌더링)");

  const boxStyle = {border:"1px solid", padding:"10px"};

  return (
    <div style={boxStyle}>
      <h2>👨‍🦰 아빠 (신기해)</h2>
      <span>나이 : {fatherAge}</span>&nbsp;
      <button onClick={changeFatherAge}>아빠 나이 변경</button>

      <hr/>
      <Child irum={"신통해"} nai={childAge}></Child>
      <button onClick={changeChildAge}>자녀 나이 변경</button>
    </div>
  );
}

export default App;
