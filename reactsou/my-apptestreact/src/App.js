import React, { useState } from "react";
/*
import Greeting from './mydir/Greeting';

function App() {
  return (
    <div className="App">
      <Greeting name="박제희"/>
    </div>
  );
}

export default App;
*/
/*
import Gugudan from './Gugudan';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gugudan />
      </header>
    </div>
  );
}
export default App;
*/
function App() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if(name==="") {
      alert("이름을 입력해 주세요.");
      return;
    }
    setResult(name);
  }

  return (
    <div className="App">
      <form onSubmit={handleChange}>
      이름 입력 : <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button type="submit">확인</button>
      </form>
      <br/>
      결과는 {result}
    </div>
  );
}
export default App;
