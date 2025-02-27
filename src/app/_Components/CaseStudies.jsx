"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Smart Factory Implementation",
      desc: "Boosted productivity by 30% with Industrial IoT, reducing downtime and optimizing operations.",
      img: "https://img.freepik.com/free-photo/factory-worker-monitoring-industrial-machines-production-remotely-control-room_342744-90.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
      bgColor: "bg-blue-50",
    },
    {
      title: "Smart Home Solution",
      desc: "Integrated IoT for seamless home automation, enhancing convenience and energy efficiency.",
      img: "https://img.freepik.com/free-photo/modern-living-room-with-smart-home-technology_9975-33059.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
      bgColor: "bg-green-50",
    },
    {
      title: "PCB Optimization",
      desc: "Improved efficiency with advanced PCB design, reducing costs and improving performance.",
      img: "https://img.freepik.com/free-photo/dolls-computer-motherboard_1286-160.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
      bgColor: "bg-purple-50",
    },
  ];

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Case Studies
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className={`${study.bgColor} group rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl`}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative h-60 overflow-hidden">
                <motion.img
                  src={study.img}
                  alt={study.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
              </div>
              <div className="py-10 px-5">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4">{study.desc}</p>
                <motion.span
                  className="text-black  flex  gap-3 items-center absolute bottom-2 left-[-100%] group-hover:left-5  transition-all duration-500 ease-in-out cursor-pointer"
                >
                  Read More
                </motion.span>
                <motion.span
                  className="flex gap-3  text-black items-center absolute bottom-2 left-[10px] group-hover:left-28 transition-all duration-300 ease-in-out"
                >
                  <ArrowRight />
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;