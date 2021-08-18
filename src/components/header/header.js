import React from "react";
import "../../styles/header.css";
import { Container, Col, Row } from "react-bootstrap";
import Search from "./search/search";
import Menu from "./menu/menu";
import PrivateFunction from "./private/privateFunction";
function Header() {
  return (
    <div className="header">
      <Col xs={4} sm={4} md={4} lg={4}>
        <Search />
      </Col>
      <Col xs={5} sm={5} md={5} lg={5}>
        <Menu />
      </Col>
      <Col xs={3} sm={3} md={3} lg={3}>
        <PrivateFunction />
      </Col>
    </div>
  );
}

export default Header;
