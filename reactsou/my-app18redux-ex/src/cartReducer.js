// 액션 타입
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

const initialState = {  // 초기 상태
  cart: [],
};

// 리듀서
function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // 상품 추가 로직
      return { ...state, cart: [...state.cart, action.payload] };

    case REMOVE_FROM_CART:
      // 상품 제거 로직
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case UPDATE_QUANTITY:
      // 수량 업데이트 로직
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
}
export default cartReducer;