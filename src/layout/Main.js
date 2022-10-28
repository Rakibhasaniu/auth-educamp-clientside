import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import LeftSideNav from "../shared/LeftSideNav";
import Footer from "../pages/Footer/Footer";

const Main = () => {
  return (
   <div>
    <Header></Header>
     <Container>
      <Row>
        <Col lg="3">
          <LeftSideNav></LeftSideNav>
        </Col>
        <Col lg="9">
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
    <Footer></Footer>
   </div>
  );
};

export default Main;
