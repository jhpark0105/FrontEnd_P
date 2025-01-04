import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCustomers } from "./action";
import axios from "axios";

const CustomerSearch = () => {
  const [searchTel, setSearchTel] = useState("");

  //리듀서의 employeeReducer에서 관리되는 state를 조회
  const customers = useSelector((state) => state.customers);

  const dispatch = useDispatch();

  //async로 axios를 감싸는게 origin임
  const handleSearch = async() => {
    const response = await axios.get("/findgogek.jsp",{
      params:{phone:searchTel},
    });
    //웹서버로부터 요청된 결과를 받아 Redux 상태에 저장
    dispatch(setCustomers(response.data));
  };

  return (
    <div>
      <h2>고객 전화번호 고객 검색</h2>
      <input type="text" value={searchTel} 
      onChange={(e)=>setSearchTel(e.target.value)} 
      placeholder="전화번호 입력"/>
      <button onClick={handleSearch}>검색 결과 확인</button>
      <ul>
        {customers.map((cus)=>(
          <li key={cus.gogekno}>
            {cus.gogekname}님의 전화번호는 {cus.gogektel}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CustomerSearch;