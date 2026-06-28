import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import SectionDivider from '../layout/SectionDivider';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // We use Web3Forms for simple static site form submissions
      // You can get your free access key at https://web3forms.com/
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        showToast("Message sent successfully! I'll get back to you soon.", "success");
        setFormData({ name: '', email: '', message: '' });
      } else {
        showToast("Failed to send message. Please try again later.", "error");
      }
    } catch (error) {
      showToast("Something went wrong. Please check your connection.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <SectionDivider />
      
      {/* Toast Notification */}
      <div className={`toast-notification ${toast.show ? 'show' : ''} ${toast.type}`}>
        {toast.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
        <span>{toast.message}</span>
      </div>

      <div className="contact-container fade-in">
        <div className="contact-card">
          <div className="contact-header">
            <h2 className="section-title">LET'S BUILD THE FUTURE TOGETHER!</h2>
            <p className="contact-subtext">
              Have a project in mind or want to collaborate? Drop me a message and let's set sail!
            </p>
          </div>

          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  required 
                  className="form-input" 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  required 
                  className="form-input" 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Message" 
                  rows={5} 
                  required 
                  className="form-input"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'SENDING...' : 'CONTACT ME'} {!isSubmitting && <FaEnvelope />}
              </button>
            </form>
            
            <div className="contact-divider">
              <span>OR</span>
            </div>
            
            <div className="contact-social">
              <a href="https://github.com/Imran65545" target="_blank" rel="noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/imran-choudhary-a73398250/" target="_blank" rel="noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://x.com/imran_739" target="_blank" rel="noreferrer" className="social-link">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="ship-illustration">
             {/* Faint ship illustration using emoji as placeholder */}
             ⛵
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
