document.addEventListener("DOMContentLoaded",function(){
      const {createApp} = Vue;
    createApp({
      data(){
        return {
          message1 : "Hello world!",
          message2 : "안녕 " + "반가워",
          message3 : Math.random() * 9
        }
      },
      methods:{
        updateMessage(){
          this.message1 = "update hello";
          this.message2 = "뷰는 이런거야";
          this.message3 = Math.random() * 9;
        }
      },
      //lifecycle(생명주기)은 컴포넌트가 생성된 후 제거될 때 까지의 흐름을 말함
      //각 생명주기 메소드 마다 실행할 수 있는 이벤트 훅을 등록할 수 있다.
      beforeCreate(){
        //인스턴스가 생성되고 나서 가장 처음으로 실행
        console.log("beforeCreate");
      },
      created(){
        //아직 화면요소에 인스턴스가 부착되기 전 실행
        console.log("created");
      },
      mounted(){
        //화면 요소를 제어하는 코드를 구현하며 DOM에 인스턴스가 부착되자마자 호출
        console.log("mounted");
      },
       beforeUpdate(){
        //관찰하고 있는 데이터가 변경되면 가상 돔을 이용해 화면을 다시 그려야 하는데 그리기 직전 호출되는 단계
        console.log("beforeUpdate");
      }, 
      updated(){
        //beforeUpdate가 끝나고 화면에 다시 그리고 나면 실행되는 단계
        console.log("updated");
      }
    }).mount("#app2");
});