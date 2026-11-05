import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WhatWeDo = () => {
  return (
    <section className="hm-About-sec">
      <Container>
        <Row>
          <Col className="hm-About-what-sec">
            <h2>
              What <span> We Do</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              At Purminder Kaur & Associates, we offer a comprehensive range of
              financial services including Accounting, International Tax and
              Transfer Pricing, Goods and Services Tax (GST), Bookkeeping &
              Income Tax utilizing Tally and QuickBooks Accounting platforms.
              Additionally, we provide Auditing, India Entry Services, Overseas
              Business Setup Services, and a host of other financial solutions
              to meet diverse client needs.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatWeDo;
