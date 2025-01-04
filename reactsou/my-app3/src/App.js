/*
//클래스형 컴포넌트
import { Component } from "react";
import HookTest from "./mydir/HookTest";
import HookTest2 from "./mydir/HookTest2";

class App extends Component{
  state = {
    count:0 //지역 변수 : state 상태 변수 - 컴포넌트 내부에서 사용(관리)하는 동적인 데이터
  };

  countUpdate(n){
    this.setState({count : n});
  }

  render(){
    const {count} = this.state;
    return(
      <div>
        <h2>지역변수 state</h2>
        number : {count}&nbsp;&nbsp;
        <button onClick={()=>{
          this.countUpdate(count+1);
        }}>증가1</button>
        <hr/>
        <HookTest></HookTest>
        <hr/>
        <HookTest2></HookTest2>
      </div>
    );
  }
}
//이런식으로 운영하면 버추얼돔이 리렌더링한다 -> {count} 이 부분만
*/
//함수 타입
import { useState, useEffect } from "react";
import HookTest from "./mydir/HookTest";
import HookTest2 from "./mydir/HookTest2";

const App = () => {
  const [count, setCount] = useState(0);

  const countUpdate = (n) => {
    setCount(n);
  };

  useEffect(()=>{
    let a = 1;
    console.log(a);
  },[]);// 배열이있으면 채워주면됨

  return(
    <div>
       <h2>지역변수 state(함수형)</h2>
        number : {count}&nbsp;&nbsp;
        <button onClick={()=>{
          countUpdate(count+1);
        }}>증가1</button>
        <hr/>
        <HookTest></HookTest>
        <hr/>
        <HookTest2></HookTest2>
    </div>
  );
}

export default App;
