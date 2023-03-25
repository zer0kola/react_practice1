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
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">CodingApple</Navbar.Brand>
          <div style={{ flexGrow: 1 }} />
          <Nav className="me-auto">
            <div>
              <Link to="/detail">상세페이지</Link>
            </div>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" />

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + "shoes1.jpg"} width="90%" alt="" />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + "shoes2.jpg"} width="80%" alt="" />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + "shoes3.jpg"} width="80%" alt="" />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content}</p>
            <p>{shoes[2].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
