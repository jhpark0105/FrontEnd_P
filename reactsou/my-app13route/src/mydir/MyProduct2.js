import axios from "axios";
import React, {useState, useEffect} from "react";

const MyProduct2 = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  //컴포넌트가 mount된 후, Ajax 요청
  useEffect(()=>{
    axios("/abcreact/product.jsp", {method:"GET"})//http://localhost:8080/abcreact/product.jsp 같은 로컬이니까 앞에 생략해도됨
    .then(response => {
      setItems(response.data.items); //서버에서 받은 자료로 상태를 갱신
      setIsLoaded(true);//로딩완료
    })
    .catch ((error)=> {
        setIsLoaded(true);//로딩완료
        setError(error);
      }
    )
  },[]);

  if(!isLoaded){
    return <div>로딩중...⌛</div>;
  } 
  
  if (error) {
    return <div>Error : {error.message}</div>;
  } 

  //에러안나고 모두 통과하는 경우~
  return(
    <ul>
      {items.map((item)=>(
        <li key={item.id}>
          {item.name} {item.price}
        </li>
      ))}
    </ul>
  );
}
export default MyProduct2;