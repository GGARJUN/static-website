"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { ArrowRight, Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useState } from "react";
import { toast } from "sonner";



export const formSchema = z.object({
  firstname: z.string().min(2, "First name is too short").max(50),
  lastname: z.string().min(2, "Last name is too short").max(50),
  email: z.string().email("Invalid email"),
  service: z.string().min(1, "Please select a service"), // Ensure selection
  message: z.string().min(2, "Message is required"),
  terms: z.boolean().refine((val) => val === true, { message: "You must accept the terms." }),
});


const FormPage = () => {

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

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values) {
    setIsLoading(true);
    try {
      // Send a POST request to the API route
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
  
      // Parse the response
      const data = await response.json();
  
      // Handle errors
      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }
  
      // Show success message
      if (data.success) {
        toast.success("Your message has been sent successfully!", {
          description: "We'll get back to you soon.",
        });
      } else {
        alert("Failed to send message: " + data.error);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

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
          <Button
            type="submit"
            className="group mt-4 2xl:mt-8 flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md"
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Send message"}
            {!isLoading && <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />}
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
  )
}

export default FormPage
