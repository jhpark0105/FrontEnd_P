import { Component } from "react";
import Navdata from "./mydir/Navdata";

//클래스 컴포넌트 (유닛화) : //조립식 프로젝트에서 효과적으로 사용할 수 있다
class Subject extends Component {
  render(){ //함수에서는 render 필요없이 return만 해주면 된다.
    return (
      <header> {/* root? 는 꼭줘야함 할거 없으면 그냥 <> </> 만 해주기 */}
        <h1>머리글 : 웹 문서</h1>
      </header>
    );
  }
}

function Welcome(props){ //js //자식 컴포넌트(Sub)
  let kbs = "공영방송"; //js
  return(//이 밑부터는 jsx
    <article>
      {props.who} 글 기사 내용 {/* 넘겨받은 파라미터를 나타내려면 { }로 파라미터명을 감싸줘야한다 */}
      {kbs}
    </article>
  );
}

//props : 부모가 자식에게 던져주는 값, 무조건 이 이름을 쓸 필요는 없지만 주로 이 명칭을 쓴다

function App() {//자바스크립트에 html처럼 만듬 -> JSX //부모 컴포넌트(Main)
  return ( 
    <div className="App"> {/* JSX 주석 */}
      우히히
      <Subject></Subject>{/* 컴포넌트 호출 */}
      <hr/>{/* JSX 문법에서는 무조건 닫아줘야한다 */}
      <Welcome who="나길동"></Welcome>
      <br></br>
      <Navdata msg="부모가 정보 전달" msg2="전달2"></Navdata>
    </div>
  );
}

export default App;
