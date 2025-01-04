const {createApp} = Vue;

createApp({
  data(){
    return{
      list:['커피','콜라','사이다','무알콜맥주'],
      objArray:[
        {name:"부산", taketime:'5시간'},
        {name:"속초", taketime:'4시간'},
        {name:"춘천", taketime:'2시간'},
      ],
      myArr:['일','이','삼','사','오'],
      numArr:[1,2,3,4,5]
    }
  },
  methods:{
    addList(){
      this.myArr.push("추가");
    },
    addListIndex(arg){
      this.myArr.splice(arg,0,'삽입');
    },
    changeList(arg){
      this.myArr.splice(arg,1,'수정');
    },
    deleteList(arg){
      this.myArr.splice(arg,1);
    }
  }
}).mount("#app");