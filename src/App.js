import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import shoesData from "./shoesData.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [shoes] = useState(shoesData); // shoesData를 shoes라는 state에 넣어줌

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">CodingApple</Navbar.Brand>
          <div style={{ flexGrow: 1 }} />
          <Nav className="me-auto">
            <div>
              <Link to="/detail" style={{ paddingRight: 5 }}>
                상세페이지
              </Link>
              <Link to="/about">어바웃</Link>
            </div>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg" />
              <div className="container">
                <div className="row">
                  {/* map을 이용해 반복되는 코드 최소화 */}
                  {shoes.map((a, i) => {
                    return (
                      <div className="col-md-4" key={i}>
                        <img src={process.env.PUBLIC_URL + a.img} width="80%" alt="" />
                        <h4>{a.title}</h4>
                        <p>{a.content}</p>
                        <p>{a.price}</p>
                      </div>
                    );
                  })}
                  <Card shoes={shoes[0]} />
                  <Card shoes={shoes[1]} />
                  <Card shoes={shoes[2]} />
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<div> 상세페이지</div>} />
        <Route
          path="/about"
          element={
            <div>
              {" "}
              <Detail />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + props.shoes.image} width="80%" alt="" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

function Detail(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default App;
