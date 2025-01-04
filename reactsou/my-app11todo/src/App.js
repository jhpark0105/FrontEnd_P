import React, {useState, useCallback} from "react";
import TodoListTemplate from "./mydir/TodoTemplate";
import Form from "./mydir/Form";
import TodoItemList from "./mydir/TodoItemList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {id:0, text:"출근(09:00)", checked:true},
    {id:1, text:"팀 회의(09:30)", checked:false},
    {id:2, text:"업무 시작", checked:false}
  ]);

  const [nextId, setNextId] = useState(3); //다음번 id 값

  //useCallback : hook의 일종으로 Memoizatioin을 구사
  //메모이제이션은 함수의 결과를 캐싱하여 동일한 입력에 대해 반복 계산을 방지하는 기법
  //[] : 의존성 배열값이 변경되지 않으면 동일 함수 인스턴스를 반환 즉, 불필요한 함수 재 생성을 방지
  const handleChange = useCallback((e)=>{
    setInput(e.target.value);
  },[]);

  //새로운 todo 항목을 생성하고, 상태를 업데이트 하기 위한 함수. Memoization을 사용
  const handleCreate = useCallback(()=>{
    if(input.trim() === "") return; //할일이없으면(비어있으면) todo항목을 생성하면 안되기때문에 return

    setTodos((prevTodos)=>
      //push는 기존 배열에 값을 추가하여 원본을 바꾼다.
      //concat은 기존 배열을 토대로 변경한 새로운 배열이 리턴된다. 기존의 배열은 바뀌지 않는다.
      prevTodos.concat({
        id:nextId,
        text:input,
        checked:false
      })
    );
    setInput("");
    setNextId((prevId)=>prevId+1);
  },[input,nextId]);//[input,nextId]가 변경되면 handleCreate가 재생성됨

  const handleKeyDown = useCallback((e)=>{
    if(e.key === "Enter"){
      handleCreate();
    }
  },[handleCreate]); //handleCreate가 변경될때마다 handleKeyDown이 재생성

  //할일(todo) 목록의 특정 항목의 완료 상태를 토글하는 함수
  //사용자가 할 일 목록에서 항목을 클릭하면 해당 항목의 상태가 변경
  const handleToggle = useCallback((id)=>{
    setTodos((prevTodos)=>
      prevTodos.map((todo)=> todo.id === id?{...todo, checked:!todo.checked}:todo))
    //id가 같을때에는 checked값을 반전시키고 그렇지 않을때에는 유지
    //기존건 안건드리고 check속성만 변경하기 위한 전개~
  },[]);

  //할일 목록의 특정 항목 삭제
  const handleRemove = useCallback((id)=>{
    setTodos((prevTodos)=>prevTodos.filter((todo)=> todo.id !== id));
    //삭제하려는 id와 일치하지 않는 항목들만 재배열(filtering 하겠다)
  });

  return (
    /* TodoListTemplate : 틀 역할 */
    <TodoListTemplate 
      form ={
        <Form value={input} 
        onKeyDown={handleKeyDown} 
        onChange={handleChange}
        onCreate={handleCreate}
        />
      }>
      
      <TodoItemList
        todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </TodoListTemplate>
  );
}

export default App;
