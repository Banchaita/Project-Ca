import React from "react";
import { Footer } from "../../../components/Layout";
import TitleSection from "../../../components/TitleSection";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";

const BookKeeper = () => {
  return (
    <>
      <ResHeader />
      <QuickEnquiryFrom title="Book Keeper" />
      <Footer />
    </>
  );
};

export default BookKeeper;
