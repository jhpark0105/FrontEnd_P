import React from "react";
import ShowNumber from "./ShowNumber";
import { useSelector } from "react-redux";

//const ShowNumberSuper = (props) => {
const ShowNumberSuper = () => {
  //useSelector로 redux의 상태(state)를 가져옴
  //store의 상태(state)가 변경되면, useSelector를 사용하는 모든 컴포넌트도 리렌더링
  const number = useSelector((state)=> state.number);  
  return(
    <div id="super">
      <h1>Show Number Super</h1>
      Show Number Super의  number : {number}
      <ShowNumber number={number}/>
    </div>
  );
};
export default ShowNumberSuper;