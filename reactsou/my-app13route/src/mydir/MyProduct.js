import React, {useState, useEffect} from "react";

const MyProduct = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  //컴포넌트가 mount된 후, Ajax 요청
  useEffect(()=>{
    fetch("/abcreact/product.jsp", {method:"GET"})//http://localhost:8080/abcreact/product.jsp 같은 로컬이니까 앞에 생략해도됨
    .then(res => {
      if(!res.ok){
        throw new Error('네트워크 오류');
      }
      return res.json(); //json 변환
    })
    .then((result)=>{
      setIsLoaded(true);
      setItems(result.items);
    },
  (error)=> {
    setIsLoaded(true);
    setError(error);
  })
  },[]);

  if(error){
    return <div>Error : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>로딩중...⌛</div>;
  } else { //에러안나고 모두 통과하는 경우~
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
};
export default MyProduct;