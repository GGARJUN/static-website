
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react";
import Link from "next/link";


const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const image1 = "https://img.freepik.com/free-photo/blonde-woman-pressing-virtual-screen_1134-632.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";

  return (
    <div>
      <h2 className="text-xl text-gray-800 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-blue-600"></div>FAQ's
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-between">
        <h2 className="title-all my-5 text-left">
          <span className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text">
            Find solutions to common <br />
          </span>
          questions
        </h2>
        <Link href={"/contact-us"}>
          <button className='group flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 font-semibold gap-3 rounded-md mt-6 sm:mt-10 text-sm sm:text-base'>
            Contact Now
            <ArrowRight className='group-hover:translate-x-1 transition-all duration-300 w-4 h-4 sm:w-5 sm:h-5' />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between lg:gap-40  mt-10 lg:mt-20">
        {/* FAQ Section */}
        <div className=" w-full  ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>1. What types of firmware do you develop?</AccordionTrigger>
              <AccordionContent>
                We develop custom firmware tailored to meet specific device requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2. Can you help with device driver development?</AccordionTrigger>
              <AccordionContent>
                Yes, we develop device drivers for efficient hardware-software communication.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3. How do you ensure firmware reliability?</AccordionTrigger>
              <AccordionContent>
                We conduct rigorous testing and validation to ensure firmware reliability.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>4. Do you provide firmware updates and maintenance?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer ongoing support for firmware updates and maintenance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>5. How do you handle complex firmware projects?
              </AccordionTrigger>
              <AccordionContent>
                We handle complex projects by integrating multiple firmware components into a cohesive solution.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* Image Section */}
        <motion.div
      initial={{ x: -120, opacity: 0, scale: 0.9, rotate: -10 }}
      animate={isInView ? { x: 0, opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ duration: 1.5, ease: "easeInOut", type: "spring", stiffness: 80 }}
      whileHover={{ scale: 1.05, rotate: 0 }}
      ref={ref}
      className=" w-full lg:w-[500px] 2xl:w-[600px] h-auto lg:h-[500px] mt-5  rounded-xl shadow-lg object-cover"
    >
      <DirectionAwareHover imageUrl={image1} />
    </motion.div>


      </div>
    </div>
  )
}

export default FAQ
