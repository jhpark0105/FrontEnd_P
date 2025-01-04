import React, {Component} from "react";

class Component1 extends Component{
  render(){
    const clickHandler= () => {
      console.log("자체적으로 선언된 함수 실행");
    };

    const keyupHandler = (e) => {
      console.log("입력한 값은 : " , e.target.value);
    };

    return (
      <div>
        <h2>{this.props.title}</h2>
          {this.props.subtitle}
          <br/>
          버튼으로 이벤트 발생 : &nbsp;
          <button onClick={function(){
            this.props.changeData();
          }.bind(this)}>이벤트 발생</button>
          <br/><br/>
          <button onClick={clickHandler}>두번째 버튼</button>
          <br/><br/>
          데이터 입력 : <input type="text" onKeyUp={keyupHandler}/>
      </div>
    );
  }
}

export default Component1;