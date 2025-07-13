import React from 'react';
import { 
  FaCuttlefish, FaPlus, FaJava, FaPython, FaHtml5, FaCss3Alt, 
  FaBootstrap, FaReact, FaPhp, FaLaravel, FaLeaf,
  FaWindows, FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileAlt,
  FaInternetExplorer, FaCalculator, FaCode
} from 'react-icons/fa';

const TechComponent = () => {
  // Programming languages data
  const programmingTechs = [
    { name: "C Programming", icon: <FaCuttlefish /> },
    { name: "C++", icon: <><FaPlus style={{ fontSize: '1rem', position: 'absolute', transform: 'translate(-10px, -10px)' }} /><FaCuttlefish /></> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "React JS", icon: <FaReact /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "Django", icon: <FaPython /> },
    { name: "Spring Boot", icon: <FaLeaf /> }
  ];

  // Office/Other tech data
  const officeTechs = [
    { name: "Windows OS", icon: <FaWindows /> },
    { name: "MS Word", icon: <FaFileWord /> },
    { name: "MS Excel", icon: <FaFileExcel /> },
    { name: "MS PowerPoint", icon: <FaFilePowerpoint /> },
    { name: "Tally Prime", icon: <FaFileAlt /> },
    { name: "Internet", icon: <FaInternetExplorer /> },
    { name: "Advanced Excel", icon: <FaFileExcel /> },
    { name: "Financial Accounting", icon: <FaCalculator /> },
    { name: "VBA Programming", icon: <FaCode /> }
  ];

  // Duplicate arrays for infinite scroll effect
  const leftScrollItems = [...programmingTechs, ...programmingTechs];
  const rightScrollItems = [...officeTechs, ...officeTechs];

  return (
    <section className="tech-section">
      <div className="section-header">
        <h2>Programming & Technologies We Teach</h2>
        <p>Master in-demand skills with our comprehensive curriculum</p>
      </div>

      {/* Left Infinite Scroll (Programming Languages) */}
      <div className="infinite-scroll-container left-scroll">
        <div className="scroller">
          {leftScrollItems.map((tech, index) => (
            <div key={`left-${index}`} className="tech-card">
              <div className="tech-icon">{tech.icon}</div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Infinite Scroll (MS Office & Others) */}
      <div className="infinite-scroll-container right-scroll">
        <div className="scroller">
          {rightScrollItems.map((tech, index) => (
            <div key={`right-${index}`} className="tech-card">
              <div className="tech-icon">{tech.icon}</div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Tech Section Styles */
        .tech-section {
          padding: 80px 0;
          background-color: #0f0f2d;
          position: relative;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
          padding: 0 20px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 15px;
          background: linear-gradient(135deg, #e500ff, #5d00ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }

        .section-header p {
          color: #a0a0ff;
          font-size: 1.1rem;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Infinite Scroll Containers */
        .infinite-scroll-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          margin: 40px 0;
        }

        .left-scroll {
          background: linear-gradient(90deg, rgba(15,15,45,0.9) 0%, rgba(15,15,45,0.5) 50%, rgba(15,15,45,0) 100%);
        }

        .right-scroll {
          background: linear-gradient(270deg, rgba(15,15,45,0.9) 0%, rgba(15,15,45,0.5) 50%, rgba(15,15,45,0) 100%);
        }

        .scroller {
          display: flex;
          gap: 20px;
          width: max-content;
          padding: 20px 0;
        }

        /* Left Scroll Animation */
        .left-scroll .scroller {
          animation: scroll-left 40s linear infinite;
        }

        /* Right Scroll Animation */
        .right-scroll .scroller {
          animation: scroll-right 40s linear infinite;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Tech Cards */
        .tech-card {
          background-color: #1a1a3d;
          border-radius: 10px;
          padding: 25px 20px;
          min-width: 150px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .tech-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
          background: linear-gradient(135deg, #1a1a3d, #2a2a5a);
        }

        .tech-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2a2a5a, #3a3a7a);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: white;
          position: relative;
        }

        .tech-card span {
          color: white;
          font-weight: 500;
          font-size: 0.95rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }
          
          .tech-card {
            min-width: 120px;
            padding: 20px 15px;
          }
          
          .tech-icon {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }
          
          .scroller {
            gap: 15px;
          }
        }

        @media (max-width: 480px) {
          .tech-section {
            padding: 60px 0;
          }
          
          .section-header {
            margin-bottom: 40px;
          }
          
          .tech-card {
            min-width: 100px;
            padding: 15px 10px;
            gap: 10px;
          }
          
          .tech-icon {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }
          
          .tech-card span {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TechComponent;