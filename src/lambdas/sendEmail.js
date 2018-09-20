import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

require('dotenv').config();

const sesAccessKey = process.env.EMAIL;
const sesSecretKey = process.env.PASSWORD;

exports.handler = function(event, context, callback) {
  const params = JSON.parse(event.body);
  const { email, packageName, name, number, message } = params;

  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      auth: {
        user: sesAccessKey,
        pass: sesSecretKey,
      },
    })
  );

  const html = `
  <b>Package: </b> ${packageName} <br />
  <b>Name: </b> ${name} <br />
  <b>Email: </b> ${email} <br />
  <b>Phone: </b> ${number} <br />
  <b>Message: </b> ${message} <br />
  `;

  const mailOptions = {
    from: email,
    to: 'suitesbyjk@gmail.com',
    subject: packageName,
    text: message,
    html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message,
        }),
      };
      callback(null, response);
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Email sent successfully!',
      }),
    };
    callback(null, response);
  });
};
