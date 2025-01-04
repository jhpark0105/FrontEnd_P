import { useState } from 'react';
import './App.css';
import AddNumberSuper from './mydir/AddNumberSuper';
import ShowNumberSuper from './mydir/ShowNumberSuper';

function App() {
  const [number, setNumber] = useState(0);

  const handleAddNumber = (size) => {
    setNumber(number + size); //state update 상태 갱신
  }

  return (
    <div className="App">
      <h1>메인</h1>
      <AddNumberSuper onClick={handleAddNumber}/>
      AddNumber : {number}
      <br/>
      <ShowNumberSuper number={number}/> 
    </div>
  );
}

export default App;
