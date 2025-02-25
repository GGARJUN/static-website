import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import React from "react";

const TimeLine = () => {
    const data = [
        {

            title: "2025",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-medium mb-8">
                        Expert knowledge in embedded technologies – hardware design, software development,
                    </p>
                    <div className="grid grid-cols-2  gap-4">


                            <Image
                                src="https://img.freepik.com/free-photo/workers-control-room_1359-316.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />

                        {/* <ShineBorder
                            className="relative rounded-xl"
                            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                        > */}
                            <Image
                                src="https://img.freepik.com/free-photo/high-voltage-electrical-transformers-electricity-distribution-power-plant-high-voltage-power-lines-life-power-supply-close-up_166373-1593.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        {/* </ShineBorder> */}

                            <Image
                                src="https://img.freepik.com/free-photo/close-up-wires-tech-background_23-2148882631.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                            <Image
                                src="https://img.freepik.com/free-photo/male-asian-engineer-professional-having-discussion-standing-concult-cnc-machine-factory-two-asian-coworker-brainstorm-explaining-solves-process-cnc-operate-machine_609648-859.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                    </div>
                </div>
            ),
        },
        {
            title: "Early 2024",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-medium mb-8">
                        With 25+ years of experience, Mistral is among one of the leading Embedded System Services companies in Bangalore delivering business value across the entire product engineering lifecycle.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://img.freepik.com/free-photo/electricity-high-voltage-pole-sky_1127-3227.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://img.freepik.com/free-photo/closeup-shot-electrical-chipsets-transmitting-energy-through-each-other_181624-3425.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://img.freepik.com/free-vector/power-outage-banner-with-night-city-light-bulb_528282-63.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://img.freepik.com/free-photo/picture-tree-tv-antenna-silhouettes-roof-sunset-zagreb-croatia_181624-12524.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
                </div>
            ),
        },
        {
            title: "Changelog",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-medium mb-4">
                        Deployed 5 new components on today
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Customer Success
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Ownership and Innovation
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Ethics and Integrity
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Stakeholder Respect
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Transparency
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://img.freepik.com/free-vector/businessman-green-city-electric-car-using-alternative-fuel-alternative-fuels-chemically-stored-electricity-non-fossil-sources-concept_335657-731.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://img.freepik.com/free-vector/linear-flat-smartphones-conveyor-fueling-with-firmware-software-illustration-mobile-phone-production-line-packaging-concept_126523-2676.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://img.freepik.com/free-vector/engineers-working-hydropower-dam-producing-falling-water-energy_335657-3223.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://img.freepik.com/free-vector/microchip-concept-with-electronic-circuit-components-human-characters-holding-transistor-flat-vector-illustration_1284-79861.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="">
            <div className="w-full mt-20">
                <Timeline data={data} />
            </div>
        </div>
    )
}

export default TimeLine
