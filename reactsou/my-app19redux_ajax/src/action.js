//action을 정의하는 파일을 별도 작성
//액션 객체를 생성하는 액션 생성자 함수를 정의

//jikwon data를 처리하는 액션 객체 생성
//dispatch(setEmployees([{jikwonno:1, jikwonname:"홍길동"}])) -> json으로 dispatch
export const setEmployees = (employees) => ({
  type:"SET_EMPLOYEES",
  payload:employees,
});

//gogek data를 처리하는 액션 객체 생성
export const setCustomers = (customers) => ({
  type:"SET_CUSTOMERS",
  payload:customers,
});

