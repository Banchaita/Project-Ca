import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";



function AboutHerosection({src }) {
  return (
    <section className="hm-about-sec">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <ul className="about-list">
              <Link to="/service/IncomeTax/ITR_filing">
                <li className="animated-list-item">Taxation</li>
              </Link>
              <Link to="/service/auditing">
                <li className="animated-list-item">Auditing</li>
              </Link>
              <Link to="/service/accounting">
                <li className="animated-list-item">Accounting</li>
              </Link>
              <Link to="service/registration/proprietorship">
                <li className="animated-list-item">Registration</li>
              </Link>
              <Link to="service/advisory/capital_gain">
                <li className="animated-list-item">ADVISORY</li>
              </Link>
            </ul>
          </Col>
          <Col md={6}>
            <img
              alt="aboutimage"
              src={src}
              className="aboutimage jumping-animation"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutHerosection;
