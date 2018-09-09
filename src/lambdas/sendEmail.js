const sesAccessKey = process.env.EMAIL;
const sesSecretKey = process.env.PASSWORD;

exports.handler = function(event, context, callback) {
  const nodemailer = require('nodemailer');
  const smtpTransport = require('nodemailer-smtp-transport');

  const requestBody = JSON.parse(event.body);

  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      auth: {
        user: sesAccessKey,
        pass: sesSecretKey,
      },
    })
  );

  const mailOptions = {
    from: requestBody.email,
    to: 'shakhorsmith@gmail.com',
    subject: requestBody.package,
    text: requestBody.message,
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
