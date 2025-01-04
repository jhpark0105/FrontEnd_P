import axios from "axios";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';// Bootstrap CSS

const Jikwon = () => {
  const [busername, setBusername] = useState(""); //검색할 부서명
  const [jikwons, setJikwons] = useState([]); //검색 결과 저장
  const [error, setError] = useState(null);

  const onChange = (e) => {
    //console.log('onChange Value:', e.target.value);
    setBusername(e.target.value);
  };

  // 데이터를 서버에서 가져오는 함수
  const fetchData = () => {
    if (busername.trim() === "") {
      alert("부서명을 입력하세요.");
      return;
    }
    console.log("부서명 검색:", busername);
    axios
      .get(`/api/jikwon?busername=${busername}`)
      .then((response) => {
        console.log("Fetched data:", response.data);
        setJikwons(response.data || []); // 서버에서 받은 자료로 상태 갱신
      })
      .catch((error) => {
        setError(error);
      });
  };

  const totalPay = jikwons.reduce((sum, item) => sum + item.jikwonpay, 0);
  const avgPay = jikwons.length > 0 ? (totalPay / jikwons.length).toFixed(1) : 0;

  if (error) {
    return <div>Error : {error.message}</div>;
  }

  return (
    <div>
      <div>
        부서명 : <input type="text" value={busername} onChange={onChange} />
        &nbsp;<button onClick={fetchData} className="btn btn-outline-success">확인</button>
      </div>
      <hr/>
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>사번</th><th>이름</th><th>부서명</th><th>직급</th><th>연봉</th>
            </tr>
          </thead>
          <tbody>
            {jikwons.length > 0 ? (
              jikwons.map((item, index) => (
                <tr key={index}>
                  <td>{item.jikwonno}</td>
                  <td>{item.jikwonname}</td>
                  <td>{item.buserDto.busername}</td>
                  <td>{item.jikwonjik}</td>
                  <td>{item.jikwonpay}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">검색된 데이터가 없습니다.</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">인원수: {jikwons.length} 명</td>
              <td colSpan="3">연봉 평균: {avgPay} 만원</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Jikwon;