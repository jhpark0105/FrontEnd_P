//reducer 파일
import { createSlice } from "@reduxjs/toolkit";

//createSlice : reducer와 action을 생성 , 초기 상태 정의, 함수 관리, 불변성 관리
const ResourceSlice = createSlice({
  name:"resource",
  initialState:{
    value:0,  // 공유 자원
    kor:50, //...
  },

  reducers:{ // 리듀서를 정의, 각 함수는 state, action을 인수로 받음
    increment:(state) => { //increment로 호출하면 아래 식이 수행됨
      state.value += 1;
    },
    decrement:(state) => {
      state.value -= 1;
    },
    reset:(state) => {
      state.value = 0;
    },
    //... 이런식으로 함수를 계속 만들 수 있다.
  },
  //...
});

//액션, 리듀서 내보내기
export const {increment,decrement,reset} = ResourceSlice.actions;
//세가지의 action을 slice해서 내보냄 //dispatcher로 부를 수 있다.
export default ResourceSlice.reducer; //reducer를 내보냄