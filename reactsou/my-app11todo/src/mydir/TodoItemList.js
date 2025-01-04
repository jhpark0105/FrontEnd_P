import React from "react";
import TodoItem from "./TodoItem";

const TodoItemList = ({todos, onToggle, onRemove}) => {
  //return(
  //  <div>
  //    <TodoItem text="안녕"/>
  //    <TodoItem text="친구야"/>
  //    <TodoItem text="준비됐니?"/>
  //  </div>
  //);
  

  const todoList = todos.map((todo)=>(
    <TodoItem
        {...todo}
        onToggle={onToggle}
        onRemove={onRemove}
        key={todo.id}
    />
  ));
  return <div>{todoList}</div>
}
export default TodoItemList;