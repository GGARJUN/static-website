import nodemailer from 'nodemailer';

// Create a transporter object using Gmail
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail App Password
  },
});

export async function POST(request) {
  try {
    // Parse the request body
    const { firstname, lastname, email, phone, position, message, resume } = await request.json();

    // Validate required fields
    if (!firstname || !lastname || !email || !phone || !position || !message || !resume) {
      return Response.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Define email options
    const mailOptions = {
      from: email, // Sender's email
      to: process.env.EMAIL_RECEIVER, // Recipient's email
      subject: 'New Job Application Submission',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <!-- Header Section -->
          <div style="background-color: #007BFF; padding: 20px; text-align: center;">
            <img src="https://yourdomain.com/logo.png" alt="Company Logo" style="width: 100px; height: auto;"/>
            <h1 style="color: #fff; margin: 10px 0 0; font-size: 24px;">Job Application Received</h1>
          </div>

          <!-- Body Section -->
          <div style="padding: 20px;">
            <h2 style="color: #007BFF; font-size: 20px; margin-bottom: 10px;">Hello Team,</h2>
            <p style="font-size: 16px; line-height: 1.5;">
              A new job application has been submitted. Here are the details:
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
                <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" alt="Phone Icon" style="width: 20px; height: 20px; margin-right: 10px;"/>
                <span><strong>Phone:</strong> ${phone}</span>
              </div>
              <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" alt="Position Icon" style="width: 20px; height: 20px; margin-right: 10px;"/>
                <span><strong>Position:</strong> ${position}</span>
              </div>
              <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <img src="https://cdn-icons-png.flaticon.com/512/542/542638.png" alt="Message Icon" style="width: 20px; height: 20px; margin-right: 10px;"/>
                <span><strong>Message:</strong> ${message}</span>
              </div>
            </div>

            <!-- Call to Action Button -->
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://yourdomain.com/dashboard" style="background-color: #007BFF; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">
                View Application
              </a>
            </div>
          </div>

          <!-- Footer Section -->
          <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 14px; color: #666;">
            <p style="margin: 0;">&copy; 2023 Your Company. All rights reserved.</p>
            <p style="margin: 5px 0 0;">
              <a href="https://yourdomain.com" style="color: #007BFF; text-decoration: none;">Visit our website</a>
            </p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: resume.name,
          content: Buffer.from(resume.content, 'base64'), // Attach the resume file
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return Response.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
  }
}