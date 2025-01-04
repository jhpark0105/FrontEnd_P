import React, { useEffect, useState } from "react";

export default function Gugudan () {
  const dan = 3;
  const [lists, setLists] = useState([]);

  function gugu(dan){
    const newLists = [];
    for (let i = 1; i <= 9; i++) {
      newLists.push(`${dan} x ${i} = ${dan * i}`);
    }
    setLists(newLists);
  }

  useEffect(() => {
    gugu(dan);
  }, [dan]);

  return (
    <div>
      <h1>구구단 {dan}단 결과</h1>
      <br/>
      <ul>
        {lists.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}