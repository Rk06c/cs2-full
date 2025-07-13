import React from 'react';
import { 
  FaChevronRight, FaMapMarkerAlt, FaPhoneAlt, 
  FaEnvelope, FaClock, FaMoon,
  FaGithub, FaLinkedinIn, FaYoutube
} from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="site-footer" id="about">
      <div className="footer-container">
        {/* Footer Top Section */}
        <div className="footer-top">
          <div className="footer-col footer-about">
            <div className="footer-logo">
              <div className="logo">CSC</div>
              <span>Computer Software College</span>
            </div>
            <p className="footer-about-text">
              A premier institution for computer education, offering industry-relevant courses 
              with hands-on training to shape the tech leaders of tomorrow.
            </p>
            <div className="footer-social">
              <a href="https://github.com/" className="social-icon"><FaGithub /></a>
              <a href="https://in.linkedin.com/" className="social-icon"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/" className="social-icon"><FaYoutube /></a>
            </div>
          </div>
          
          <div className="footer-col footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li><a href=""><FaChevronRight /> Home</a></li>
              <li><a href=""><FaChevronRight /> About Us</a></li>
              <li><a href=""><FaChevronRight /> Courses</a></li>
              <li><a href=""><FaChevronRight /> Admissions</a></li>
              <li><a href=""><FaChevronRight /> Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col footer-courses">
            <h3 className="footer-title">Our Courses</h3>
            <ul>
              <li><a href=""><FaChevronRight /> HDFD</a></li>
              <li><a href=""><FaChevronRight /> HDCA</a></li>
              <li><a href=""><FaChevronRight /> DCA</a></li>
              <li><a href=""><FaChevronRight /> ADCA</a></li>
              <li><a href=""><FaChevronRight /> Tally Prime</a></li>
            </ul>
          </div>
          
          <div className="footer-col footer-contact">
            <h3 className="footer-title">Contact Info</h3>
            <ul>
              <li>
                <FaMapMarkerAlt />
                <span>123 College Street, Manjakuppam<br />Cuddalore, Tamil Nadu 607001</span>
              </li>
              <li>
                <FaPhoneAlt />
                <span>+91 9876543210<br />+91 8765432109</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@csc.edu.in<br />admissions@csc.edu.in</span>
              </li>
              <li>
                <FaClock />
                <span>Mon-Sat: 9AM - 6PM<br />Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Computer Software College. All Rights Reserved.
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
          <div className="theme-toggle">
            <button id="themeToggle">
              <FaMoon /> Dark Mode
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Footer Styles */
        .site-footer {
          background-color: #0a0a1a;
          color: #ccc;
          padding: 60px 0 0;
          font-size: 0.95rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .footer-top {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }
        
        .footer-col {
          padding: 0 15px;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          gap: 15px;
        }
        
        .footer-logo .logo {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e500ff, #5d00ff);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 1.5em;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        
        .footer-logo span {
          font-weight: 600;
          color: white;
          font-size: 1.2rem;
        }
        
        .footer-about-text {
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .footer-social {
          display: flex;
          gap: 15px;
        }
        
        .social-icon {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background-color: #1a1a3d;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ccc;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: linear-gradient(135deg, #e500ff, #5d00ff);
          color: white;
          transform: translateY(-3px);
        }
        
        .footer-title {
          color: white;
          font-size: 1.2rem;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 10px;
        }
        
        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 2px;
          background: linear-gradient(135deg, #e500ff, #5d00ff);
        }
        
        .footer-col ul {
          list-style: none;
        }
        
        .footer-col ul li {
          margin-bottom: 12px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        
        .footer-col ul li a {
          color: #ccc;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .footer-col ul li a:hover {
          color: white;
          transform: translateX(5px);
        }
        
        .footer-col ul li svg {
          color: #e500ff;
          font-size: 0.7rem;
        }
        
        .footer-col ul li span {
          line-height: 1.5;
        }
        
        .footer-bottom {
          border-top: 1px solid #1a1a3d;
          padding: 20px 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }
        
        .footer-copyright {
          color: #888;
        }
        
        .footer-legal {
          display: flex;
          gap: 20px;
        }
        
        .footer-legal a {
          color: #888;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .footer-legal a:hover {
          color: white;
        }
        
        .theme-toggle button {
          background: transparent;
          border: none;
          color: #888;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: all 0.3s ease;
        }
        
        .theme-toggle button:hover {
          color: white;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
          }
          
          .footer-col {
            margin-bottom: 30px;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
          
          .footer-legal {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterComponent;