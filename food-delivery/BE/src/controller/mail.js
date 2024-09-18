import { userModule, otpModule } from "../schema/user.js";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "st21aye@gmail.com",
    pass: "rqpx kpje xnqo qnbe",
  },
});

export const sendMail = async (req, res) => {
  const { email } = req.body;
  try {
    const user = userModule.findOne({ email });

    if (!user) return res.status(404).json("user not found");

    const generatedOTP = Math.floor(Math.random() * 9000 + 1000);

    await otpModule.create({ email, otp: generatedOTP });

    const mailOptions = {
      from: "st21aye@gmail.com",
      to: email,
      subject: "Password Rest OTP",
      text: `Your OTP for password rest it: ${generatedOTP}`,
    };

    const Info = await transporter.sendMail(mailOptions);
  } catch (error) {
    res.status(404).send({ error: error });
    console.error(error);
  }
};

const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const response = await otpModule.findOne({ email });

    if (!response) return res.status(404).json("otp expired");

    if (response.data.otp === otp) {
    }
  } catch (error) {}
};
