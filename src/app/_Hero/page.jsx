import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";
import ExtraLogos from "./components/ExtraLogos";
import BackgroundDesign from "./components/BackgroundDesign";
import PhoneFrame from "./components/PhoneFrame";
import AppFeature from "./components/AppFeature";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BoxReveal } from "@/components/magicui/box-reveal";

const Hero = () => {
    return (
        <section className="overflow-hidden py-20 sm:py-32 lg:pb-36 xl:pb-36 px-20 [mask-image:linear-gradient(to_bottom,white_60%,transparent)]">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                {/* Right side */}
                <div className="relative z-10 x-auto max-w-2xl lg:col-span-7 lg:,ax-w-none lg:pt-6 xl:col-span-6">
                    <h2 className="font-bold md:text-[63px] text-3xl tracking-tight text-gray-900  ">
                        Engineered Solutions
                    </h2>
                    <p className="mt-10 text-lg text-gray-600">
                        Effective. Efficient. Engineered Solutions. We Exceed Customer Expectations in Quality, Delivery and Service building long term relationships, We Exceed Customer Expectations in Quality, Delivery and Service building long term relationships.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-4">
                        <Image src="/playStore.png" alt="playStore" width={100} height={100} className="w-32 h-11" />
                        <Button variant="outline">
                            <BsPlayCircle /><span>Watch the video</span>
                        </Button>
                    </div>
                    {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <p className="font-bold md:text-6xl text-3xl tracking-tight my-3 text-gray-900">
                            Engineered Solutions.
                        </p>
                    </BoxReveal>

                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <h2 className="mt-[.5rem] text-lg">
                            Putting Complex Product together{" "}
                            <span className="text-[#5046e6]">Design Engineers</span>
                        </h2>
                    </BoxReveal>

                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <div className="mt-6 text-lg">
                            <p className="my-3">
                                We Exceed Customer Expectations in Quality, Delivery and Service building long term relationships,
                                <span className="font-semibold text-[#5046e6] "> End-End Program Management, </span>
                                <span className="font-semibold text-[#5046e6]">Faster Time to Market, </span>
                                <span className="font-semibold text-[#5046e6]">Reduced BoM Costs, </span>
                                and
                                <span className="font-semibold text-[#5046e6]"> Cost Effective Engineering. </span>
                                <br />
                                <br />

                                We Exceed Customer Expectations in Quality, Delivery and Service building long term relationships. <br />
                            </p>
                        </div>
                    </BoxReveal>

                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-4">
                            <Image src="/playStore.png" alt="playStore" width={100} height={100} className="w-32 h-11" />
                            <Button variant="outline">
                                <BsPlayCircle /><span>Watch the video</span>
                            </Button>
                        </div>
                    </BoxReveal> */}
                </div>

                {/* Left side */}
                <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-10 xl:col-span-6">
                    <BackgroundDesign className="absolute md:left-1/2 left-20 md:top-4 -top-10 h-[600px] w-[600px] md:h-[950px] md:w-[950px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
                    <div className="-mx-4 h-[448px] px-9  sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
                        <PhoneFrame className="max-w-[366px] mx-auto">
                            <AppFeature />
                        </PhoneFrame>
                    </div>
                </div>

                    <ExtraLogos className="mt-56 md:mt-0"/>

            </div>
        </section>
    )
}

export default Hero
