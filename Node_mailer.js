var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'arohyadav8@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'arohyadav8@gmail.com',
  to: 'arohyadav86@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'Email sent!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});