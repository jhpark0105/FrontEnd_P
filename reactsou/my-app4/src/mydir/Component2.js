
function Component2(myprops){
  const lists = [];
  const datas = myprops.friends;
  let i = 0;

  while(i < datas.length){
    //각 항목을 구분하는 식별자를 추가하여 key props 경고를 해결~
    lists.push(<h5 key={datas[i].bun}>{datas[i].bun}번 {datas[i].irum}의 나이는 {datas[i].nai}</h5>);
    i += 1;
  }

  return(
    <div>
      {myprops.title} {myprops.subtitle}<br/>
      {lists}<br/>
      <a href="/" onClick={(e)=>{
        e.preventDefault();
        myprops.changeData();
      }}>a 태그로 이벤트 처리</a>
    </div>
  );
}

export default Component2;