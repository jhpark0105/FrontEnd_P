//function type의 컴포넌트
import { useState } from "react"; //useState는 hook의 일종으로 state를 지원하는 hook을 호출하겠다 => state를 쓸수있게됨 -> 아래에서 useState씀

const HookTest = () => {
  const [count, setCount] = useState(0); //[state변수, state수정함수]
  //count는 초기값을 0로 기억(useState), 수정한 count를 setCount에 저장
  //수정 안할려면 [count] 만 써줌
  console.log(useState(0));

  return (
    <div>
      number : {count}&nbsp;&nbsp;
      <button onClick={()=>setCount(count+1)}>증가2</button>
    </div>
  );
}

export default HookTest;