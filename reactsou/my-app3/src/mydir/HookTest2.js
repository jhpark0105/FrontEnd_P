import { useState } from "react";
import "../App.css";
import pic1 from "../Chachaping.jpg"; //src 폴더 내의 이미지

export default function HookTest2(){ //여기서 바로 export 해줄 수 있다.
  const [item,setItem] = useState(0);

  const incrementItem = () => setItem(item+1);
  const decrementItem = () => setItem(item-1);

  const mystyle = {color:'blue', textAlign:'center', fontSize:'30pt'}

  return(
    <div className="App">
      <div>
      number : {item} &nbsp;&nbsp;
      <button onClick={incrementItem}>증가</button>
      <button onClick={decrementItem}>감소</button>
      </div>
      {/* CSS style 적용 연습 : style 속성 값은 {} 안에 적음*/}
      <h2 className="black_bar">리액트에서 스타일 적용</h2>
      <h2 style={mystyle}>리액트에서 스타일 적용2</h2>
      <h2 style={{color:"red", textAlign :'right'}}>리액트에서 스타일 적용3</h2>

      {/* image 적용 연습 */}
      <div>
        <img src={pic1} alt="이미지 읽기"></img>
      </div>
      <div className="image_bg"></div>
      <div>
        <img style={{width:"200px"}} src={`${process.env.PUBLIC_URL}/images/heartsping.png`} alt="public 이미지 읽기"></img>
      </div>
    </div>
  );
}

//export default HookTest2;