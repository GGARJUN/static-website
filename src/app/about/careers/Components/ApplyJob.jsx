'use client'
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
import Image from "next/image";



const ApplyJob = () => {
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
    <>
      <div className="    ">

        <h2 className="flex items-center gap-3 text-lg font-medium"><div className="bg-blue-600 h-2 w-2 rounded-full"></div> Apply Job</h2>
        <h1 className='text-3xl sm:text-4xl md:text-5xl  font-bold  mt-5 mb-20'><span className='  bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'> Get in touch with us</span> </h1>

        <div className="grid grid-cols-12 gap-6 lg:gap-20 items-start ">
          {/* Left Column (Form Section) */}
          <div className="lg:col-span-7 col-span-12">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              <div className="flex flex-col space-y-2 w-full">
                <p>First Name *</p>
                <Input placeholder="Enter Your First Name" className="py-5 lg:py-7" />
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <p>Last Name *</p>
                <Input placeholder="Enter Your Last Name" className="py-5 lg:py-7" />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-6 lg:mt-10">
              <div className="flex flex-col space-y-2 w-full">
                <p>Email *</p>
                <Input placeholder="Enter Your Email" className="py-5 lg:py-7" />
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <p>Phone *</p>
                <Input placeholder="Enter Your Phone Number" className="py-5 lg:py-7" />
              </div>
            </div>

            {/* Opening Position */}
            <div className="flex flex-col mt-6 lg:mt-10 space-y-2 w-full">
              <p>Opening Position *</p>
              <Select>
                <SelectTrigger className="py-5 lg:py-7">
                  <SelectValue placeholder="Select a Position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Position</SelectLabel>
                    <SelectItem value="Engineering Design Services">Web Development</SelectItem>
                    <SelectItem value="Electronic Design">Full Stack Development</SelectItem>
                    <SelectItem value="Manufactring Services">UI UX Design</SelectItem>
                    <SelectItem value="Internet of Things">Wordpress Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="flex flex-col mt-6 lg:mt-10 space-y-2 w-full">
              <p>Message</p>
              <Textarea placeholder="Type your message here." className="py-5 lg:py-7" />
            </div>

            {/* Upload Resume */}
            <div className="flex flex-col mt-6 lg:mt-10 space-y-2 w-full">
              <p>Please upload your resume / CV *</p>
              <Input type="file" className="py-5 lg:py-7 pt-2" />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center space-x-4 mt-6 lg:mt-10">
              <Checkbox id="terms" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms"
                  className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept <span className="text-blue-600">terms and conditions</span>
                </label>
                <p className="text-sm text-muted-foreground">
                  You agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>

            {/* Apply Button */}
            <button className="group mt-6 lg:mt-8 flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md">
              Apply <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
            </button>

            {/* Required Fields Note */}
            <p className="mt-5 text-muted-foreground">* These fields are required.</p>
          </div>

          {/* Right Column (Image Section) */}
          <div className="lg:col-span-5 col-span-12 hidden lg:block">
            <Image width={1000} height={500} src="/applyjob.svg" alt="applyjobimg" className="w-full h-[500px]" />
          </div>
        </div>
      </div>

    </>
  )
}

export default ApplyJob
