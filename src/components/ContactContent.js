import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Resend } from 'resend';

export const ContactContent = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const createNotificationEmail = (name, email, message) => ({
    from: 'info@shreevatsnandan.pro',
    to: 'contact@shreevatsnandan.com',
    subject: `New contact form submission from ${name}`,
    html: `<p>You have a new message from ${name} (${email}):</p><p>${message}</p>`,
  });

  const createConfirmationEmail = (name, email, message) => ({
    from: 'info@shreevatsnandan.pro',
    to: email,
    subject: `Thank you for contacting us, ${name}!`,
    html: `<p>Dear ${name},</p>
           <p>Thank you for your message. We have received it and will get back to you soon.</p>
           <p>Best regards,<br/>Shreevats Nandan</p>`,
  });

  const sendEmails = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(form.current);
    const userEmail = formData.get('email');
    const userName = formData.get('name').trim();
    const userMessage = formData.get('message').trim();

    if (!validateEmail(userEmail)) {
      toast.error('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      const [notificationData, confirmationData] = await Promise.all([
        resend.emails.send(createNotificationEmail(userName, userEmail, userMessage)),
        resend.emails.send(createConfirmationEmail(userName, userEmail, userMessage))
      ]);

      if (notificationData.error || confirmationData.error) {
        throw new Error('One or more emails failed to send');
      }

      toast.success("Thank you for your message! We've sent a confirmation to your email.");
      form.current.reset();
    } catch (error) {
      console.error('Failed to send emails:', error);
      toast.error('Failed to send your message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-content">
      <form ref={form} style={{width: "80%", margin: "0 auto"}} onSubmit={sendEmails}>        
        <input type="text" name="name" className="input-field" placeholder="Name" required />
        <input type="email" name="email" className="input-field" placeholder="Email" required />
        <textarea name="message" className="input-field textarea" placeholder="Message" required></textarea>
        <button 
          type="submit" 
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};