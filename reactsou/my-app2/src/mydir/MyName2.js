/*
function MyName2(props){
  console.log(props,' ',props.name,' ',props.addr);
  return(
    <>
      안녕~ 별명은 {props.name} {props.addr}
    </>
  );
}
*/

const MyName2 = ({name,addr}) =>{
  //let aa = name + "님";
  //console.log(aa);
  return (
    <>
      반가워~ 별명은 {name} {addr}
    </>
  );
};
export default MyName2;