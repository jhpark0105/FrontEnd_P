import { Component } from "react";

class MyName extends Component{
  /*
  static defaultProps = {
    name:"신기해"
  }
  */
  render(){
    return(
      <div>
        안녕 내 이름은 <b>{this.props.name}</b>&nbsp;&nbsp;
        사는 곳은 <b>{this.props.addr}</b> {/*이 값은 변화를 줄 수 없다 */}
      </div>
    );
  }
  
}

MyName.defaultProps = {
  name:"신기한"
}

export default MyName;