import React, {useState, useCallback} from "react";
import BangmunListTemplate from "./mydir/BangmunListTemplate";
import BangmunList from "./mydir/BangmunList";
import Form from "./mydir/Form";

function App() {
  const[clientName, setClientName] = useState(""); //거래처 이름
  const[address,setAddress]= useState(""); //주소
  const[visitDate, setVisitDate] = useState(""); //방문일
  const[visits, setVisits] = useState([]); //거래처 방문기록 데이터를 저장
  const [nextId, setNextId] = useState(1);

  const handleClientChange = useCallback((e)=>{ setClientName(e.target.value);},[]);
  const handleAddressChange = useCallback((e)=>{ setAddress(e.target.value);},[]);
  const handleDateChange = useCallback((e)=>{ setVisitDate(e.target.value);},[]);

  const addVisit = useCallback(()=>{
    if(clientName.trim() === "") return;
    if(address.trim() === "") return;
    if(visitDate.trim() === "") return;

    setVisits((prevVisits)=>
      prevVisits.concat({
        id:nextId,
        clientName,
        address,
        visitDate,
      })
    );
    setClientName("");
    setAddress("");
    setVisitDate("");
    setNextId((prevId)=>prevId+1);
  },[clientName,address,visitDate,nextId]);

  const handleKeyDown = useCallback((e)=>{
    if(e.key === "Enter"){
      addVisit();
    }
  },[addVisit]);

  const deleteVisit = useCallback((id)=>{
    setVisits((prevVisits)=>prevVisits.filter((visits)=>visits.id !== id));
  },[]);

  const clearVisit = useCallback(() => {
    setVisits([]);
  }, []);

  return (
    <BangmunListTemplate 
      form ={
        <Form 
        clientName={clientName}
        address={address}
        visitDate={visitDate}
        onKeyDown={handleKeyDown}
        onClientChange={handleClientChange}
        onAddressChange={handleAddressChange}
        onDateChange={handleDateChange}
        onCreate={addVisit}
        />
      }>
      
      <BangmunList
         visits={visits}
         onRemove={deleteVisit} // 특정 방문기록 삭제
         onRemoveAll={clearVisit} // 모든 방문기록 초기화
      />

      <button onClick={clearVisit}>전체 삭제</button>
    </BangmunListTemplate>
  );
}

export default App;
