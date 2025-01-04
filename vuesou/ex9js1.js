//JS는 같은 scope내에서 동일한 식별자로 여러번 const를 사용해 변수 선언 불가
//이 문제를 해결하는 방법 중 하나로 즉시 실행 함수(IIFE)를 사용한다
(function(){
const {createApp} = Vue;

createApp({
  data(){
    return{
      key1:'값1',
      key2:'값2',
      message:"안녕하세요",
      htmlString:"<p style='color:green;'>변덕스런 날씨</p>",
      su1:"0",
      su2:"0",
      txtMsg:"",
      daumlogo:"https://t1.daumcdn.net/daumtop_deco/images/pctop/2023/logo_daum.png"
    }
  },
  methods:{
    myFunc(){
      console.log(this.message);
    },
    myChange1(){
      this.message = "안녕";
    },
    myChange2(){
      this.message = "반가워";
    }
  }
}).mount("#app1");
})();
