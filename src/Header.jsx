import React from 'react';

import { FaWhatsapp, FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <header>
        <div className="logo">CSC</div>
        <nav>
          <a href="#home">home</a>

          {/* <Link to="/#home">home</Link> */}
          <a href="#course">course</a>
          <a href="#contact">contact</a>
          <a href="#about">about</a>
        </nav>
      </header>
      <div className="hero-section" id="home">
        <div className="name" >CSC</div>
        <h1>COMPUTER SOFTWARE COLLEGE</h1>
        <div className="certification">An ISO 9001:2000 Certified Institution</div>
        <div className="branch"><i>Manjakuppam Branch </i></div>

        <div className="hero-buttons">
          <button id="course">Explore Courses</button>
          <button><a href="#contact">contact</a>Us</button>
        </div>

        <div className="social-buttons">
          <a href="https://wa.me/YOUR_NUMBER" className="social-btn whatsapp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/cscmanjakuppam?igsh=aHpnN3Jnb2JoMGVl" className="social-btn instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:YOUR_EMAIL" className="social-btn email">
            <FaEnvelope />
          </a>
          <a href="https://facebook.com/YOUR_PROFILE" className="social-btn facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </div>
      </div>

      <style jsx>{`
        /* Header styles */
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 50px;
          background-color: #1a1a3d;
        }

        /* Logo */
        .logo {
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

        /* Navigation */
        nav {
          display: flex;
        }

        nav a {
          margin-left: 30px;
          text-decoration: none;
          color: #ccc;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9em;
          transition: all 0.3s ease;
          padding: 8px 12px;
          border-radius: 2px;
        }

        nav a:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        /* Hero Section */
        .hero-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 20px;
          min-height: calc(100vh - 90px); /* Subtract header height */
        }

        .name {
          font-size: 12rem;
          font-weight: bold;
          background: linear-gradient(135deg, #e500ff, #5d00ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 20px;
        }

       
        h1 {
          font-size: 2.5rem;
          font-family: 'mr', cursive;
          margin-bottom: 15px;
          color: #fff;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .certification, .branch {
          font-family: "m1";
          font-size: 1.2rem;
          color: #ccc;
          margin-bottom: 15px;
        }

        .branch {
          margin-bottom: 40px;
          color: #a0a0ff;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 50px;
        }

        .hero-buttons button {
          padding: 12px 30px;
          border-radius: 30px;
          border: none;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-buttons button:first-child {
          background: linear-gradient(135deg, #e500ff, #5d00ff);
          color: white;
        }

        .hero-buttons button:last-child {
          background: transparent;
          color: white;
          border: 2px solid #5d00ff;
        }

        .hero-buttons button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        /* Social Buttons */
        .social-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .social-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5em;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .social-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }

        .whatsapp { background-color: #25D366; }
        .instagram { background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80); }
        .email { background: linear-gradient(to right, #D44638, #EB6C4D); }
        .facebook { background-color: #1877F2; }

        /* Responsive Design */
        @media (max-width: 768px) {
          header {
            padding: 15px 20px;
            flex-direction: column;
            gap: 15px;
          }
          
          nav {
            width: 100%;
            justify-content: space-around;
          }
          
          nav a {
            margin-left: 0;
            font-size: 0.8rem;
          }
          
          .hero-section {
            padding: 60px 20px;
          }
          
          .name {
            font-size: 12rem;
          }
          
          h1 {
            font-size: 1.4rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>

    </>
  );
}



export default Header;