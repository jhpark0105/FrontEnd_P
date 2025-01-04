import React from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import MyTest from "./mydir/Test";
import HelloAbout from "./mydir/About";
import CountFriend from "./mydir/Count";
import Input1 from "./mydir/Input1";
import Input2 from "./mydir/Input2";
import Multidata from "./mydir/Multidata";
import MyProduct from "./mydir/MyProduct";
import MyProduct2 from "./mydir/MyProduct2";

function App() {
  return (
    <Router>
    <div className="App">
      <h2>라우팅 연습</h2>
      <MyTest/>
      <hr/>
      <nav>
        <Link to="/">Test 화면</Link>&nbsp;|&nbsp;
        <Link to="/about">About 화면</Link>&nbsp;|&nbsp;
        <Link to="/friend">친구추가</Link>&nbsp;|&nbsp;
        <Link to="/input1">입력화면1</Link>&nbsp;|&nbsp;
        <Link to="/input2">입력화면2</Link>&nbsp;|&nbsp;
        <Link to="/multi">배열 자료</Link>&nbsp;|&nbsp;
        <Link to="/kbs/product">상품 정보(Ajax)</Link>&nbsp;|&nbsp;
        <Link to="/kbs/product2">상품 정보(Axios)</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MyTest/>}></Route> {/* element에 적어준 컴포넌트 이동 */}
        <Route path="/about" element={<HelloAbout/>}></Route>
        <Route path="/friend" element={<CountFriend/>}/>
        <Route path="/input1" element={<Input1/>}/>
        <Route path="/input2" element={<Input2/>}/>
        <Route path="/multi" element={<Multidata/>}/>
        <Route path="/kbs/product" element={<MyProduct/>}/>
        <Route path="/kbs/product2" element={<MyProduct2/>}/>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
