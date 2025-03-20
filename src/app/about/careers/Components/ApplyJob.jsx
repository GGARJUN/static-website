'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';
import { useState } from "react";


const formSchema = z.object({
  firstname: z.string().min(2, 'First name is too short').max(50),
  lastname: z.string().min(2, 'Last name is too short').max(50),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone number is too short').max(15),
  position: z.string().min(1, 'Please select a position'),
  message: z.string().min(5, 'Message is too short'),
  resume: z.instanceof(File, { message: 'Resume is required' }),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
});

const ApplyJob = () => {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      position: '',
      message: '',
      resume: undefined,
      terms: false,
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  
  const onSubmit = async (values) => {
    if (!values.resume) {
      toast.error("Please upload a resume before submitting.");
      return;
    }
  
    setIsLoading(true);
    
    try {
      const fileReader = new FileReader();
  
      fileReader.onload = async () => {
        try {
          const base64Resume = fileReader.result.split(',')[1];
  
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...values,
              resume: {
                name: values.resume.name,
                content: base64Resume,
              },
            }),
          });
  
          const data = await response.json();
  
          if (!response.ok) {
            throw new Error(data.error || 'Failed to send email');
          }
  
          toast.success('Your application has been submitted successfully!', {
            description: 'We will get back to you soon.',
          });
  
        } catch (error) {
          console.error('Error:', error);
          toast.error('An error occurred. Please try again later.', {
            description: error.message,
          });
        } finally {
          setIsLoading(false); // ✅ Move inside fileReader.onload to prevent premature execution
        }
      };
  
      fileReader.readAsDataURL(values.resume);
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.', {
        description: error.message,
      });
      setIsLoading(false); // ✅ Ensure loading stops even if FileReader fails
    }
  };
  

  return (
    <div>
      <h2 className="flex items-center gap-3 text-lg font-medium">
        <div className="bg-blue-600 h-2 w-2 rounded-full"></div> Apply Job
      </h2>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 mb-20">
        <span className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text">
          Get in touch with us
        </span>
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-12 gap-6 lg:gap-20 items-start">
          {/* Left Column (Form Section) */}
          <div className="lg:col-span-7 col-span-12">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your First Name" className="py-5 lg:py-7" {...field} />
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
                      <Input placeholder="Enter Your Last Name" className="py-5 lg:py-7" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-6 lg:mt-10">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your Email" className="py-5 lg:py-7" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your Phone Number" className="py-5 lg:py-7" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Opening Position */}
            <div className="flex flex-col mt-6 lg:mt-10 space-y-2 w-full">
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Opening Position *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="py-5 lg:py-7">
                          <SelectValue placeholder="Select a Position" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select a Position</SelectLabel>
                          <SelectItem value="Web Development">Web Development</SelectItem>
                          <SelectItem value="Full Stack Development">Full Stack Development</SelectItem>
                          <SelectItem value="UI UX Design">UI UX Design</SelectItem>
                          <SelectItem value="Wordpress Development">Wordpress Development</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col mt-6 lg:mt-10 space-y-2 w-full">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Type your message here." className="py-5 lg:py-7" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Upload Resume */}
            <div className="flex flex-col mt-6 lg:mt-10 space-y-2 w-full">
              <FormField
                control={form.control}
                name="resume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Please upload your resume / CV *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="file"
                          className="py-5 lg:py-7 pt-2"
                          onChange={(e) => {
                            field.onChange(e.target.files?.[0]);
                            setIsFileUploaded(!!e.target.files?.[0]); // Set file upload state
                          }}
                        />
                        {isFileUploaded && (
                          <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500 animate-bounce" />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center space-x-4 mt-6 lg:mt-10">
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-lg font-medium">
                      Accept <span className="text-blue-600">terms and conditions</span>
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>

            {/* Apply Button */}
            <Button
              type="submit"

              className="group mt-4 2xl:mt-8 flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" /> // Spinning loader
              ) : (
                <>
                  Apply
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </Button>

            {/* Required Fields Note */}
            <p className="mt-5 text-muted-foreground">* These fields are required.</p>
          </div>

          {/* Right Column (Image Section) */}
          <div className="lg:col-span-5 col-span-12 hidden lg:block">
            <img loading='lazy'  src="/applyjob.svg" alt="applyjobimg" className="w-full h-[500px]" />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ApplyJob;