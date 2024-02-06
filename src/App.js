import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Axios from "./Axios";
import DAPUsers from "./DAPUsers";

import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.designartproject.ru/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}

        <Row className="row">
          <Col className="col" xs={12} md={8}>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </Col>
          <Col className="col" xs={6} md={4}>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row className="row">
          <Col className="col" xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col className="col" xs={6} md={4}>
            <div>
              <h1>Our users</h1>
              {users.map((user) => (
                <div key={user.id} to={`/users/${user.id}`}>
                  <li>username: {user.username}</li>
                  more
                  <hr />
                </div>
              ))}
            </div>
          </Col>
          <Col className="col" xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row className="row">
          <Col className="col" xs={6}>
            <DAPUsers />
          </Col>
          <Col className="col" xs={6}>
            <Axios />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
