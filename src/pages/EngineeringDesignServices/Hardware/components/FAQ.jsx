import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"

const FAQ = () => {
  const imageUrl = "https://img.freepik.com/free-photo/scenes-people-work_23-2151895519.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";
  return (
    <div>
      <h1 className='text-5xl font-bold mt-5'>FQA's</h1>
      <div className="flex justify-between  mt-10">
        <Accordion type="single" collapsible className="max-w-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h2>What tools do you use for hardware design?</h2>
            </AccordionTrigger>
            <AccordionContent>
              <h2>We use industry-standard tools like PTC Windchill and Altair CAE Suite for our hardware design services.</h2>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h2>Can you help with prototyping?</h2>
            </AccordionTrigger>
            <AccordionContent>
              <h2>Yes, we offer prototyping services to help you test and refine your product.
              </h2>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h2>How do you ensure design manufacturability?</h2>
            </AccordionTrigger>
            <AccordionContent>
              <h2>We conduct design for manufacturability analyses to ensure that your designs are optimized for production.</h2>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <h2>Do you provide thermal and structural analysis?</h2>
            </AccordionTrigger>
            <AccordionContent>
              <h2>Yes, we conduct thermal and structural analyses to ensure product reliability and performance.</h2>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <h2>How do you handle complex design projects?</h2>
            </AccordionTrigger>
            <AccordionContent>
              <h2>We handle complex projects by integrating multiple design aspects into a logical and comprehensible process.</h2>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="h-[630px] w-[600px] col-span-4 rounded-xl shadow-lg relative  flex items-center justify-center">
          <DirectionAwareHover imageUrl={imageUrl}>
            {/* <p className="font-bold text-xl">In the mountains</p>
                    <p className="font-normal text-sm">$1299 / night</p> */}
          </DirectionAwareHover>
        </div>
      </div>
    </div>
  )
}

export default FAQ
