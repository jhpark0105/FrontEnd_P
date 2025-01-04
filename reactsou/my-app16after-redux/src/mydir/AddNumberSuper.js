import React from "react";
import AddNumber from "./AddNumber";
import { useDispatch } from "react-redux";

//const AddNumberSuper = (props) => {
  const AddNumberSuper = () => {
  const dispatch = useDispatch();//컴포넌트 내에서 dispatch를 쓸수있도록 초기화

  //type: Redux(reducer)에서 실행할 작업의 종류를 결정(문자열)
  //payload: store의 state를 업데이트할 데이터(값)
  const handleClick = (size) => {
    dispatch({type:"INCREASE_NUMBER", payload:size}) //reducer의 계산 로직을 호출
  }

  return(
    <div id="super">
      <h1>Add Number Super</h1>
      <AddNumber onClick={handleClick}/>
    </div>
  );
};
export default AddNumberSuper;