"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPause, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: "Wendy Redshaw", role: "Chief Digital Information Officer.", comment: "HCLTech has been a great partner in our digital work. Our teams have worked collaboratively and innovatively to accelerate the delivery of our amazing digital mortgage buying experience.", image: "https://img.freepik.com/free-photo/young-man-cartoon-character-with-phone_23-2150964365.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" },
    { id: 2, name: "John Doe", role: "CEO, Company A", comment: "HCLTech has been a great partner in our digital work. Our teams have worked collaboratively and innovatively to accelerate the delivery of our amazing digital mortgage buying experience.", image: "https://img.freepik.com/free-photo/young-man-cartoon-character-with-phone_23-2150964365.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" },
    { id: 3, name: "Jane Smith", role: "Designer, Company B", comment: "HCLTech has been a great partner in our digital work. Our teams have worked collaboratively and innovatively to accelerate the delivery of our amazing digital mortgage buying experience.", image: "https://img.freepik.com/free-photo/young-man-cartoon-character-with-phone_23-2150964365.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" },
  ];
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section className="pt-32 pb-52 relative shadow-2xl bg-gradient-to-r from-pink-300/10 via-purple-200 to-indigo-400/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-4">Testimonials</h2>
        <div className="flex justify-center items-center mt-16">
          <Carousel plugins={[plugin.current]} className="w-full max-w-5xl">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="aspect-auto my-20 mx-20">
                        <div className="flex items-center mb-4">
                          <Image  priority src={testimonial.image} alt={testimonial.name} width={50} height={50} className="w-20 h-20 rounded-full mr-4 object-cover" />
                          <div>
                            <h3 className="text-lg md:text-4xl font-semibold text-gray-800">{testimonial.name}</h3>
                            <p className="text-md md:text-2xl mt-3 text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 text-md md:text-xl mt-10">{testimonial.comment}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <CarouselPause className="right-10 -bottom-24" />
            <CarouselDots />
          </Carousel>
        </div>
      </div>
      <div className="lg:block absolute hidden top-40 left-[22%] -rotate-[12deg]">
        <Image priority src="https://img.freepik.com/free-photo/portrait-businesswoman-isolated-home_23-2148813223.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="user img" width={100} height={100} className="h-32 w-32 object-cover rounded-full border-4 shadow-2xl border-gray-900 p-1" />
      </div>
      <div className="lg:block absolute hidden bottom-40 right-[21%] rotate-[2deg]">
        <Image priority src="https://img.freepik.com/free-photo/portrait-smiling-young-businesswoman-standing-with-her-arm-crossed-against-gray-wall_23-2147943827.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="user img" width={100} height={100} className="h-32 w-32 object-cover rounded-full border-4 shadow-2xl border-gray-900 p-1" />
      </div>
    </section>
  );
};

export default Testimonials;