import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEmployees} from "./action";
import axios from "axios";

const EmployeeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  //리듀서의 employeeReducer에서 관리되는 state를 조회
  const employees = useSelector((state) => state.employees);

  const dispatch = useDispatch();

  //async로 axios를 감싸는게 origin임
  const handleSearch = async() => {
    const response = await axios.get("/findjikwon.jsp",{
      params:{name:searchTerm},
    });
    //웹서버로부터 요청된 결과를 받아 Redux 상태에 저장
    dispatch(setEmployees(response.data));
  };

  return (
    <div>
      <h2>직원 이름으로 직급 검색</h2>
      <input type="text" value={searchTerm} 
      onChange={(e)=>setSearchTerm(e.target.value)} 
      placeholder="직원명 입력"/>
      <button onClick={handleSearch}>검색 결과 확인</button>
      <ul>
        {employees.map((emp)=>(
          <li key={emp.jikwonno}>
            {emp.jikwonname}님의 직급은 {emp.jikwonjik}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default EmployeeSearch;