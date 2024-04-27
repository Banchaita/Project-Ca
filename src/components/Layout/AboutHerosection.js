import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function AboutHerosection({ title, span, text, src }) {
  return (
    <section className="hm-about-sec">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <ul className="about-list">
              <li className="animated-list-item">Taxation</li>
              <li className="animated-list-item">Auditing</li>
              <li className="animated-list-item">Accounting</li>
              <li className="animated-list-item">Registration</li>
              <li className="animated-list-item">Advisory</li>
            </ul>
            {/* <h2 className="hm-about-title">
              {title}  &nbsp;
              <span>{span} </span>
            </h2>
            <p>
              {text}
            </p>
            <a href="/about" className="btn btn-red">
              Read More <FontAwesomeIcon icon={faAngleRight} color="white" />
            </a> */}
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
