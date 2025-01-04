export default{
  data(){
    return{
      inputNumber:"",
      result:"" //출력결과 코드
    }
  },
  methods:{
    calcGugudan(){
      const num = parseInt(this.inputNumber);

      if(!isNaN(num) && num > 1){
        this.result = Array.from({length:9}, (_, i) => 
          `${num} x ${i+1} = ${num * (i+1)}`).join('<br/>');
        // 3x1 = 3<br/>,...
      } else {
        this.result = "올바른 숫자를 입력하시오";
      }
    },
  },
  template:`
    <div>
      <h2>구구단</h2>
      단 입력 후 확인 버튼 클릭<br/>
      <input v-model="inputNumber" type="number" min="2" placeholder="단 입력"/>
      <button @click="calcGugudan">계산</button>

      <div v-html="result" style="margin-top:20px; color:blue;"></div>
    </div>`,
};
