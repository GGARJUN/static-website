import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "1. What aspects of design do you analyze for manufacturability?",
      answer:
        "We analyze component selection, PCB layout, and manufacturing processes to optimize designs for production.",
    },
    {
      question: "2. Can you optimize PCB layouts for assembly and testing?",
      answer:
        "Yes, we optimize PCB layouts to streamline assembly and testing processes.",
    },
    {
      question: "3. Do you select components for cost-effectiveness?",
      answer:
        "Yes, we select components that are widely available and cost-effective.",
    },
    {
      question: "4. How do you ensure alignment with manufacturing processes?",
      answer:
        "We ensure designs align with manufacturing processes to reduce costs and improve quality.",
    },
    {
      question: "5. Do you provide detailed DFM reports?",
      answer:
        "Yes, we provide comprehensive reports detailing our DFM analysis and recommendations.",
    },
  ];
  return (
    <>
      {/* FAQ Header */}
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
          <button className="group flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md transition-all duration-300">
            Contact Now
            <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </Link>
      </div>

      {/* FAQ Accordion */}
      <div className="mt-10 space-y-3">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            className="border border-gray-300 rounded-lg bg-white shadow-sm overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <button
              className="w-full text-left px-5 py-4 flex justify-between items-center font-medium text-lg text-gray-900 hover:bg-gray-100 transition-all duration-300"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-5xl text-gray-700"
              >
                {openIndex === index ? "−" : "+"}
              </motion.span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden px-5 text-gray-700 text-lg"
            >
              <p className="py-3">{item.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default FAQ
