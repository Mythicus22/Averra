if(process.env.NODE_ENV != "production"){ // this will check if the environment is not production, then it will load the .env file production is when we have deployed the application and we don't want to expose our environment variables to everyone so we dont use them in production phase
    require('dotenv').config() // this will load the environment variables from the .env file into process.env
}
const nodemailer = require("nodemailer");

const sendEmailOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is: ${otp}`
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (err) {
    console.error("Failed to send email:", err.message);
    throw new Error("Failed to send OTP email");
  }
};
module.exports = { sendEmailOTP };