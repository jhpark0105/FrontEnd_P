import './App.css';
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import ProductList from "./mydir/ProductList";
import Cart from "./mydir/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';// Bootstrap CSS
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>🛍️쇼핑몰🛍️</h1>
      <hr/>
      <Navbar bg="light" data-bs-theme="light">
      <Nav className="me-auto mx-auto">
        <Link to="/product" className="btn btn-primary">상품 목록 보기</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/cart" className="btn btn-success">장바구니</Link>
      </Nav>
      </Navbar>
      <hr/>
      <Routes>
        <Route path="/product" element={<ProductList/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
