import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { firstname, lastname, email, service, message } = await request.json();

    // Validate required fields
    if (!firstname || !lastname || !email || !service || !message) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    // Configure SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Change this based on your provider
      // host: "smtp.sunkeydesignsystems.com", // Replace with your actual SMTP host
      port: 587, // Use 465 for SSL or 587 for TLS
      secure: false, // True for SSL, false for TLS
      auth: {
        user: "techarjung@gmail.com", // Your Gmail address
        pass: "ifsi zovt nsjm xusd", // Your Gmail App Password
        // user: process.env.EMAIL_USER, // Your Gmail address
        // pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
      tls: {
        rejectUnauthorized: false, // Bypass SSL certificate validation (use with caution)
      },
      debug: true, // Enable debugging
      logger: true, // Log to the console
    });

    // Define email content
    const mailOptions = {
      from: `"Sunkey Design Systems" <techarjung@gmail.com>`, // Must be a verified domain email
      // to: process.env.EMAIL_RECEIVER, // Your receiving email
      to: ["v.jain@sunkeydesignsystems.com", "kumar@sunkeydesignsystems.com","arjunganesh963@gmail.com"].join(","), // Your receiving email
      replyTo: email, // User's actual email (so you can reply directly)
      subject: "New Contact Form Submission",
      html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
        <!-- Header Section -->
        <div style="background-color: #007BFF; padding: 20px; text-align: center;">
          <img src="https://www.sunkeydesignsystems.com/logo.png" alt="Company Logo" style="width: 100px; height: auto;"/>
          <h1 style="color: #fff; margin: 10px 0 0; font-size: 24px;">Contact Form Submission</h1>
        </div>
      
        <!-- Body Section -->
        <div style="padding: 20px;">
          <h2 style="color: #007BFF; font-size: 20px; margin-bottom: 10px;">Hello Team,</h2>
          <p style="font-size: 16px; line-height: 1.5;">
            You have received a new contact form submission. Here are the details:
          </p>
      
          <!-- Details with Icons -->
          <div style="margin-top: 20px;">
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="User Icon" style="width: 20px; height: 20px; margin-right: 10px;"/>
              <span><strong>Name:</strong> ${firstname} ${lastname}</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email Icon" style="width: 20px; height: 20px; margin-right: 10px;"/>
              <span><strong>Email:</strong> ${email}</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" alt="Service Icon" style="width: 20px; height: 20px; margin-right: 10px;"/>
              <span><strong>Service:</strong> ${service}</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <img src="https://cdn-icons-png.flaticon.com/512/542/542638.png" alt="Message Icon" style="width: 20px; height: 20px; margin-right: 10px;"/>
              <span><strong>Message:</strong> ${message}</span>
            </div>
          </div>
      
          <!-- Call to Action Button -->
          <div style="text-align: center; margin-top: 30px;">
            <a href="https://www.sunkeydesignsystems.com/contact" style="background-color: #007BFF; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">
              View Full Details
            </a>
          </div>
        </div>
      
        <!-- Footer Section -->
        <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 14px; color: #666;">
          <p style="margin: 0;">&copy; 2023 Sunkey Design Systems. All rights reserved.</p>
          <p style="margin: 5px 0 0;">
            <a href="https://www.sunkeydesignsystems.com" style="color: #007BFF; text-decoration: none;">Visit our website</a>
          </p>
        </div>
      </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send email. Please try again later." }, { status: 500 });
  }
}