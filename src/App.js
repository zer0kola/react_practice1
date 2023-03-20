import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [shoes] = useState(data);

  return (
    <div>
      <Routes>
        <Route path="/" element={<div>메인 페이지</div>} />
        <Route path="/detail" element={<div> 상세페이지</div>} />
        <Route path="/about" element={<div> 어바웃 페이지</div>} />
      </Routes>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <div>
              <Link to="/">홈</Link>
            </div>
            <div>
              <Link to="/detail">상세페이지</Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
