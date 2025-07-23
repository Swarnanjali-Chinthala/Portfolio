import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yj52f5h',   // Replace with your actual Service ID
      'template_z7w4u6f',  // Replace with your actual Template ID
      form.current,
      'user_A5i0ub0iLz0a-sxNi'    // Replace with your actual Public Key
    )
    .then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.error(error.text);
        alert('Oops! Something went wrong.');
      }
    );
  };

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl  mb-4">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 rounded border border-gray-300 dark:border-gray-600"
        />
        <input
          type="email"
          name="reply_to"  // ⚡ IMPORTANT: name must match the template variable for Reply-To!
          placeholder="Your Email"
          required
          className="p-3 rounded border border-gray-300 dark:border-gray-600"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="p-3 rounded border border-gray-300 dark:border-gray-600"
          rows="5"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
