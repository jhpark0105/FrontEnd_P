import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "./reducer";


const store = configureStore({ //리듀서 등록
  reducer:numberReducer,

});
export default store;