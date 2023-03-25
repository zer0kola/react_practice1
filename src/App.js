import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import shoesData from "./shoesData.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Detail } from "./Detail.js";

function App() {
  let [shoes] = useState(shoesData); // shoesData를 shoes라는 state에 넣어줌
  let navigate = useNavigate(); // useNavigate를 사용하면 페이지 이동이 가능해짐

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">CodingApple</Navbar.Brand>
          <div style={{ flexGrow: 1 }} />
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
            <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
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
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
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

function About() {
  return (
    <div>
      <h1>About</h1>
      <Outlet></Outlet>
    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export { About };

export default App;
