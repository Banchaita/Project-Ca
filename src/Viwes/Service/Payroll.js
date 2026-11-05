import React from "react";
import { Footer } from "../../components/Layout";
import QuickEnquiryFrom from "../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../components/ResponsiveMemu/Header";

const Payroll = () => (
  <>
    <ResHeader />
    <section className="hm-services-sec">
      <div className="container">
        <h1>Payroll Services</h1>
        <p>We manage payroll processing, salary records, statutory deductions, and payroll compliance for businesses.</p>
        <QuickEnquiryFrom />
      </div>
    </section>
    <Footer />
  </>
);

export default Payroll;
