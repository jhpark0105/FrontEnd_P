//리덕스의 리듀서 함수 : Action에 따라 변경하는 순수함수로
//현재 state와 action을 받아 새로운 상태로 변환

const initialState = {number:0};

export const numberReducer = (state=initialState, action) => {
  switch(action.type){
    case "INCREASE_NUMBER":
      return {...state, number:state.number + action.payload};
    default:
      return state;
  }
}