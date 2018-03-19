const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/api/promo_submitter', async (req, res) => {
  try {
    res.send('email received!');
    // console.log(req.body);

    // // Use my smcm.edu email for really sending emails
    // const transporter = nodemailer.createTransport({
    //   service: 'Gmail',
    //   auth: {
    //     user: 'arhorn@smcm.edu',
    //     pass: 'jwskjytuieirpjjw'
    //   }
    // });

    const transporter = nodemailer.createTransport({
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
      subject: 'The app sent this ✔', // Subject line
      text: req.body.text,
      html: req.body.html
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
  } catch (e) {
    res.status(400).send(e);
  };
});

app.listen(port, () => {
  console.log(`Server is up on ${port}!`);
});