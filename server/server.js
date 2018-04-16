const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const htmlToText = require('html-to-text');

const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/api/submitter', async (req, res) => {
  try {
    res.send('email received!');
    console.log(req.body);

    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'yryckxusolx7zmsx@ethereal.email',
        pass: 'C5bvNJQv9bfcybgcU5'
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: 'wise-fox-app@sent.this', // sender address
      to: 'arhorn@gmail.com', // list of receivers
      subject: req.body.toWiseFox.subject, // Subject line
      html: req.body.toWiseFox.html,
      text: htmlToText.fromString(req.body.toWiseFox.html, { wordwrap: 130 })
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

    // Use my smcm.edu email for really sending emails
    transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'arhorn@smcm.edu',
        pass: 'jwskjytuieirpjjw'
      }
    });

    mailOptions = {
      from: 'Wise Fox App <wise-fox-app@sent.this>', // sender address
      to: req.body.userEmail, // list of receivers
      subject: req.body.toUser.subject, // Subject line
      html: req.body.toUser.html,
      text: htmlToText.fromString(req.body.toUser.html, { wordwrap: 130 })
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`Server is up on ${port}!`);
});
