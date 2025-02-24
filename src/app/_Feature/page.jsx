"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import React from "react";
import DesktopFeature from "./components/DesktopFeature";


const Feture = () => {
    return (
        <AuroraBackground className="py-20 sm:py-32">
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

                <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-3xl px-20">
                    <h2 className="font-bold text-4xl tracking-tight text-white">Every feature you need to win. Try it for yourself.</h2>
                    <p className="mt-2 text-lg text-gray-400">
                        Investa was built for investors like you who play by their own rules
                        and are not going to let SEC regulations get in the way of their
                        dreams. If other investing tools are afraid to build it, Investa has
                        it.
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
        </AuroraBackground>

    )
}

export default Feture
