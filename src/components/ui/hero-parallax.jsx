"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    (<div
      ref={ref}
      className="h-[150vh] md:h-[270vh]  md:py-10 py-20 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:900px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10 md:space-x-14 md:mb-14">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  space-x-10 mb-10 md:space-x-14 md:mb-14 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 md:space-x-14">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>)
  );
};

export const Header = () => {
  return (
    (<div
      className="max-w-7xl relative md:mx-20 mx-10 z-50 md:px-4 md:w-full flex flex-col items-center justify-center gap-5 left-0 top-20">

      <h1 className="text-2xl md:text-7xl font-bold text-gray-900 text-center ">
      Discover Mistral’s Industry-Specific Solutions and Services
      </h1>
      <p className=" text-base md:text-xl mt-8 max-w-5xl text-center dark:text-neutral-200">
      We specialize in advanced product design and development services, including build-to-specification (BTS), build-to-print (BTP), and comprehensive system engineering for a wide range of applications. Our expertise spans two primary business verticals: Aerospace and Defense, and Deep-Tech Applications, catering to industries such as Industrial, Automotive, Healthcare, Consumer Electronics.
      </p>

    </div>)
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    (<motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-40 md:h-60 w-[200px] md:w-[400px] relative flex-shrink-0">
      <Link href={product.link} className="block group-hover/product:shadow-2xl  ">
        <Image
          src={product.thumbnail}
          height="200"
          width="200"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl border-2 shadow-xl border-gray-900"
          alt={product.title} />
      </Link>
      {/* <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2> */}
    </motion.div>)
  );
};
