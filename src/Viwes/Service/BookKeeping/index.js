import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const BookKeeper = () => {
  return (
    <>
      <ResHeader />
      <QuickEnquiryFrom />
      <section className="hm-services-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec" xs={12} md={12} lg={12}>
              <h2>Book Keeping</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} md={12} lg={12} className="mt-5 what-us-text">
              <ul>
                <li>Accounting</li>
                <li>Record Keeping</li>
                <li>Bank Reconciliations</li>
                <li>Monthly Reviews</li>
                <li>Compliance Check</li>
                <li>Ledger Scrutiny &amp; Review</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default BookKeeper;
