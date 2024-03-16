const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "krunaldphoto@gmail.com",
    pass: "ovtp muie ymwr rdwe",
  },
});

const sendOTPByEmail = (email, otp) => {
  const mailOptions = {
    from: "krunaldphoto@gmail.com",
    to: email,
    subject: "OTP Verification",
    text: `Your OTP is : ${otp} \n from krunal`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

module.exports = { sendOTPByEmail };
