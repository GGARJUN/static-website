"use client";
import { motion } from "framer-motion";
import { Users, Lightbulb, UserCheck, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import WhyWorkSlider from "../components/WhyWorkSlider";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -10 },
  visible: { opacity: 0.7, scale: 2, rotate: 0, transition: { duration: 0.9, ease: "easeOut" } },
  hover: { opacity: 1 }
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 120, damping: 15, mass: 0.8 } },
  hover: { y: -10, scale: 1.03, rotateX: 5, boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.15)", transition: { duration: 0.3 } }
};

const glowVariants = {
  animate: { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }
};

const features = [
  { link: "/", icon: <Users className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/17378/17378291.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Expertise", description: "Our seasoned professionals excel in engineering, electronics, manufacturing, and IoT solutions.", image: "/Homepage/Expertise.jpg" },
  { link: "/", icon: <Lightbulb className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/1087/1087815.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Innovation", description: "Cutting-edge tech drives our solutions, keeping you at the forefront of progress.", image: "/Homepage/Innovation.jpg" },
  { link: "/", icon: <UserCheck className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/4658/4658169.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Customer-Centric", description: "Tailored solutions and exceptional support designed around your unique needs.", image: "/Homepage/Customer-Centric.jpg" },
  { link: "/", icon: <Shield className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/18716/18716482.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Quality Assurance", description: "Uncompromising standards ensure excellence in every project we deliver.", image: "/Homepage/Quality Assurance.jpg" }
];

const WhyWorkWithUs = () => (
  <section style={{ backgroundImage: "url('https://img.freepik.com/free-photo/person-using-ar-technology-their-daily-occupation_23-2151137351.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid')" }} className="py-16 md:py-32 bg-cover overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
    <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-transparent" variants={glowVariants} animate="animate" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
      <motion.div initial={{ opacity: 0, y: -60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-left md:text-center mb-4">Why Work With Us</h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-left md:text-center">Sunkey Design Systems stands out as a partner of choice for businesses seeking reliable, high-quality solutions</motion.p>
      </motion.div>
      <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        <div className="rounded-lg mb-6 md:mb-0 col-span-12 xl:col-span-4">
          <WhyWorkSlider />
        </div>
        <div className="col-span-12 xl:col-span-8">
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants} initial="initial" whileHover="hover" className="relative bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group">
                <motion.div variants={imageVariants} className="absolute inset-0 z-0 opacity-10 rounded-xl group-hover:opacity-100 transition-opacity duration-500">
                  <img loading="lazy" src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent rounded-xl" />
                </motion.div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <motion.div className="text-blue-500" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                      <img loading="lazy"  src={feature.img} alt={feature.title} className="w-12" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300 line-clamp-1">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-2">{feature.description}</p>
                  <div className="flex items-center gap-3 transition-colors duration-300 mt-6">
                    <Link href={feature.link}>
                      <motion.div variants={{ hover: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }, initial: { x: -20, opacity: 0 } }}>
                        <motion.button className="text-sm font-medium text-white">Learn More</motion.button>
                      </motion.div>
                    </Link>
                    <motion.div className="h-5 w-5 text-black">
                      <ArrowRight className="h-5 w-5 group-hover:text-white -translate-x-20 -z-50 group-hover:translate-x-0 transition-all duration-300" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
export default WhyWorkWithUs;