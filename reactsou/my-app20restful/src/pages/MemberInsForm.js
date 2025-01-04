import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MemberInsForm(){
  const navigate = useNavigate();
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }

  const handleSave = () => {
    axios.post("/members", state)
    .then(res => {
      if(res.data.isSuccess){
        alert("추가 성공");
        navigate("/members"); //추가 후 목록 보기
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  return(
    <>
      <h2>새 회원 입력👩</h2>
      번호 : <input onChange={handleChange} type="text" name="num" placeholder="번호 입력"/>
      <br/><br/>
      이름 : <input onChange={handleChange} type="text" name="name" placeholder="이름 입력"/>
      <br/><br/>
      주소 : <input onChange={handleChange} type="text" name="addr" placeholder="주소 입력"/>
      <br/><br/>
      <button onClick={handleSave}>추가</button>
    </>
  );
}