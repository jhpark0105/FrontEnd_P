import React from "react";
import "../mycss/TodoItem.css";

const TodoItem = ({text, checked, id, onToggle, onRemove}) => {
  return(
    <div className="todo-item" onClick={()=> onToggle(id)}>
      <div className="remove" onClick={(e)=>{
        e.stopPropagation(); //onToggle이 실행되지 않도록함. 이벤트 전파 방지
        onRemove(id);
      }}>&times; {/* &times : 영어의 곱셈기호, 닫기버튼 표현하였다 */}
      </div>

      {/* CSS class를 동적으로 처리 */}
      <div className={`todo-text ${checked && 'checked'}`}>
        <div>{text}</div>
      </div>

      {checked && <div className="check-mark">✔️</div>}
    </div>
  );
};
export default TodoItem;