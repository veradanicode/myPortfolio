import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); 

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success(' Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
          console.error('EmailJS Error:', error.text);
        }
      )
      .finally(() => {
        setLoading(false); 
      });
  };

  return (
    <section id="contact" className="py-20 bg-white text-center px-6">
      <h2 className="text-4xl font-bold text-purple-600 mb-4">Let's Connect</h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-10">
        Have a project in mind, a question, or just want to say hello? I'd love to hear from you!
      </p>

      <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto grid gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        ></textarea>
        <input
          type="hidden"
          name="time"
          value={new Date().toLocaleString()}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-md font-medium hover:scale-105 transition-transform flex items-center justify-center"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Sending...
            </div>
          ) : (
            'Send Message'
          )}
        </button>
      </form>

      
<ToastContainer
  position="bottom-right"
  autoClose={3000}
  hideProgressBar
  toastClassName="bg-purple-600 text-white font-medium rounded-md shadow-md"
  bodyClassName="text-sm"
  closeButton={false}
/>

      <br />
      <div className="flex justify-center gap-6 text-2xl text-indigo-500">
        <a href="https://linkedin.com/in/vera-daniel-4a6942299" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/veradanicode" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
          <FaTwitter />
        </a>
        <a href="https://github.com/veradanicode" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
          <FaGithub />
        </a>
        <a href="mailto:veradanicode@gmail.com" className="hover:text-purple-500">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}

export default Contact;
