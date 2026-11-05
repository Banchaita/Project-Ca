import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";
import { faPeopleLine } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

const SupportCard = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12} md={2} lg={2} className="support-col">
            <div className="support-container">
              <div className="support-card">
                <div className="box">
                  <div className="content">
                    <FontAwesomeIcon
                      icon={faFolderOpen}
                      style={{ color: "#05044D" }}
                    />
                    <h3>Team of Professionals</h3>
                    <p>
                      Our professional team supports your business with
                      reliable financial expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={2} lg={2} className="support-col">
            <div className="support-container">
              <div className="support-card">
                <div className="box">
                  <div className="content">
                    <FontAwesomeIcon
                      icon={faHeadset}
                      style={{ color: "#05044D" }}
                    />
                    <h3>Client Confidentiality & Privacy </h3>
                    <p>
                      We strictly protect confidential client information and
                      maintain privacy in every engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={2} lg={2} className="support-col">
            <div className="support-container">
              <div className="support-card">
                <div className="box">
                  <div className="content">
                    <FontAwesomeIcon
                      icon={faHourglassStart}
                      style={{ color: "#05044D" }}
                    />
                    <h3> Transparent Working</h3>
                    <p>
                      We keep our processes, communication, and work terms clear.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={2} lg={2} className="support-col">
            <div className="support-container">
              <div className="support-card">
                <div className="box">
                  <div className="content">
                    <FontAwesomeIcon
                      icon={faPeopleLine}
                      style={{ color: "#05044D" }}
                    />
                    <h3>Pro Active Approach</h3>
                    <p>
                      We identify requirements early and act proactively for
                      smoother business compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={2} lg={2} className="support-col">
            <div className="support-container">
              <div className="support-card">
                <div className="box">
                  <div className="content">
                    <FontAwesomeIcon icon={faHourglassStart} style={{ color: "#05044D" }} />
                    <h3>Time &amp; Cost Efficient</h3>
                    <p>Efficient professional services that save time and control cost.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SupportCard;
