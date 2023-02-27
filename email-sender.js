var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: "alibenslima@yahoo.fr",
    pass: "aaaaaaaaa",
  },
});

var mailOptions = {
  from: "alibenslima@yahoo.fr",
  to: "wadi.sahnoun@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
