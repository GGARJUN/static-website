import ScrollToTop from "@/pages/components/ScrollToTop";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("../pages/Hero/Banner"));
const Introduction = dynamic(() => import("../pages/Hero/Introduction"));
const WhyWorkWithUs = dynamic(() => import("../pages/Hero/WhyWorkWithUs"));
const EngineeringDesignServices = dynamic(() => import("../pages/Hero/EngineeringDesignServices"));
const ElectronicDesign = dynamic(() => import("../pages/Hero/ElectronicDesign"));
const ManufacturingServices = dynamic(() => import("../pages/Hero/ManufacturingServices"));
const InternetOfThings = dynamic(() => import("../pages/Hero/InternetOfThings"));
const Testimonials = dynamic(() => import("../pages/Hero/Testimonials"));
const CaseStudies = dynamic(() => import("../pages/Hero/CaseStudies"));

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
        {/* <CaseStudies /> */}
        {/* <ScrollToTop/> */}
      </div>
  );
}
