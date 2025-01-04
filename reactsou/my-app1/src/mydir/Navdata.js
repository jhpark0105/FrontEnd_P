import React, {Component} from 'react';

class Navdata extends Component {
  render(){
    return(
      <ul>
        <li><a href="https://www.naver.com">네이버</a></li>
        <li><a href="https://www.daum.net">다음</a></li>
        <li><a href="../abc.html">abc 문서</a></li>
        <strong>{this.props.msg}</strong>
        <i>{this.props.msg2}</i>{/*readonly*/} 
      </ul>
    );
  }
}
export default Navdata; //다른 파일 어디서든 불러다 쓸 수 있다.