"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/app/contact-us/Components/email-template";

// Ensure the API key is loaded
if (!process.env.RESEND_API_KEY) {
  throw new Error("Resend API Key is missing. Please check your .env.local file.");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData) => {
  try {
    console.log("Received Data:", emailFormData);

    // Send email using Resend API
    const { data, error } = await resend.emails.send({
      from: `Acme <no-reply@resend._domainkey.electricalstaticwebsite>`,
      to: [emailFormData.email],
      subject: "Hello world",
      react: EmailTemplate({ firstName: emailFormData.firstName }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, message: "Failed to send email" };
    }

    return { success: true, message: "Form submitted and email sent successfully" };
  } catch (error) {
    console.error("Error handling request:", error);
    return { success: false, message: "Internal Server Error" };
  }
};
