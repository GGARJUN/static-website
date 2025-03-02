

import Introduction from "./_Components/Introduction";
import WhyWorkWithUs from "./_Components/WhyWorkWithUs";
import ElectronicDesign from "./_Components/ElectronicDesign";
import ManufacturingServices from "./_Components/ManufacturingServices";
import InternetOfThings from "./_Components/InternetOfThings";
import Testimonials from "./_Components/Testimonials";
import CaseStudies from "./_Components/CaseStudies";
import EngineeringDesignServices from "./_Components/EngineeringDesignServices";
import Banner from "./_Components/Banner";


export default function Home() {
  return (
    <>
      <div className="scroll-smooth">
        <Banner />
        <Introduction />
        <WhyWorkWithUs />
        <EngineeringDesignServices/>
        <ElectronicDesign />
        <ManufacturingServices />
        <InternetOfThings />
        <Testimonials/> 
       <CaseStudies/>
      </div>
      {/* <Hero/>
    <Parallax/>
    <Feture/>
    <TimeLine/> */}
      {/* <WorldWide/> */}
      {/* <Testimonials/>
    <Scroll/> */}
      {/* <ContactForm/> */}
      {/* <TabsArea/> */}
    </>
  );
}
