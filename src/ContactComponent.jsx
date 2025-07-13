import React, { useState } from 'react';
import { 
  FaEnvelope, FaUser, FaPhone, FaGraduationCap, 
  FaComment, FaPaperPlane, FaMapMarkerAlt, 
  FaPhoneAlt, FaClock, FaFacebookF, FaTwitter, 
  FaInstagram, FaLinkedinIn, FaYoutube 
} from 'react-icons/fa';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
      <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2><FaEnvelope /> Contact Us</h2>
        <p className="contact-subtitle">Get in touch for course inquiries or more information</p>
        
        {submitStatus && (
          <div className={`alert ${submitStatus.success ? 'alert-success' : 'alert-error'}`}>
            {submitStatus.message}
          </div>
        )}
        
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name"><FaUser /> Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email"><FaEnvelope /> Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone"><FaPhone /> Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="course"><FaGraduationCap /> Course Interest</label>
                <select 
                  id="course" 
                  name="course" 
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="">Select a course</option>
                  <option value="HDFD">Honours Diploma in Full-Stack Development</option>
                  <option value="HDCA">Honours Diploma in Computer Application</option>
                  <option value="DCA">Diploma in Computer Application</option>
                  <option value="ADCA">Advanced Diploma in Computer Application</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message"><FaComment /> Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                 <a
      href="https://www.google.com/maps/place/CSC+Computer/@11.7576271,79.7639292,17z"
      target="_blank"
      rel="noopener noreferrer"
      className="info-icon"
    >
                <FaMapMarkerAlt />
                </a>
              </div>
              <div className="info-content">
                <h3>Our Location</h3>
                <p>123 College Street, Manjakuppam<br />Cuddalore, Tamil Nadu 607001</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaPhoneAlt />
              </div>
              <div className="info-content">
                <h3>Phone Numbers</h3>
                <p>+91 9876543210<br />+91 8765432109</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>Email Address</h3>
                <p>info@csc.edu.in<br />admissions@csc.edu.in</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-content">
                <h3>Working Hours</h3>
                <p>Monday - Saturday: 9AM - 6PM<br />Sunday: Closed</p>
              </div>
            </div>
            
            <div className="contact-social">
              <h3>Connect With Us</h3>
              <div className="social-links">
                <a href="#" className="social-link"><FaFacebookF /></a>
                <a href="#" className="social-link"><FaTwitter /></a>
                <a href="#" className="social-link"><FaInstagram /></a>
                <a href="#" className="social-link"><FaLinkedinIn /></a>
                <a href="#" className="social-link"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
       .alert {
          padding: 15px;
          margin-bottom: 20px;
          border-radius: 5px;
          text-align: center;
        }
        
        .alert-success {
          background-color: #d4edda;
          color: #155724;
        }
        
        .alert-error {
          background-color: #f8d7da;
          color: #721c24;
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Contact Section Styles */
        .contact-section {
          background-color: #141432;
          padding: 80px 0;
          color: white;
        }
        
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .contact-section h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }
        
        .contact-section h2 svg {
          color: #e500ff;
        }
        
        .contact-subtitle {
          text-align: center;
          color: #a0a0ff;
          margin-bottom: 50px;
          font-size: 1.1rem;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        
        /* Contact Form Styles */
        .contact-form {
          background-color: #1a1a3d;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #a0a0ff;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .form-group label svg {
          width: 20px;
          text-align: center;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #2a2a5a;
          border-radius: 5px;
          background-color: #25254d;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #e500ff;
          box-shadow: 0 0 0 2px rgba(229, 0, 255, 0.2);
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-btn {
          background: linear-gradient(135deg, #e500ff, #5d00ff);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 30px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }
        
        /* Contact Info Styles */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .info-card {
          background-color: #1a1a3d;
          padding: 20px;
          border-radius: 10px;
          display: flex;
          gap: 20px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        
        .info-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #e500ff, #5d00ff);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: white;
          flex-shrink: 0;
        }
        
        .info-content h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
          color: white;
        }
        
        .info-content p {
          color: #ccc;
          line-height: 1.6;
        }
        
        .contact-social {
          background-color: #1a1a3d;
          padding: 20px;
          border-radius: 10px;
          margin-top: 10px;
        }
        
        .contact-social h3 {
          font-size: 1.2rem;
          margin-bottom: 15px;
          color: white;
        }
        
        .social-links {
          display: flex;
          gap: 15px;
        }
        
        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #25254d;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: linear-gradient(135deg, #e500ff, #5d00ff);
          transform: translateY(-3px);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .contact-section h2 {
            font-size: 2rem;
          }
          
          .contact-subtitle {
            font-size: 1rem;
          }
          
          .info-card {
            flex-direction: column;
            text-align: center;
          }
          
          .info-icon {
            margin: 0 auto 15px;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactComponent;