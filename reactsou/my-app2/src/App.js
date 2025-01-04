import { Component } from "react";
import MyName from "./mydir/MyName";
import MyNickName from "./mydir/MyName2";

function App() {
  return (
    <div className="App">
      <h2>props 연습</h2>
      <MyName></MyName>
      <MyName name="한가해" addr="강남구 역삼동 123"></MyName>
      <hr/>
      <MyNickName></MyNickName>
      <MyNickName name="한가해" addr="강남구 역삼동 123"></MyNickName>
    </div>
  );
}

/*
import { Component } from "react";

class App extends Component{
  render(){
    return(
      <div className="App">
      <h2>props 연습</h2>
    </div>
    );
  }
}
*/
export default App;
