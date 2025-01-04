import './App.css';
import AddNumberSuper from './mydir/AddNumberSuper';
import ShowNumberSuper from './mydir/ShowNumberSuper';

function App() {
  return (
    <div className="App">
      <h1>메인(리덕스 사용)</h1>
      <AddNumberSuper/>
      <br/>
      <ShowNumberSuper/> 
    </div>
  );
}
export default App;