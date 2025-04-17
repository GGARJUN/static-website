"use client"

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";

const FormPage = dynamic(() => import("./Components/FormPage"));

const ContactUs = () => {
  const banners = [
    { img: "https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Get in Touch", },
  ];
  return (
    <div className="bg-gray-50">
      <div className="w-full h-[700px] relative flex">
        <motion.div className="flex w-full h-full" >
          {banners.map((banner, i) => (
            <div key={i} className="w-full flex-shrink-0 h-full relative ">
              <img loading="lazy" src={banner.img} alt={banner.title} className="w-full h-full object-cover  -z-40" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90"></div>
              <div className="absolute inset-0 flex flex-col  justify-center items-center 2xl:px-40 md:px-20 px-10 text-white">
                <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-medium mb-6 duration-500">
                  {banner.title}
                </h1>
                <p className="max-w-lg text-lg text-center">Have any questions? Reach out to us from our contact form and we will get back to you shortly.</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>


      <div className="relative -top-[120px] container mx-auto px-4 md:px-0  rounded-xl md:bg-white md:shadow-xl h-[450px] 2xl:h-[600px]">
        <div className="grid  lg:grid-cols-2 grid-cols-1 items-center justify-between gap-10 ">
          <img loading="lazy" src="https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="image" className="2xl:h-[600px] h-[450px] object-cover rounded-xl w-full" />
          <div className="lg:max-w-2xl  md:mx-0">
            <h2 className="text-5xl font-semibold text-blue-900">Let’s Talk</h2>
            <p className="my-4 2xl:my-8 2xl:text-xl md:mr-10 2xl:mr-0 font-semibold text-blue-950 text-justify">At Sunkey Design Systems, we believe in solving complex business challenges of the converging world by using cutting-edge technologies. Our team is dedicated to delivering innovative solutions that transform industries and enhance efficiency. Whether you have questions about our services or would like to explore how we can help your business thrive, we're here to assist you.
            </p>
            <p className=" text-justify text-foreground md:mr-10 2xl:mr-0">We're committed to understanding your unique needs and providing tailored support. Feel free to reach out to us using the contact form below or by visiting our office. We look forward to collaborating with you.
            </p>
            <Link href="/">
              <button className='group mt-4 2xl:mt-8 flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md '>Join Now <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[450px] md:mt-[400px] lg:mt-20 mb-20 ">
        <h2 className="flex items-center gap-3 text-lg font-medium"><div className="bg-blue-600 h-2 w-2 rounded-full"></div> contact us</h2>
        <h2 className='title-all my-5 '><span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'>Get in touch with us</span></h2>

        <FormPage />


        <h2 className="mt-40 text-center 2xl:text-4xl text-white hidden md:block">
          <Highlight className="px-5 py-5">Let me know if you need any adjustments or if this meets your expectations!</Highlight>
        </h2>
      </div>

      {/* <div className="">
        <div className=" ">
          <ClientReview />
          <CallUs />
        </div>
      </div> */}


      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2328012295!2d79.87829923975285!3d13.047985080747324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1741358332238!5m2!1sen!2sin" width="800" height="600" loading="lazy" className="w-full"></iframe> */}

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.87423770914756!2d80.1941464!3d13.099959100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265821eda188b%3A0x80e65cd6ee68c39a!2sSenate%20Space%2002!5e0!3m2!1sen!2sin!4v1742927429056!5m2!1sen!2sin" width="800" height="400"  loading="lazy" className="w-full"></iframe>

    </div>
  )
}

export default ContactUs
