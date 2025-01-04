import React from 'react';
import { useSelector } from 'react-redux';

function CartSummary() {
  const cart = useSelector(state => state.cart);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      총 금액 {getTotalPrice()}원
    </div>
  );
}

export default CartSummary;