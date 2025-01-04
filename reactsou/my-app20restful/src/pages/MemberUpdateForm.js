import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MemberUpdateForm(){
  // /members/:num/edit
  const {num} = useParams();

  const [state, setState] = useState({ //수정할 회원을 관리
    num:0,
    name:"",
    addr:""
  })

  useEffect(()=>{
    axios.get("/members/" + num)
    .then(res => {
      setState(res.data)
    })
    .catch(error => {
      console.log(error);
    })
  },[num]) //num값에 변화가 일어나면 useEffect가 callback

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }

  const navigate = useNavigate();

  const handleUpdate = () => {
    axios.put("/members/" + num, state)
    .then(res => {
      if(res.data.isSuccess){
        alert("수정 성공");
        navigate("/members"); //수정 후 목록 보기
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  return(
    <>
      <h2>회원 수정🤔</h2>
      이름 : <input onChange={handleChange} type="text" name="name" value={state.name}/>
      <br/><br/>
      주소 : <input onChange={handleChange} type="text" name="addr" value={state.addr}/>
      <br/><br/>
      <button onClick={handleUpdate}>수정 확인</button>
    </>
  );
}