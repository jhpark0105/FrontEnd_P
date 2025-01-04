// eslint-disable : warning에 eslint를 안보고싶을때 설정 
import './App.css';
import React, {useState} from 'react';


function App() {
  let irum = "제희의 JSX 사용법";
  let title = "이건 타이틀"; //js함수의 지역변수(일반, state아니야~~)
  
  const [jemok,setJemokFunc] = useState("자바스크립트"); //문자, 숫자, 배열, 객체 ... 등이 저장 대상이다.
  const [jemok2,setJemokFunc2] = useState(["리액트","자바"]);
  
  //이벤트 처리용 함수 (내부함수)
  function dataUpdate(){
    //alert("a");
    title = "타이틀을 바꾸자"; //virtual Dom이 re-rendering 되지 않음
    //title은 일반변수이기 때문에 변경 안됨 props나 state여야 dom이 리렌더링하면서 바뀜
    setJemokFunc('오라클');

  }

  function dataUpdate2(){
    let newArr = [...jemok2]; // ... : 전개 연산자
    console.log(newArr);
    newArr[1] = "백엔드 프로그램의 왕";
    setJemokFunc2(newArr);
  }

  //이벤트 처리 계속
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <div className='redbar'>
        <h2>리액트의 이해</h2>
      </div>
      <div className='list'>
        <h3>이름은 {irum}</h3>
        <p>스테이트 변수 확인</p>
        <span>일반 변수 : <b>{title}</b></span><br/>
        <span>State 변수 : <i>{jemok}</i></span>
        <button onClick={dataUpdate}>title , jemok 변경</button>
        <hr/>
        <div>{jemok2[0]}</div>
        <div>{jemok2[1]}</div>
        <button onClick={dataUpdate2}>jemok2 변경</button>
        <br/><br/>
        그림 클릭 : <span onClick={()=> {setCount(count+1)}}>🥰❤️</span>&nbsp;
        클릭 횟수 : {count}
      </div>
    </div>
  );
}

export default App;
