import React from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Gugudan from "./mydir/Gugudan";
import Jikwon from "./mydir/Jikwon";
import 'bootstrap/dist/css/bootstrap.min.css';// Bootstrap CSS

function App() {
  return (
    <Router>
      <div className="App">
        <h2>메인 화면</h2>
        <hr/>
        <nav>
          <Link to="/gugudan">구 구 단</Link>&nbsp;|&nbsp;
          <Link to="/jikwonlist">직 원 자 료</Link>
        </nav>
        <hr/>
        <Routes>
          <Route path="/gugudan" element={<Gugudan/>} />
          <Route path="/jikwonlist" element={<Jikwon/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
