import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Exercise from './pages/Exercise';

function App() {
  return (
    <div className="App">
      <h1>운동 기록 👟</h1>
      <nav>
          <Link to="/listAll">전체 자료 출력</Link>&nbsp;|&nbsp;
          <Link to="/">운동 정보 등록</Link>&nbsp;|&nbsp;
          <Link to="/">칼로리 소모량 수정</Link><hr/>
      </nav>
      <Routes>
        <Route path="/listAll" element={<Exercise />} />
      </Routes>
    </div>
  );
}

export default App;
