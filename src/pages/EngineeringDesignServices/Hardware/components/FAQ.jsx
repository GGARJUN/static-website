import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const image1 = "https://img.freepik.com/free-photo/scenes-people-work_23-2151895519.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";
  const image2 = "https://img.freepik.com/free-photo/woman-engineer-architect-working-modern-cad-program-sitting-desk-start-up-business-office_482257-5174.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";

  return (
    <div>
      <h1 className='text-5xl font-bold mt-5'>FQA's</h1>
      <div className="flex items-center gap-40  mt-10">
        <Accordion type="single" collapsible className="w-[650px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h2>What tools do you use for hardware design?</h2>
            </AccordionTrigger>
            <AccordionContent>
              <h2>We use industry-standard tools like PTC Windchill and Altair CAE Suite for our hardware design services.</h2>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h2>Can you help with prototyping?</h2>
            </AccordionTrigger>
            <AccordionContent>
              <h2>Yes, we offer prototyping services to help you test and refine your product.
              </h2>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h2>How do you ensure design manufacturability?</h2>
            </AccordionTrigger>
            <AccordionContent>
              <h2>We conduct design for manufacturability analyses to ensure that your designs are optimized for production.</h2>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <h2>Do you provide thermal and structural analysis?</h2>
            </AccordionTrigger>
            <AccordionContent>
              <h2>Yes, we conduct thermal and structural analyses to ensure product reliability and performance.</h2>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <h2>How do you handle complex design projects?</h2>
            </AccordionTrigger>
            <AccordionContent>
              <h2>We handle complex projects by integrating multiple design aspects into a logical and comprehensible process.</h2>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div ref={ref} className="relative flex items-center justify-center">
          <motion.div
            initial={{ x: -120, opacity: 0, scale: 0.9, rotate: -10 }}
            animate={isInView ? { x: 0, opacity: 1, scale: 1, rotate: -12 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut", type: "spring", stiffness: 80 }}
            whileHover={{ scale: 1.05, rotate: -10 }}
            className="absolute top-0 left-0 2xl:h-[350px] 2xl:w-[300px] h-[250px] w-[200px] rounded-xl shadow-lg object-cover"
          >
            <DirectionAwareHover imageUrl={image1} />
          </motion.div>

          <motion.div
            initial={{ x: 120, opacity: 0, scale: 0.9, rotate: 10 }}
            animate={isInView ? { x: 0, opacity: 1, scale: 1, rotate: 12 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut", type: "spring", stiffness: 80, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 10 }}
            className="absolute -bottom-40 2xl:left-60 left-40 2xl:h-[350px] 2xl:w-[300px] h-[250px] w-[200px] rounded-xl shadow-lg object-cover"
          >
            <DirectionAwareHover imageUrl={image2} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
