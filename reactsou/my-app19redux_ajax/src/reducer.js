//디스패치된 액션은 리듀서에서 처리되며, 상태를 업데이트함
import { combineReducers } from "@reduxjs/toolkit";

const employeeReducer = (state=[], action) => {
  switch(action.type){
    case "SET_EMPLOYEES":
      return action.payload;
    default:
      return state;
  }
};

const customerReducer = (state=[], action) => {
  switch(action.type){
    case "SET_CUSTOMERS":
      return action.payload;
    default:
      return state;
  }
};

//여러 리듀서를 결합하고 리덕스 스토어에서 사용할 수 있도록 함
export default combineReducers({
  employees:employeeReducer,
  customers:customerReducer,
}); //combineReducers : 두개의 reducer를 결합해서 사용할 수 있다