const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
      user: process.env.MY_GMAIL,
      clientId: process.env.CLIENT_ID_GMAIL,
      clientSecret: process.env.CLIENT_SECRET_GMAIL,
      refreshToken: process.env.REFRESH_TOKEN_GMAIL
    })
  }
});

exports.sendEmail = (from, to, subject, html) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail({ from, subject, to, html }, (err, info) => {
      if (err) reject(err);
      resolve(info);
    });
  });
};
