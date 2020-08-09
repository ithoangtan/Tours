const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");

var transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    type: "OAuth2",
    user: process.env.MY_GMAIL,
    clientId: process.env.CLIENT_ID_GMAIL,
    clientSecret: process.env.CLIENT_SECRET_GMAIL,
    refreshToken: process.env.REFRESH_TOKEN_GMAIL,
    accessToken: process.env.ACCESS_TOKEN_GMAIL,
    // user: "itk160454@gmail.com",
    // clientId:
    //   "187952647481-48snbaum74q2kongn41akvqje12ah3ki.apps.googleusercontent.com",
    // clientSecret: "nyLQCsqSm6tZ_4AMTxX4_8JX",
    // refreshToken:
    //   "1//04jyBbxxKQXDjCgYIARAAGAQSNwF-L9Ir5P6jgsnn6PLg5FPYRUEGs7_24ceiSpOpS8fBTscd8IW90-VZGXg3WDIHssGGbPn5cVc",
    // accessToken: process.env.ACCESS_TOKEN_GMAIL
  },
});

exports.sendEmail = (from, to, subject, html) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail({ from, subject, to, html }, (err, info) => {
      if (err) reject(err);
      resolve(info);
    });
  });
};
