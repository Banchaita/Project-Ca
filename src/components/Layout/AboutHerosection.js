import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {CalendarOutlined} from "@ant-design/icons";
import { FloatButton } from "antd";

const AboutHerosection = ({ src }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <section className="hm-about-sec">
      <Container>
        <div className="text-center mt-5 mb-5 hero-banner-sub-text hero-banner-sub-text-first-row">
          <div className="welcome-badge">WELCOME TO</div>
          <h1 className="home-subtitle">PURMINDER KAUR &amp; ASSOCIATES</h1>
          <h6 className="home-subtext">
            ONE STOP SOLUTIONS FOR ALL FINANCIAL NEEDS
          </h6>
        </div>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <ul className="about-list">
              <Link to="/taxtion">
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
              className="homeaboutimage jumping-animation"
            />
            <FloatButton.Group
              open={open}
              trigger="click"
              onClick={handleClick}
              style={{
                right: 24,
              }}
              icon={<CalendarOutlined />}
            >
               <Link to="/schedule-call">
                   <FloatButton icon={<CalendarOutlined />} />
              </Link>
             
            </FloatButton.Group>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutHerosection;
