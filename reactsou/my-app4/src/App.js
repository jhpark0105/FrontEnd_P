import './App.css';
import { useState } from 'react';
import MyComp1 from './mydir/Component1';
import MyComp2 from './mydir/Component2';

const App = () => {
  const [subject] = useState({title:'웹문서', subtitle:'오늘 금요일'});

  const [friends] = useState([
    {bun:1, irum:'제희', nai:25},
    {bun:2, irum:'서현', nai:25}
  ]);

  const handleChangeData = () => { //eventhandler function
    friends.forEach(friend => {
      console.log(`${friend.bun} 번 ${friend.irum} : 나이는 ${friend.nai} 살`);
    });
  }

  return (
    <div className="App">
      <h2>이벤트 연습</h2>
      <MyComp1 title={subject.title} subtitle={subject.subtitle}
      changeData = {handleChangeData}></MyComp1>
      <br/>
      <MyComp2 title={subject.title} subtitle={subject.subtitle}
      friends = {friends} changeData = {handleChangeData}></MyComp2>
    </div>
  );
}

export default App;
