
import Hero from "./_Hero/page";
import Feture from "./_Feature/page";
import Parallax from "./_Parallax/page";
import TimeLine from "./_TimeLine/page";
import Scroll from "./_Scroll/page";
import WorldWide from "./_WorldWide/page";
import Testimonials from "./_Testimonials/page";
import ContactForm from "./_ContactForm/page";
import TabsArea from "./_Tabs/page";

export default function Home() {
  return (
    <>
    <Hero/>
    <Parallax/>
    <Feture/>
    <TimeLine/>
    {/* <WorldWide/> */}
    <Testimonials/>
    <Scroll/>
    {/* <ContactForm/> */}
    {/* <TabsArea/> */}
    </>
  );
}
