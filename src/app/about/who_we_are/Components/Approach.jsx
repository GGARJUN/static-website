import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Accordion } from "@radix-ui/react-accordion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Expertise = () => {

  const imageUrl = "https://img.freepik.com/free-photo/3d-delivery-robot-working_23-2151150219.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";

  return (
    <div className='lg:flex  justify-between items-center gap-10 '>
      <div className='max-w-3xl'>
        <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>our approach</h2>
        <h1 className='title-all my-5 '>Innovative solutions driving<span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'> business success </span></h1>
        <p className='text-lg font-medium text-gray-600 tracking-wide mt-8'>Transform your business with cutting-edge solutions tailored to meet your unique challenges We leverage innovation and expertise to streamline processes.
        </p>
        {/* FAQ Section */}
        <div className=" w-full mt-10 ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>1. What tools do you use for hardware design?</AccordionTrigger>
              <AccordionContent>
                We use industry-standard tools like PTC Windchill and Altair CAE Suite for our hardware design services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2. Can you help with prototyping?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer prototyping services to help you test and refine your product.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3. How do you ensure design manufacturability?</AccordionTrigger>
              <AccordionContent>
                We conduct design for manufacturability analyses to ensure that your designs are optimized for production.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <button className='group flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md mt-10'>Contact Now <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
      </div>

      
      <div className="relative w-full flex justify-end items-center mt-10 lg:mt-0">
        <div className="relative lg:w-[400px] md:h-[550px] w-full h-[500px]">
          <Image priority width={1000} height={1000}
            src="https://img.freepik.com/free-photo/focused-leader-woman-enter-office-meeting-room-lean-conference-table-brainstorming-business-company-presentation-late-night-diverse-multi-ethnic-teamwork-solving-management-strategy_482257-16485.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
            alt="Office Meeting"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Foreground Image */}
        <div className="absolute left-40 top-10 md:w-[300px] md:h-[400px] border-4 border-white shadow-lg 2xl:block hidden">
        <Image priority width={1000} height={1000}
            src="https://img.freepik.com/free-photo/trans-person-working-office-with-colleagues_23-2149286984.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
            alt="Business Discussion"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      
    </div >
  )
}

export default Expertise
