"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import ClientReview from "./Components/ClientReview";
import CallUs from "./Components/CallUs";

const ContactUs = () => {
  const banners = [
    { img: "https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Who We Are", },
  ];

  const details = [
    {
      img: "https://cdn-icons-png.freepik.com/256/4249/4249561.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
      title: "Address",
      small: "Moonshine St. 14/05 Light City,",
      desc: "London, United Kingdom"
    },
    {
      img: "https://cdn-icons-png.freepik.com/256/4982/4982273.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
      title: "Phone",
      small: "+91-9876543210",
      desc: "+91-4545853534"
    },
    {
      img: "https://cdn-icons-png.freepik.com/256/2164/2164894.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
      title: "Email",
      small: "XYZ@gamail.com",
      desc: "ABCD@gmail.com"
    },
  ]

  return (
    <div className="bg-gray-50">
      <div className="w-full h-[700px] relative flex">
        <motion.div className="flex w-full h-full" >
          {banners.map((banner, i) => (
            <div key={i} className="w-full flex-shrink-0 h-full relative ">
              <img src={banner.img} alt={banner.title} className="w-full h-full object-cover  -z-50" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90"></div>
              <div className="absolute inset-0 flex flex-col  justify-center items-center 2xl:px-40 md:px-20 px-10 text-white">
                <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-medium mb-6 duration-500">
                  Get in Touch
                </h1>
                <p className="max-w-lg text-lg text-center">Have any questions? Reach out to us from our contact form and we will get back to you shortly.</p>

              </div>
            </div>
          ))}
        </motion.div>
      </div>


      <div className="relative -top-[120px] container mx-auto rounded-xl w-full bg-white shadow-xl h-96 2xl:h-[500px]">
        <div className="grid  md:grid-cols-2 grid-cols-1 items-center justify-between gap-10">
          <img src="https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="image" className="2xl:h-[500px] h-96 object-cover rounded-l-xl " />
          <div className="md:max-w-lg mx-16 md:mx-0">
            <h2 className="text-5xl font-semibold text-blue-900">Let’s Talk</h2>
            <p className="my-4 2xl:my-8 2xl:text-xl font-semibold text-blue-950">Let's make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business.</p>
            <p className="text-sm max-w-lg text-muted-foreground">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <button className='group mt-4 2xl:mt-8 flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md '>Join Now <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-72 md:mt-20 mb-20 ">
        <div className="grid grid-cols-12 gap-20 items-start ">
          <div className="md:col-span-8 col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col  space-y-2 w-[350px] md:w-full">
                <p>First Name *</p>
                <Input placeholder="Enter Your First Name" className="py-7" />
              </div>
              <div className="flex flex-col  space-y-2 w-[350px] md:w-full">
                <p>Last Name *</p>
                <Input placeholder="Enter Your Last Name" className="py-7" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div className="flex flex-col  space-y-2 w-[350px] md:w-full">
                <p>Email *</p>
                <Input placeholder="Enter Your First Name" className="py-7" />
              </div>
              <div className="flex flex-col  space-y-2 w-[350px] md:w-full">
                <p>Select *</p>
                <Select>
                  <SelectTrigger className="py-7">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="Engineering Design Services">Engineering Design Services</SelectItem>
                      <SelectItem value="Electronic Design">Electronic Design</SelectItem>
                      <SelectItem value="Manufactring Services">Manufactring Services</SelectItem>
                      <SelectItem value="Internet of Things">Internet of Things</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-10 flex flex-col w-[350px] md:w-full  space-y-2">
              <p>Message</p>
              <Textarea placeholder="Type your message here." className="py-7" />
            </div>
            <div className="flex items-center space-x-4 mt-10">
              <Checkbox id="terms" className="" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept <span className="text-blue-600">terms and conditions</span>
                </label>
                <p className="text-sm text-muted-foreground">
                  You agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
            <button className='group mt-4 2xl:mt-8 flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md '>Send message <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
            <p className="mt-5 text-muted-foreground">* These fields are required.</p>
          </div>

          <div className="md:col-span-4 col-span-12 flex flex-col w-full gap-20">
            {details.map((item, index) => (
              <div key={index} className="flex items-center gap-10">
                <img src={item.img} alt="" className="w-20" />
                <div className="flex flex-col space-y-1">
                  <h1 className="text-2xl font-bold">{item.title}</h1>
                  <p className="text-lg">{item.small}</p>
                  <p className="text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="">
          <div className="container mx-auto ">
          </div>
          <ClientReview />
          <CallUs />
        </div>


        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2328012295!2d79.87829923975285!3d13.047985080747324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1741358332238!5m2!1sen!2sin" width="800" height="600" loading="lazy" className="w-full"></iframe>


      {/* <div>
        <div className=" py-40 bg-white">
          <div className="container mx-auto px-16">
            <About />
          </div>
        </div>

        <div className="py-40  bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 ">
          <div className="container mx-auto px-16">
            <Expertise />
          </div>
        </div>

        <div className="pt-40  bg-gray-100 ">
          <div className="">
            <Approach />
          </div>
        </div>



        <div className="py-40 bg-gradient-to-r from-pink-100 via-blue-200 to-indigo-100 ">
          <div className="container mx-auto px-16">
            <FAQ />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ContactUs
