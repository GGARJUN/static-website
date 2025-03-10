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
      <div className="container mx-auto   mt-[450px] md:mt-20 mb-20 ">

            <h2 className="flex items-center gap-3 text-lg font-medium"><div className="bg-blue-600 h-2 w-2 rounded-full"></div> Apply Job</h2>
            <h2 className="mt-5 text-5xl mb-20 font-semibold">Get in touch with us</h2>

        <div className="grid grid-cols-12 gap-20 items-start ">
          <div className="md:col-span-7 col-span-12">
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
                <p>Phone *</p>
                <Input placeholder="Enter Your First Name" className="py-7" />
              </div>
            </div>
            <div className="flex flex-col mt-10 space-y-2 w-[350px]  md:w-full">
              <p>Opening Position *</p>
              <Select>
                <SelectTrigger className="py-7">
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
            <div className="mt-10 flex flex-col w-[350px] md:w-full  space-y-2">
              <p>Message</p>
              <Textarea placeholder="Type your message here." className="py-7" />
            </div>
            <div className="flex flex-col mt-10 space-y-2 w-[350px] md:w-full">
              <p>Please upload your resume / CV *</p>
              <Input type="file" className="py-7 pt-2" />
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
            <button className='group mt-4 2xl:mt-8 flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md '>Apply <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
            <p className="mt-5 text-muted-foreground">* These fields are required.</p>
          </div>

          <div className="md:col-span-5 col-span-12 flex flex-col  gap-20 ">
          <img src="/applyjob.svg" alt="" className=" w-full h-[500px]" /> 
            {/* {details.map((item, index) => (
              <div key={index} className="flex items-center gap-10 bg-blue-400 p-7">
                 <img src={item.img} alt="" className="w-20" /> 
                <div className="flex flex-col space-y-1">
                  <h1 className="text-2xl font-bold">{item.title}</h1>
                  <p className="text-lg">{item.small}</p>
                  <p className="text-lg">{item.desc}</p>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>

    </>
  )
}

export default ApplyJob
