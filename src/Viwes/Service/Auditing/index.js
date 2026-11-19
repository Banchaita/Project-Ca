import React from "react";
import { Footer } from "../../../components/Layout";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const auditingServices = [
  {
    title: "Companies Act and LLP Act",
    slug: "companies-llp-act",
    text: "Statutory audit support for companies and LLPs, including compliance review and reporting.",
  },
  {
    title: "Tax Audit",
    slug: "tax-audit",
    text: "Tax audit assistance to verify financial records and meet applicable income-tax requirements.",
  },
  {
    title: "GST Audit",
    slug: "gst-audit",
    text: "GST audit review covering records, returns, reconciliations, and compliance gaps.",
  },
  {
    title: "Stock Audit",
    slug: "stock-audit",
    text: "Independent stock verification to identify discrepancies and strengthen inventory controls.",
  },
];

const Auditing = () => {
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <h1 className="text-center auditing-page-title">Auditing</h1>
          </Col>
        </Row>
        <Row className="auditing-services-grid">
          {auditingServices.map((service) => (
            <Col key={service.slug} xs={12} md={6} lg={3} className="mb-4">
              <Link to={`/service/auditing/${service.slug}`} className="auditing-card-link">
                <div className="information navcard">
                  <span className="tag">{service.title}</span>
                  <p className="info">{service.text}</p>
                  <div className="nav-card-body">
                    <span className="button">
                      <span>Apply</span>
                      <span aria-hidden="true">⟶</span>
                    </span>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Auditing;
