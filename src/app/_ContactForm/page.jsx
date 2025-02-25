"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const BottomGradient = () => {
  return (
    <>
      <span className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
      <span className="absolute left-1/4 bottom-0 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div>
        <h2 className="text-7xl">Hello</h2>
    </div>
  );
};

export default ContactForm;
