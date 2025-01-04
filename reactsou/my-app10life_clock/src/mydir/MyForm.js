import { useState, useEffect } from "react";

function MyForm(){
  const [formData, setFormData] = useState({
    irum:"",
    nai:"",
    menu:"아이스 아메리카노"
  });

  const dataChange = (e) => {
    const name = e.target.name; //form tag내의 name 속성 저장
    const value = e.target.value; //value는 name일수도, nai일수도, menu일수도 있다.
    
    //value 확인용
    //console.log({[name]:value});
    //console.log({...formData});

    setFormData({
      ...formData, //formData 상태를 갱신, 기존 객체를 복사한 후, 특정필드만 갱신. 기존 상태를 유지하며 필요한 부분만 덮어쓰기
      [name]:value
    });
  };

  const dataSubmit = (e) => {
    e.preventDefault();
    const {nai} = formData;
    if(!Number(nai)||isNaN(Number(nai))){
      alert("나이는 숫자로 입력");
    }
  }

  //life cycle 관련
  useEffect(()=>{
    console.log("MyForm 컴포넌트가 마운트됨 : componentDidMount");
    return()=>{
      console.log("MyForm 컴포넌트가 언마운트됨 : componentWillUnmount");
    }
  },[]);

  useEffect(()=>{
    console.log("MyForm 컴포넌트가 갱신될 때마다 update됨 : componentDidUpdate");
  },[formData]);

  return (
    <>
    <h3>안녕 {formData.irum}, 넌 {formData.nai}살~, 선택한 음료는 {formData.menu}</h3>
      <form onSubmit={dataSubmit}>
        이름 입력 : <input type="text" name="irum" onChange={dataChange}/><br/>
        나이 입력 : <input type="text" name="nai" onChange={dataChange}/><br/>
        음료 선택 : 
        <select name="menu" value={formData.menu} onChange={dataChange}>
          <option value={"아이스 아메리카노"}>아이스 아메리카노</option>
          <option value={"라떼"}>라떼</option>
          <option value={"레모네이드"}>레모네이드</option>
          <option value={"밀크티"}>밀크티</option>
        </select>
        <br/>
        <button type="submit">전송</button>
      </form>
    </>
  );
}
export default MyForm;