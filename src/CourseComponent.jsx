import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { 
  FaChevronDown, FaDesktop, FaFileExcel, FaGlobe, FaAngleRight, 
  FaCode, FaLaptopCode, FaDatabase, FaProjectDiagram, FaInfoCircle,
  FaWindows, FaCalculator
} from 'react-icons/fa';
import { 
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaBootstrap, 
  FaJsSquare, FaReact, FaPhp, FaLaravel
} from 'react-icons/fa';

const CourseComponent = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const courses = [
     {
      title: "Honours Diploma in Full-Stack Development (HDFD)",
      sections: [
        {
          title: "Programming Languages",
          icon: <FaCode />,
          items: [
            { name: "C", icon: <FaAngleRight /> },
            { name: "C++", icon: <FaAngleRight /> },
            { name: "Java", icon: <FaJava /> },
            { name: "Python", icon: <FaPython /> }
          ]
        },
        {
          title: "Front-End Language & Library",
          icon: <FaLaptopCode />,
          items: [
            { name: "HTML5", icon: <FaHtml5 /> },
            { name: "CSS3", icon: <FaCss3Alt /> },
            { name: "Bootstrap", icon: <FaBootstrap /> },
            { name: "Advanced JavaScript", icon: <FaJsSquare /> },
            { name: "ReactJS", icon: <FaReact /> }
          ]
        },
        {
          title: "Database Management System",
          icon: <FaDatabase />,
          items: [
            { name: "MySQL", icon: <FaDatabase /> },
            { name: "MongoDB", icon: <FaDatabase /> }
          ]
        },
        {
          title: "Web Framework",
          icon: <FaProjectDiagram />,
          items: [
            { name: "Django (or)", icon: <FaPython /> },
            { name: "Spring Boot", icon: <FaJava /> }
          ]
        }
      ]
    },
    {
      title: "Honours Diploma in Computer Application (HDCA)",
      sections: [
        {
          title: "End User Applications",
          icon: <FaDesktop />,
          items: [
            { name: "Windows", icon: <FaWindows /> },
            { name: "MS Office", icon: <FaFileExcel /> },
            { name: "Internet", icon: <FaGlobe /> }
          ]
        },
        {
          title: "Front-End Language",
          icon: <FaLaptopCode />,
          items: [
            { name: "HTML5", icon: <FaHtml5 /> },
            { name: "CSS3", icon: <FaCss3Alt /> }
          ]
        },
        {
          title: "Database",
          icon: <FaDatabase />,
          items: [
            { name: "MySQL", icon: <FaDatabase /> }
          ]
        },
        {
          title: "Elective 1: Languages",
          icon: <FaCode />,
          items: [
            { name: "C", icon: <FaAngleRight /> },
            { name: "C++", icon: <FaAngleRight /> },
            { name: "Python", icon: <FaPython /> }
          ]
        },
        {
          title: "Elective 2: Financial Accounting & VBA",
          icon: <FaCalculator />,
          items: [
            { name: "Tally Prime", icon: <FaFileExcel /> },
            { name: "Advanced Excel", icon: <FaFileExcel /> },
            { name: "VBA Programming", icon: <FaCode /> }
          ]
        }
      ],
      note: "Note: Choose either Elective 1 or Elective 2 based on your career path."
    },
    {
      title: "Diploma in Computer Application (DCA)",
      sections: [
        {
          title: "End User Applications",
          icon: <FaDesktop />,
          items: [
            { name: "Windows", icon: <FaWindows /> },
            { name: "MS Office", icon: <FaFileExcel /> },
            { name: "Internet", icon: <FaGlobe /> }
          ]
        },
        {
          title: "Elective 1",
          icon: <FaCode />,
          items: [
            { name: "C", icon: <FaAngleRight /> },
            { name: "C++", icon: <FaAngleRight /> }
          ]
        },
        {
          title: "Elective 2",
          icon: <FaCode />,
          items: [
            { name: "Python", icon: <FaPython /> }
          ]
        },
        {
          title: "Elective 3",
          icon: <FaCode />,
          items: [
            { name: "Tally Prime", icon: <FaFileExcel /> }
          ]
        }
      ],
      note: "Note: Choose either Elective 1 or Elective 2 or Elective 3 based on your career path."
    },
    {
      title: "Advanced Diploma in Computer Application (ADCA)",
      sections: [
        {
          title: "Programming Languages",
          icon: <FaCode />,
          items: [
            { name: "C Language", icon: <FaAngleRight /> },
            { name: "C++", icon: <FaAngleRight /> },
            { name: "Python", icon: <FaPython /> },
            { name: "JAVA", icon: <FaJava /> }
          ]
        }
      ]
    },
    {
      title: "Advanced Diploma in Python Programming (ADPP)",
      sections: [
        {
          title: "Programming Languages",
          icon: <FaCode />,
          items: [
            { name: "C Language", icon: <FaAngleRight /> },
            { name: "C++", icon: <FaAngleRight /> },
            { name: "Python", icon: <FaPython /> }
          ]
        }
      ]
    },
    {
      title: "Advanced Diploma in Java Programming (ADJP)",
      sections: [
        {
          title: "Programming Languages",
          icon: <FaCode />,
          items: [
            { name: "C Language", icon: <FaAngleRight /> },
            { name: "C++", icon: <FaAngleRight /> },
            { name: "Java", icon: <FaJava /> }
          ]
        }
      ]
    },
    {
      title: "Diploma in FullStack Python Developer (DFPD)",
      sections: [
        {
          title: "Programming Language",
          icon: <FaCode />,
          items: [
            { name: "Python", icon: <FaPython /> }
          ]
        },
        {
          title: "Front-End Language & Library",
          icon: <FaLaptopCode />,
          items: [
            { name: "HTML5", icon: <FaHtml5 /> },
            { name: "CSS3", icon: <FaCss3Alt /> },
            { name: "Bootstrap", icon: <FaBootstrap /> },
            { name: "Advanced JavaScript", icon: <FaJsSquare /> },
            { name: "ReactJS", icon: <FaReact /> }
          ]
        },
        {
          title: "Database Management System",
          icon: <FaDatabase />,
          items: [
            { name: "MySQL", icon: <FaDatabase /> },
            { name: "MongoDB", icon: <FaDatabase /> }
          ]
        },
        {
          title: "Web Framework",
          icon: <FaProjectDiagram />,
          items: [
            { name: "Django", icon: <FaPython /> }
          ]
        }
      ]
    },
    {
      title: "Diploma in FullStack Java Developer (DFJD)",
      sections: [
        {
          title: "Programming Language",
          icon: <FaCode />,
          items: [
            { name: "Java", icon: <FaJava /> }
          ]
        },
        {
          title: "Front-End Language & Library",
          icon: <FaLaptopCode />,
          items: [
            { name: "HTML5", icon: <FaHtml5 /> },
            { name: "CSS3", icon: <FaCss3Alt /> },
            { name: "Bootstrap", icon: <FaBootstrap /> },
            { name: "Advanced JavaScript", icon: <FaJsSquare /> },
            { name: "ReactJS", icon: <FaReact /> }
          ]
        },
        {
          title: "Database Management System",
          icon: <FaDatabase />,
          items: [
            { name: "MySQL", icon: <FaDatabase /> },
            { name: "MongoDB", icon: <FaDatabase /> }
          ]
        },
        {
          title: "Web Framework",
          icon: <FaProjectDiagram />,
          items: [
            { name: "Spring Boot", icon: <FaJava /> }
          ]
        }
      ]
    },
    {
      title: "Diploma in PHP FullStack Developer (DPFD)",
      sections: [
        {
          title: "Web Programming Language",
          icon: <FaCode />,
          items: [
            { name: "PHP", icon: <FaPhp /> }
          ]
        },
        {
          title: "Front-End Language & Library",
          icon: <FaLaptopCode />,
          items: [
            { name: "HTML5", icon: <FaHtml5 /> },
            { name: "CSS3", icon: <FaCss3Alt /> },
            { name: "Bootstrap", icon: <FaBootstrap /> },
            { name: "Advanced JavaScript", icon: <FaJsSquare /> },
            { name: "ReactJS", icon: <FaReact /> }
          ]
        },
        {
          title: "Database Management System",
          icon: <FaDatabase />,
          items: [
            { name: "MySQL", icon: <FaDatabase /> },
            { name: "MongoDB", icon: <FaDatabase /> }
          ]
        },
        {
          title: "Web Framework",
          icon: <FaProjectDiagram />,
          items: [
            { name: "Laravel", icon: <FaLaravel /> }
          ]
        }
      ]
    },
    {
      title: "Certificate Course in Advanced Excel (CCAE)",
      sections: [
        {
          title: "Course Coverage",
          icon: <FaFileExcel />,
          items: [
            { name: "Advanced Excel", icon: <FaAngleRight /> },
            { name: "VBA Programming", icon: <FaCode /> }
          ]
        }
      ]
    },
    {
      title: "Tally Prime",
      sections: [
        {
          title: "Course Coverage",
          icon: <FaFileExcel />,
          items: [
            { name: "Tally Prime", icon: <FaAngleRight /> }
          ]
        }
      ]
    },
    {
      title: "Diploma in MS Office (DMO)",
      sections: [
        {
          title: "Course Coverage",
          icon: <FaDesktop />,
          items: [
            { name: "Windows", icon: <FaWindows /> },
            { name: "MS Office", icon: <FaFileExcel /> },
            { name: "Internet", icon: <FaGlobe /> }
          ]
        }
      ]
    }
  ];

  return (
    <div className="course-container" id="course">
      <h1>Our Complete Course Offerings</h1>
      
      {courses.map((course, index) => (
        <div 
          key={index}
          className={`course-accordion ${activeAccordion === index ? 'active' : ''}`}
        >
          <div 
            className="accordion-header" 
            onClick={() => toggleAccordion(index)}
          >
            <span>{course.title}</span>
            <FaChevronDown className={`accordion-icon ${activeAccordion === index ? 'active' : ''}`} />
          </div>
          <div className="accordion-content">
            <div className="accordion-content-inner">
              {course.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="course-section">
                  <h3>
                    {section.icon}
                    {section.title}
                  </h3>
                  <ul className="course-list">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item.icon}
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              {course.note && (
                <div className="elective-note">
                  <FaInfoCircle />
                  {course.note}
                </div>
              )}
            </div>
           <div className="course-footer">
  {course.title === "Diploma in MS Office (DMO)" && (
    <Link to="/dmo-curriculum" className="curriculum-btn">
      View Full Curriculum
    </Link>
  )}
  {course.title === "Advanced Diploma in Java Programming (ADJP)" && (
    <Link to="/adjp-curriculum" className="curriculum-btn">
      View Full Curriculum
    </Link>
  )}
</div>
          </div>
        </div>
      ))}

      <style jsx>{`
        /* Course Container Section */
        .course-container {
          padding: 60px 20px;
          max-width: 1200px;
          margin: 0 auto;
          margin-bottom: 20px;
          background-color: #0f0f2d;
        }

        .course-container h1 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 40px;
          color: white;
          position: relative;
          padding-bottom: 15px;
        }

        .course-container h1::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(135deg, #e500ff, #5d00ff);
        }

        /* Accordion Styles */
        .course-accordion {
          margin-bottom: 20px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          background-color: #1a1a3d;
          transition: all 0.3s ease;
        }

        .course-accordion.active {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .accordion-header {
          padding: 20px 25px;
          background: linear-gradient(135deg, #1a1a3d, #2a2a5a);
          color: white;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .accordion-header:hover {
          background: linear-gradient(135deg, #2a2a5a, #3a3a7a);
        }

        .accordion-header span {
          font-size: 1.2rem;
          font-weight: 600;
        }

        .accordion-icon {
          transition: transform 0.3s ease;
        }

        .course-accordion.active .accordion-icon {
          transform: rotate(180deg);
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background-color: #25254d;
        }

        .course-accordion.active .accordion-content {
          max-height: 2000px;
        }

        .accordion-content-inner {
          padding: 25px;
        }

        /* Course Sections */
        .course-section {
          margin-bottom: 25px;
        }

        .course-section h3 {
          color: #a0a0ff;
          margin-bottom: 15px;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .course-list {
          list-style: none;
          padding-left: 30px;
        }

        .course-list li {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #ddd;
        }

        .course-list li svg {
          font-size: 0.9em;
          color: #e500ff;
        }

        .elective-note {
          background-color: rgba(229, 0, 255, 0.1);
          border-left: 3px solid #e500ff;
          padding: 12px 15px;
          margin-top: 20px;
          color: #ccc;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 0 4px 4px 0;
        }

        .course-footer {
          text-align: center;
          padding: 20px 0 10px;
        }

        .curriculum-btn {
          display: inline-block;
          padding: 10px 25px;
          background: linear-gradient(135deg, #e500ff, #5d00ff);
          color: white;
          text-decoration: none;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .curriculum-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .course-container {
            padding: 40px 15px;
          }
          
          .course-container h1 {
            font-size: 2rem;
          }
          
          .accordion-header {
            padding: 15px 20px;
          }
          
          .accordion-header span {
            font-size: 1rem;
          }
          
          .accordion-content-inner {
            padding: 15px;
          }
          
          .course-section h3 {
            font-size: 1rem;
          }
          
          .course-list {
            padding-left: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default CourseComponent;