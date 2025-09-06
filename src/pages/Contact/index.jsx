import { useState } from "react";
import "./index.css";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, subject, message } = formData;

  // Pre-fill message
  const whatsappMessage = `Hello, I am ${name}.
Email: ${email}
Subject: ${subject}
Message: ${message}`;

  // Encode and redirect to WhatsApp
  const url = `https://wa.me/919948446265?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(url, "_blank");

  // Optionally reset form
  setFormData({ name: "", email: "", subject: "", message: "" });
};


  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Feel free to reach out regarding career opportunities, or any professional inquiries
          </p>

          <div className="contact-detail">
            <Mail size={20} />
            <a href="mailto:youremail@example.com">
              chinthalaswarnanjali@gmail.com
            </a>
          </div>

          <div className="contact-detail">
            <Phone size={20} />
            <span>+91 9948446265</span>
          </div>

          <div className="contact-detail">
            <MapPin size={20} />
            <span>Hyderabad, India</span>
          </div>

          <div className="social-links">
            <a href="https://github.com/Swarnanjali-Chinthala" target="_blank" rel="noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/swarnanjali/" target="_blank" rel="noreferrer">
              <Linkedin size={24} />
            </a>
            <a
              href="https://wa.me/919948446265?text=Hello%20I%20saw%20your%20portfolio!"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={24} />
            </a>

          </div>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Subject</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
