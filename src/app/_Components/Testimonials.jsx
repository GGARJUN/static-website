"use client";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPause,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react";

const Testimonials = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Wendy Redshaw",
      role: "Chief Digital Information Officer, Retail Banking, NatWest Group",
      comment:
        "HCLTech has been a great partner in our digital work. Our teams have worked collaboratively and innovatively to accelerate the delivery of our amazing digital mortgage buying experience.",
      image: "https://img.freepik.com/free-photo/young-man-cartoon-character-with-phone_23-2150964365.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", // Replace with actual image URL
    },
    {
      id: 2,
      name: "John Doe",
      role: "CEO, Company A",
      comment:
        "HCLTech has been a great partner in our digital work. Our teams have worked collaboratively and innovatively to accelerate the delivery of our amazing digital mortgage buying experience.",
      image: "https://img.freepik.com/free-photo/young-man-cartoon-character-with-phone_23-2150964365.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "Designer, Company B",
      comment:
        "HCLTech has been a great partner in our digital work. Our teams have worked collaboratively and innovatively to accelerate the delivery of our amazing digital mortgage buying experience.",
      image: "https://img.freepik.com/free-photo/young-man-cartoon-character-with-phone_23-2150964365.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", // Replace with actual image URL
    },
  ];
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  return (
    <section className="py-20 bg-gradient-to-tl
from-blue-500
to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Testiminials
        </h2>
        <div className="flex justify-center items-center">
          <Carousel  plugins={[plugin.current]} className="w-full max-w-2xl ">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className=" aspect-auto  my-20 mx-10">
                        <div className="flex  items-center mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-gray-700">{testimonial.comment}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext /> 
            <CarouselPause className="right-10 -bottom-12" />
            <CarouselDots />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;