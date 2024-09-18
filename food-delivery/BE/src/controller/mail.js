import nodemailer from "nodemailer";
import { userModel } from "../schema/user.js";
import { otpModel } from "../schema/otp.js";
import { accessTokenModel } from "../schema/accessToken.js";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";

const saltRounds = 10;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "munkhbat20241715@gmail.com",
    pass: "fdhybrrxoebqrdsc",
  },
});

export const sendMail = async (req, res) => {
  const { email } = req.body;
  console.log(email);

  try {
    const user = userModel.findOne({ email });

    if (!user) return res.status(404).json("user not found");

    const generatedOTP = Math.floor(Math.random() * 9000 + 1000);

    await otpModel.create({ email, otp: generatedOTP });

    const mailOptions = {
      from: "munkhbat20241715@gmail.com",
      to: email,
      subject: "Password Rest OTP",
      text: `Your OTP for password rest it: ${generatedOTP}`,
    };

    const Info = await transporter.sendMail(mailOptions);
    return res.status(200).send({ message: "sent" });
  } catch (error) {
    res.status(404).send({ error: error });
    console.error(error);
  }
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const response = await otpModel.findOne({ email });

    if (!response) return res.status(404).json("otp expired");
    if (response.otp !== otp) {
      res.status(404).send("zlaa");
    }

    if (response.otp === otp) {
      const token = await accessTokenModel.create({
        email,
        accessToken: nanoid(),
      });
      console.log(token);

      res.status(200).send({ success: true, accessToken: token.accessToken });
    }
  } catch (error) {
    res.status(500).send({ error: error });
    console.error(error);
  }
};

export const passwordReset = async (req, res) => {
  const { email, accessToken, password } = req.body;
  try {
    const response = await accessTokenModel.findOne({ email });

    if (!response) return res.status(404).json("accessToken expired");

    if (response.accessToken === accessToken) {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(password, salt);

      userModel.updateOne({ email }, { password: hash });
      res.status(200).send({ success: true });
    }
  } catch (error) {
    res.status(500).send({ error: error });
    console.error(error);
  }
};
