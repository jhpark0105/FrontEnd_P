import React from "react";

//mount(DOM이 생성되고 결과가 출력되는 것을 의미)
//mount 호출 순서 : constructor -> getDerivedStateFromProps -> render -> componentDidMount
class Clock2 extends React.Component {
  //시간을 동적으로 움직이게 하려면 state가 필요함
  constructor(props){ //생성자 메소드
    super(props); 
    this.state = {date:new Date()};
  }

  componentDidMount(){ 
    // life cycle 관련 callback method //Component가 출력되고 나면 그 이후에 발생됨
    this.timerId = setInterval( //setInterval : 일정한 시간 간격을 두고 함수를 호출할것이다
      //setInterval(함수, 지연시간)
      ()=>this.showSigan(), 1000
      //showSigan 함수를 1초에 한번씩 불러오겠다. 
    );
  }

  //컴포넌트가 화면에서 사라지기 바로 직전에 자동 호출, 주로 마무리 작업에서 사용
  componentWillUnmount(){
    //타이머 해제 작업
    clearInterval(this.timerId);
  }

  showSigan(){ //시간 출력용
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div>
        <h1>Welcome~~</h1>
        <h2>now... {new Date().toLocaleTimeString()}</h2> 
        <h2>현재 시간은... {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
export default Clock2;