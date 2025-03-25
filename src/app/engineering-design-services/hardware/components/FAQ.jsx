
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
  const image1 = "https://img.freepik.com/free-photo/scenes-people-work_23-2151895519.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";

  return (
    <div >
      <h2 className="text-xl text-gray-800 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-blue-600"></div>FAQ's
      </h2>

      <div className="flex flex-col lg:flex-row items-start justify-between">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-10  mt-10 lg:mt-20">
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

        {/* FAQ Section */}
        <div className=" w-full  ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>1. What tools do you use for hardware design?</AccordionTrigger>
              <AccordionContent>
                We use industry-standard tools like PTC Windchill and Altair CAE Suite for our hardware design services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2. Can you help with prototyping?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer prototyping services to help you test and refine your product.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3. How do you ensure design manufacturability?</AccordionTrigger>
              <AccordionContent>
                We conduct design for manufacturability analyses to ensure that your designs are optimized for production.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>4. Do you provide thermal and structural analysis?</AccordionTrigger>
              <AccordionContent>
                Yes, we conduct thermal and structural analyses to ensure product reliability and performance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>5. How do you handle complex design projects?</AccordionTrigger>
              <AccordionContent>
                We handle complex projects by integrating multiple design aspects into a logical and comprehensible process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default FAQ
