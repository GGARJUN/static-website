"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import dynamic from "next/dynamic";
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
import { Highlight } from "@/components/ui/hero-highlight";
import { z } from "zod";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Image from "next/image";



export const formSchema = z.object({
  firstname: z.string().min(2, "First name is too short").max(50),
  lastname: z.string().min(2, "Last name is too short").max(50),
  email: z.string().email("Invalid email"),
  service: z.string().min(1, "Please select a service"), // Ensure selection
  message: z.string().min(2, "Message is required"),
  terms: z.boolean().refine((val) => val === true, { message: "You must accept the terms." }),
});


const ClientReview = dynamic(() => import("./Components/ClientReview"));
const CallUs = dynamic(() => import("./Components/CallUs"));


const ContactUs = () => {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      service: "", // Must be initialized
      message: "",
      terms: false,
    },
  });

  function onSubmit(values) {
    console.log("Form submitted with values:", values);
  }


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
              <Image priority width={1000} height={500} src={banner.img} alt={banner.title} className="w-full h-full object-cover  -z-50" />
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


      <div className="relative -top-[120px] container mx-auto  rounded-xl  bg-white shadow-xl h-[450px] 2xl:h-[600px]">
        <div className="grid  lg:grid-cols-2 grid-cols-1 items-center justify-between gap-10">
          <Image priority width={500} height={500} src="https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="image" className="2xl:h-[600px] h-[450px] object-cover rounded-xl w-full" />
          <div className="lg:max-w-2xl  md:mx-0">
            <h2 className="text-5xl font-semibold text-blue-900">Let’s Talk</h2>
            <p className="my-4 2xl:my-8 2xl:text-xl md:mr-10 2xl:mr-0 font-semibold text-blue-950 text-justify">At SunKey Technologies, we believe in solving complex business challenges of the converging world by using cutting-edge technologies. Our team is dedicated to delivering innovative solutions that transform industries and enhance efficiency. Whether you have questions about our services or would like to explore how we can help your business thrive, we're here to assist you.
            </p>
            <p className=" text-justify text-foreground md:mr-10 2xl:mr-0">We're committed to understanding your unique needs and providing tailored support. Feel free to reach out to us using the contact form below or by visiting our office. We look forward to collaborating with you.
            </p>
            <button className='group mt-4 2xl:mt-8 flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md '>Join Now <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[450px] md:mt-[400px] lg:mt-20 mb-20 ">
        <h2 className="flex items-center gap-3 text-lg font-medium"><div className="bg-blue-600 h-2 w-2 rounded-full"></div> contact us</h2>
        <h2 className="mt-10 text-5xl mb-20 font-semibold">Get in touch with us</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-12 lg:gap-20 items-start">
            <div className="lg:col-span-8 col-span-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your First Name" className="py-7" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Last Name" className="py-7" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Email" className="py-7" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value || ""} // Ensure it is controlled
                        defaultValue={field.value} // Keep selection
                      >
                        <FormControl>
                          <SelectTrigger className="py-7">
                            <SelectValue placeholder="Select a Service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Select a Service</SelectLabel>
                            <SelectItem value="Engineering Design Services">Engineering Design Services</SelectItem>
                            <SelectItem value="Electronic Design">Electronic Design</SelectItem>
                            <SelectItem value="Manufacturing Services">Manufacturing Services</SelectItem>
                            <SelectItem value="Internet of Things">Internet of Things</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="mt-10">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Type your message here." className="py-7" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center space-x-4 mt-10">
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          id="terms"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel htmlFor="terms" className="ml-3">
                        Accept <span className="text-blue-600">terms and conditions</span>
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="group mt-4 2xl:mt-8 flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md">
                Send message <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
              </Button>
              <p className="mt-5 text-muted-foreground">* These fields are required.</p>
            </div>
            <div className="lg:col-span-4 col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  w-full gap-20 lg:mt-0 mt-10">
              {details.map((item, index) => (
                <div key={index} className="flex items-center gap-10">
                  <Image priority width={40} height={40} src={item.img} alt={item.title} className="w-20" />
                  <div className="flex flex-col space-y-1">
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <p className="text-lg">{item.small}</p>
                    <p className="text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </form>
        </Form>


        <h2 className="mt-40 text-center 2xl:text-4xl text-white hidden md:block">
          <Highlight className="px-5 py-5">Let me know if you need any adjustments or if this meets your expectations!</Highlight>
        </h2>
      </div>

      <div className="">
        <div className=" ">
          <ClientReview />
          <CallUs />
        </div>
      </div>


      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2328012295!2d79.87829923975285!3d13.047985080747324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1741358332238!5m2!1sen!2sin" width="800" height="600" loading="lazy" className="w-full"></iframe>

    </div>
  )
}

export default ContactUs
