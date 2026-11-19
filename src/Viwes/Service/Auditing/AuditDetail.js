import React from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Col, Container, Row } from "react-bootstrap";

const auditDetails = {
  "companies-llp-act": {
    title: "Companies Act and LLP Act",
    paragraphs: [
      "Our statutory audit services help companies and LLPs evaluate their financial statements, books of account, and internal controls in accordance with applicable legal requirements.",
      "We review records, identify compliance gaps, and provide clear audit observations and recommendations so that management can take timely corrective action.",
    ],
  },
  "tax-audit": {
    title: "Tax Audit",
    paragraphs: [
      "Our tax audit service reviews financial records, accounting practices, and tax-related information to support accurate reporting under the Income Tax Act.",
      "We help businesses identify reporting issues, prepare required information, and improve documentation before filing and assessment proceedings.",
    ],
  },
  "gst-audit": {
    title: "GST Audit",
    paragraphs: [
      "Our GST audit review compares books of account with GST returns, invoices, input tax credit, outward supplies, and tax payments.",
      "The process highlights mismatches and compliance risks, helping businesses correct records and strengthen their GST controls.",
    ],
  },
  "stock-audit": {
    title: "Stock Audit",
    paragraphs: [
      "Our stock audit services verify physical inventory against books and records, covering quantity, valuation, movement, and storage controls.",
      "We report discrepancies and control weaknesses so businesses can reduce losses, improve inventory accuracy, and make better operational decisions.",
    ],
  },
};

const AuditDetail = () => {
  const { auditSlug } = useParams();
  const detail = auditDetails[auditSlug] || auditDetails["companies-llp-act"];

  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center audit-detail-layout">
          <Col xs={12} md={5}>
            <div className="otherhero-text">
              <h1 className="text-center">{detail.title}</h1>
              {detail.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryFrom />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AuditDetail;
