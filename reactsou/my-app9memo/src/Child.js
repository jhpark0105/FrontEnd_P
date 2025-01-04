import React, {memo} from "react";

const boxStyle = {border:"1px dotted blue", padding:"10px"};

const Child = ({irum, nai}) => {
  console.log("자녀 나이 변경됨(리렌더링)");

  return(
    <div style={boxStyle}>
      <h3>* 자녀 1</h3>
      <p>이름 : 신통한</p>
      <p>나이 : 8살</p>
      <hr/>
      <h3>* 자녀 2</h3>
      <p>이름 : {irum}</p>
      <p>나이 : {nai}살</p>
    </div>
  );
}

//export default Child;
export default memo(Child); 
//memo 함수를 사용할때 export를 할때 파일명을 memo함수로 감싸주면됨
//불필요한 렌더링을 방지해줌 