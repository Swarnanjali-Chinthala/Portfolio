import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yj52f5h',
      'template_z7w4u6f',
      form.current,
      'A5i0ub0iLz0a-sxNi'
    )
    .then(() => {
      alert('Message sent!');
      form.current.reset();
    }, (error) => {
      console.error(error);
      alert('Failed to send message.');
    });
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="reply_to" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
