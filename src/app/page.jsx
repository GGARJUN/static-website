
import Hero from "./_Hero/page";
import Feture from "./_Feature/page";
import Parallax from "./_Parallax/page";
import TimeLine from "./_TimeLine/page";
import Scroll from "./_Scroll/page";
import WorldWide from "./_WorldWide/page";
import Testimonials from "./_Testimonials/page";

export default function Home() {
  return (
    <>
    <Hero/>
    <Feture/>
    <Parallax/>
    <TimeLine/>
    <Scroll/>
    {/* <WorldWide/> */}
    <Testimonials/>
    </>
  );
}
