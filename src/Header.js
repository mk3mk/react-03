import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ReactLogo from './logo.svg';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}

        <Row className="row">
          <Col className="col" xs={12} md={2}>
            <img src={ReactLogo} alt="React Logo" width="50"/>
          </Col>
          <Col className="col" xs={12} md={8}>
            <p>Phone:</p>
          </Col>
          <Col className="col" xs={12} md={2}>
            <p>Phone:</p>
          </Col>
        </Row>



        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row className="row">
          <Col className="col" xs={12}>
            <Navbar className="color-primary text-color-fourth">
              <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Col>
        </Row>



        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row className="row header-row">
          <Col className="col" xs={12} md={8}>
            <div>
              <h1>HEADER</h1>
            </div>
          </Col>
          <Col className="col" xs={12} md={4}>
            xs=6 md=4
          </Col>
        </Row>





      </Container>
    </div>
  );
}

export default App;
