import { render } from "@testing-library/react";
import { useState, useEffect } from "react";

const Clock3 = () => {
  const [date, setDate] = useState(new Date());

  //life cycle 관련 hook : useEffect : componentDidMount, componentDidUpdate, componentWillUnmount
  useEffect(()=>{
    const timerId = setInterval(()=>showSigan(), 1000);

    //componentWillUnmount에 해당하는 클린업 함수를 반환
    return () => {
      clearInterval(timerId);
    }
  },[]);

  const showSigan = () => {
    setDate(new Date());
  }

  return(
    <div>
        <h1>세번째 시계~~</h1>
        <h2>now... {new Date().toLocaleTimeString()}</h2> 
        <h2>현재 시간은... {date.toLocaleTimeString()}</h2>
      </div>
  );
}

export default Clock3;