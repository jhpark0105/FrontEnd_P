import React from "react";
import { useDispatch } from "react-redux";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';// Bootstrap CSS
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const products = [
  { id: 1, name: "마우스", price: 5000 },
  { id: 2, name: "키보드", price: 50000 },
  { id: 3, name: "모니터", price: 500000 },
  { id: 4, name: "텀블러", price: 30000 },
  { id: 5, name: "물티슈", price: 1000 },
  { id: 6, name: "리치알맹이", price: 1500 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    const productWithQuantity = {...product, quantity:1};
    dispatch({type:"ADD_TO_CART", payload:productWithQuantity})
  }

  return(
    <div id="super">
      <h2>🎁상품 목록🎁</h2>
      <Table border={1} striped>
        <thead>
          <tr>
            <th>id</th><th>상품명</th><th>가격</th><th>선택</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product)=>(
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Button onClick={()=>addToCart(product)} variant="success">장바구니 추가</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default ProductList;