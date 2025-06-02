const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const notificationEmail = {
      from: 'info@shreevatsnandan.pro',
      to: 'contact@shreevatsnandan.com',
      subject: `New contact form submission from ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    const confirmationEmail = {
      from: 'info@shreevatsnandan.pro',
      to: email,
      subject: `Thank you for contacting us, ${name}!`,
      text: `Dear ${name},\n\nThank you for your message...`,
    };

    const responses = await Promise.all([
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
        },
        body: JSON.stringify(notificationEmail)
      }),
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
        },
        body: JSON.stringify(confirmationEmail)
      })
    ]);

    const results = await Promise.all(responses.map(res => res.json()));
    res.status(200).json({ success: true, results });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));