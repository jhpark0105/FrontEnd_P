import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';// Bootstrap CSS

const Gugudan = () => {
  const [dan, setDan] = useState(1);
  const [lists, setLists] = useState([]);

  const changeFunc = (e) => {
    const value = Number(e.target.value);
    setDan(value);
  }

  const guguFunc = () => {
    const newLists = [];
    for (let i = 1; i <= 9; i++) {
      newLists.push(`${dan} x ${i} = ${dan * i}`);
    }
    setLists(newLists); // 상태 업데이트
  };

  return(
    <div>
      <div>
        단 입력 : <input type="number" value={dan} onChange={changeFunc}/>
        &nbsp;
        <button onClick={guguFunc} className="btn btn-outline-success" >확인</button>
      </div>
      <hr/>
      <div>
        {lists.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};
export default Gugudan;