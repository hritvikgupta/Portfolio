const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: 'hritvik7654@gmail.com', // Your email
    from: 'hritvik7654@gmail.com', // Your email
    subject: `Message from ${name}`,
    text: message,
    replyTo: email,
  };

  try {
    await sgMail.send(msg);
    res.send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }

    res.status(500).send({ message: 'Something went wrong.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
