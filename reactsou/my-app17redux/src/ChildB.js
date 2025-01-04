import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/ResourceSlice";

export default function ChildB(){
  const storeValue = useSelector((state) => state.resource.value);
  const dispatch = useDispatch();

  return(
    <div>
      <h3>ChildB</h3>
      <p>리덕스 스토어 내의 state 값 value는 {storeValue}</p>
      <button onClick={()=>dispatch(decrement())}>state 값 value 감소</button>
    </div>
  );
}