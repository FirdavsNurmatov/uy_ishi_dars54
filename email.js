import nodemailer from "nodemailer";
import { otp } from "./otp.js";
import { logger } from "./src/utils/index.js";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "firdavsnurmatov450@gmail.com",
    pass: "jksj zogm yzpo dkcp",
  },
});

const sendmail = async () => {
  transport.sendMail(
    {
      from: "firdavsnurmatov450@gmail.com",
      to: "nurmatovfirdavs96@gmail.com",
      subject: `Siznig otp passwordingiz ${otp}`,
      text: "Salom Dunyo",
    },
    function (error, info) {
      if (error) {
        logger.error(error);
      } else {
        logger.info("Sms jo'natildi " + info.response);
      }
    }
  );
};

await sendmail();
