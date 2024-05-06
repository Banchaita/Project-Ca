import React, { useEffect, useState } from "react";
import OtherPageLoader from "../../../components/Loader/OtherPageLoader";
import { Footer } from "../../../components/Layout";
import TitleSection from "../../../components/TitleSection";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";



const LifeInsurance = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds
  }, []);

  return (
    <>
      {isLoading ? (
        <OtherPageLoader /> // Display loader here
      ) : (
        <>
          <ResHeader />
          <TitleSection text="Life Insurance" />
          <QuickEnquiryFrom />
          <Footer />
        </>
      )}
    </>
  );
};

export default LifeInsurance;
