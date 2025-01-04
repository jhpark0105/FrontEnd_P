import React, {useState} from "react";

const Input2 = () => {
  const [params, setparams] = useState({
    irum: "",
    nai:"",
    juso:""
  });

  const {irum, juso, nai} = params;

  const changeFunc = (e) => {
    const id = e.target.id;
    const value = e.target.value; //이벤트가 트리거됨
    //입력값을 id, value에 치환한 것임

    setparams({
      ...params, //...params : 깊은 복사(구조분해할당:destructuring assignment)
      [id]:value
    });
  };

  return(
    <div>
        <br/>
        <div>
          이름 : <input type="text" value={irum} id="irum" onChange={changeFunc}/>
        </div>
        <div>
          나이 : <input type="text" value={nai} id="nai" onChange={changeFunc}/>
        </div>
        <div>
          주소 : <input type="text" value={juso} id="juso" onChange={changeFunc}/>
        </div>
        <br/>
        <table>
          <tr>
            <td>이름 : {irum}</td><td>나이 : {nai}</td><td>주소 : {juso}</td>
          </tr>
        </table>
    </div>
  );
};
export default Input2;