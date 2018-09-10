require('dotenv').config();

const sesAccessKey = process.env.EMAIL;
const sesSecretKey = process.env.PASSWORD;

exports.handler = function(event, context, callback) {
  const nodemailer = require('nodemailer');
  const smtpTransport = require('nodemailer-smtp-transport');
  const querystring = require('querystring');

  const { email, number, message, packageName } = querystring.parse(event.body);

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
  <h1>${packageName}</h1>
  <b>Phone: </b> ${number} <br />
  <b>Message: </b> ${message} <br />
  `;

  const mailOptions = {
    from: email,
    to: 'shakhorsmith@gmail.com',
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
        message: `Email processed succesfully!`,
      }),
    };
    callback(null, response);
  });
};
