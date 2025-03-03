import Introduction from "../pages/Hero/Introduction";
import WhyWorkWithUs from "../pages/Hero/WhyWorkWithUs";
import ElectronicDesign from "../pages/Hero/ElectronicDesign";
import ManufacturingServices from "../pages/Hero/ManufacturingServices";
import InternetOfThings from "../pages/Hero/InternetOfThings";
import Testimonials from "../pages/Hero/Testimonials";
import CaseStudies from "../pages/Hero/CaseStudies";
import EngineeringDesignServices from "../pages/Hero/EngineeringDesignServices";
import Banner from "../pages/Hero/Banner";

export default function Home() {
  return (
      <div className="scroll-smooth">
        <Banner />
        <Introduction />
        <WhyWorkWithUs />
        <EngineeringDesignServices />
        <ElectronicDesign />
        <ManufacturingServices />
        <InternetOfThings />
        <Testimonials />
        <CaseStudies />
      </div>
  );
}
