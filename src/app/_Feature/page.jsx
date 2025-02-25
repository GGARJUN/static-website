"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import React from "react";
import DesktopFeature from "./components/DesktopFeature";


const Feture = () => {
    return (
        <AuroraBackground className="py-20 sm:py-32 mt-20">
        {/* <div className="py-20 sm:py-32"> */}
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative"
            >

                <div className="px-20 flex flex-col justify-center items-center gap-5">
                    <h2 className="font-bold text-5xl tracking-tight text-center text-white ">We Exceed Customer Expectations in Quality, Delivery and Service building long term relationships.</h2>
                    <p className="mt-2 text-lg text-gray-300/70  max-w-4xl text-center">
                    We specialize in advanced product design and development services, including build-to-specification  build-to-print  and comprehensive system engineering for a wide range of applications. Our expertise spans two primary business verticals.
                    </p>
                </div>

                {/* Desktop View */}
                <div className="hidden md:mt-20 md:block max-w-screen-xl mx-auto">
                    <DesktopFeature />
                </div>
                {/* Mobile View */}
                {/* <div className="mt-16 md:hidden">
                    <FeatureMobile />
                </div> */}

            </motion.div>
            {/* </div> */}
         </AuroraBackground>

    )
}

export default Feture
