import "./App.css";
import "./components/header/header";
import Header from "./components/header/header";
import { Container, Col, Row } from "react-bootstrap";
import LeftSide from "./components/leftSide/leftSide";
import MainSide from "./components/mainSide/mainSide";
import RightSide from "./components/rightSide/rightSide";
function App() {
  return (
    <div className="app">
      <Header />
      <Container fluid>
        <Col xs={3} sm={3} md={3} lg={3} style={{ height: "100%" }}>
          <LeftSide />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} style={{ height: "100%" }}>
          <MainSide />
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} style={{ height: "100%" }}>
          <RightSide />
        </Col>
      </Container>
    </div>
  );
}

export default App;
