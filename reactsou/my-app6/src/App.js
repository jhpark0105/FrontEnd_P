import './App.css';
import React,{useState} from 'react';

function App() {
  const [meter, setMeter] = useState(0);
  const [centimeter, setCentimeter] = useState(0);

  function changeLength(){
    setCentimeter(meter * 100);
  }

  const changeMeter = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setMeter(value);
  }

  return (
    <div className="App">
      <h1>📐길이 환산📏</h1>
          <input type="number" value={meter} onChange={changeMeter}></input>
          <button onClick={changeLength}>계산</button>
        <br/>
        미터 : {meter} m / 센티미터 : {centimeter} cm
    </div>
  );
}

export default App;
