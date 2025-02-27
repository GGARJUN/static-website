
import Hero from "./_Hero/page";
import Feture from "./_Feature/page";
import Parallax from "./_Parallax/page";
import TimeLine from "./_TimeLine/page";
import Scroll from "./_Scroll/page";
import WorldWide from "./_WorldWide/page";

import ContactForm from "./_ContactForm/page";
import TabsArea from "./_Tabs/page";
import Banner from "./_Components/Banner";
import Introduction from "./_Components/Introduction";
import WhyWorkWithUs from "./_Components/WhyWorkWithUs";
import ElectronicDesign from "./_Components/ElectronicDesign";
import ManufacturingServices from "./_Components/ManufacturingServices";
import InternetOfThings from "./_Components/InternetOfThings";
import Testimonials from "./_Components/Testimonials";
import CaseStudies from "./_Components/CaseStudies";
import EngineeringDesignServices from "./_Components/EngineeringDesignServices";


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
