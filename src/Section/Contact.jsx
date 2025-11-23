import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_cqlwf8m';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_w2c2ohn';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'IBI-W4kVGZYBiatj2';

  // Initialize EmailJS with public key
  emailjs.init(EMAILJS_PUBLIC_KEY);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 

    // Validate form
    if (!form.name || !form.email || !form.message) {
      showAlert({ type: 'danger', message: 'Please fill in all fields.' });
      setLoading(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      showAlert({ type: 'danger', message: 'Please enter a valid email address.' });
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setLoading(false); 
          showAlert({ type: 'success', message: 'Message sent successfully!' });
          setForm({ name: '', email: '', message: '' }); 

          setTimeout(() => {
            hideAlert();
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error);
          setLoading(false);
          
          // More specific error messages
          let errorMessage = 'Failed to send the message.';
          if (error.text.includes('network')) {
            errorMessage = 'Network error. Please check your connection and try again.';
          } else if (error.text.includes('invalid')) {
            errorMessage = 'Invalid email configuration. Please contact the administrator.';
          } else if (error.text.includes('blocked')) {
            errorMessage = 'Email service temporarily unavailable. Please try again later.';
          }
          
          showAlert({ type: 'danger', message: errorMessage });

          setTimeout(() => {
            hideAlert();
          }, 5000);
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
          Seeking internship opportunities and ways to help with your project. Ready to bring fresh ideas and technical skills to make an impact.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            {/* Hidden field for EmailJS reply-to functionality */}
            <input type="hidden" name="reply_to" value={form.email} />
            <input type="hidden" name="from_name" value={form.name} />
            
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., Ritu"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., ritu@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts ..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
