import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/ResourceSlice";

export default function ChildA(){
  const value = useSelector((state)=> state.resource.value);
  const dispatch = useDispatch();

  return(
    <div>
      <h3>ChildA</h3>
      <p>공유 값 : {value}</p>
      <button onClick={() => dispatch(increment())}>값 증가</button>
      <button onClick={() => dispatch(reset())}>값 초기화</button>
    </div>
  );
}