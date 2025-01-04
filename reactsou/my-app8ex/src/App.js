import { useState } from "react";

function App() {
  const [sangpumList, setSangpumList] = useState([]);
  const [code, setCode] = useState("");
  const [sangpum, setSangpum] = useState("");
  const [price, setPrice] = useState("");
  const [showTable, setShowTable] = useState(false);

  const handleCodeChange = (e) => setCode(e.target.value);
  const handleSangpumChange = (e) => setSangpum(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === "" || sangpum === "" || price === "") {
      alert("모든 항목을 입력해 주세요.");
      return;
    }
    
    const newSangpum = {
      code: parseInt(code),
      sangpum,
      price: parseFloat(price),
    };

    setSangpumList((preList) => [...preList, newSangpum]);
    setCode("");
    setSangpum("");
    setPrice("");
  }

  const handleShowTable = () => {
    setShowTable(true); // 테이블 표시 상태를 true로 변경
  };

  const totalSangpums = sangpumList.length;
  const totalPrice = sangpumList.reduce((sum,item)=> sum+item.price,0);
  const averagePrice = totalSangpums > 0 ? (totalPrice/totalSangpums) : 0;

  //결과 출력용 컴포넌트
  function Sangpums({sangpumProps}){
    return(
      <table border={1}>
        <thead>
          <tr>
            <th>코드</th><th>상품명</th><th>가격</th>
          </tr>
        </thead>
        <tbody>
          {sangpumProps.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.sangpum}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>건수: {totalSangpums}</td>
            <td>총합: {totalPrice}</td>
            <td>평균: {averagePrice}</td>
          </tr>
        </tfoot>
      </table>
    );
  }

  //삭제용 컴포넌트
  const deleteSangpum = () => {
    setSangpumList(sangpumList.slice(0, sangpumList.length - 1));
  };


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        코드 : <input type="text" value={code} onChange={handleCodeChange}/><br/>
        상품명 : <input type="text" value={sangpum} onChange={handleSangpumChange}/><br/>
        가격 : <input type="text" value={price} onChange={handlePriceChange}/>&nbsp;&nbsp;
        <button type="submit">등록</button>&nbsp;
        <button type="button" onClick={deleteSangpum}>삭제</button><br/><br/>
      </form>
      <button type="button" onClick={handleShowTable}>결과보기</button><br/><br/>
      {showTable && <Sangpums sangpumProps={sangpumList} />}
    </div>
  );
}

export default App;
