import React from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";

const DSC = () => (
  <>
    <ResHeader />
    <section className="hm-services-sec">
      <div className="container">
        <h1>DSC Services</h1>
        <p>Digital Signature Certificate services for secure online filings, registrations, and statutory compliance.</p>
        <QuickEnquiryFrom />
      </div>
    </section>
    <Footer />
  </>
);

export default DSC;
