import axios from "axios";
import { useEffect, useState } from "react";

export default function Exercise(){
  const [exercises, setExercises] = useState([]);

  const refresh = () => {
    axios.get("/listAll")
    .then(res => {
      setExercises(res.data);
    })
    .catch(error => {
      console.log(error);
    })
  };

  useEffect(()=>{
    refresh();
  },[]);

  //const navigate = useNavigate();

  return(
    <>
      <h1>전체 자료</h1>
      <table border="1"> 
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>duration</th>
            <th>calorie</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.duration}</td>
              <td>{item.calorieburn}</td>
              <td>
                <button>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

}