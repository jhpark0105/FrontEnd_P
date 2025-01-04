/*
import { useState } from "react";

//취미 내용 출력용 컴포넌트
function HobbyList({itemsProps}){
  return(
    <ul>
      {itemsProps.map((item)=>(
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}


function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.length === 0){
      return;
    }
    
    const newItem = {
      text:text,
      id:Date.now()
    }

    // 리액트가 상태 업데이트를 수행할 때 현재 상태를 콜백함수에 전달해 새로운 상태를 생성
    // preItems 배열의 모든 요소를 새로운 배열에 복사한 새로운 배열에 newItem을 추가. 새로운 배열은 newItem을 가짐
    setItems((preItems)=>[...preItems, newItem]); //새로운 배열을 반환
    console.log(items);
    setText("");
  }

  return (
    <div>
      <h2>취미 목록</h2>
      <HobbyList itemsProps={items}></HobbyList>

      <form onSubmit={handleSubmit}>
        <label htmlFor="new-hobby">취미는</label>
        <input id="new-hobby" onChange={handleTextChange} value={text}/>
        &nbsp;&nbsp;
        <button>클릭 #{items.length}</button>
      </form>
      <br/>
      <div>총 건수 : {items.length}</div>
    </div>
  );
}

export default App;
*/

//function type ---> class type으로 코딩하기
import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {items:[], text:""};
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return(
      <div>
      <h2>취미 목록</h2>
      <HobbyList itemsProps={this.state.items}></HobbyList>

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-hobby">취미는</label>
        <input id="new-hobby" onChange={this.handleTextChange} value={this.state.text}/>
        &nbsp;{" "} {/*이렇게 띄어줘도 됨 */}
        <button>클릭 #{this.state.items.length}</button>
      </form>
      <br/>
      <div>총 건수 : {this.state.items.length}</div>
    </div>
    );
  }

  handleTextChange(e){
    this.setState({text:e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.text.length === 0){
      return;
    }
    
    const newItem = {
      text:this.state.text,
      id:Date.now()
    };

    //setItems((preItems)=>[...preItems, newItem]); //새로운 배열을 반환
    //console.log(items);
    //setText("");
    //이렇게 쓸 내용을 아래와 같이 쓴다
    this.setState(state => ({
      items:this.state.items.concat(newItem),
      text:""
    }));
  }

}
export default App;

class HobbyList extends React.Component{
  render(){
    return(
      <ul>
        {this.props.itemsProps.map((item)=>(
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
