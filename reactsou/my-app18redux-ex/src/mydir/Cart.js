import React from "react";
import CartSummary from "./CartSummary";
import { useSelector, useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';// Bootstrap CSS
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const Cart = () => {
  const cart = useSelector((state)=>state.cart);
  const dispatch = useDispatch();

  const updateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  return(
    <div id="super">
      <h2>🛒장바구니🛒</h2>
      <Table border={1} striped>
        <thead>
          <tr>
            <th>id</th><th>상품명</th><th>가격</th><th>수량</th><th>합계</th><th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 ? (
            cart.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}원</td>
                <td>
                  <Button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                  <span style={{ margin: "0 10px" }} >{item.quantity}</span>
                  <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                </td>
                <td>{(item.price * item.quantity)}원</td>
                <td>
                  <Button onClick={() => removeFromCart(item.id)} variant="secondary">삭제</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">장바구니가 비어 있습니다.</td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6">
              <CartSummary />
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};
export default Cart;