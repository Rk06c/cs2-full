// src/components/DMOCurriculum.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaWindows, FaFileWord, FaFileExcel } from 'react-icons/fa';

const DMOCurriculum = () => {
  return (
    <>
   
    <div className="dmo-curriculum">
      <h1>DMO Course Curriculum</h1>
       <div className="back-button">
  <Link to="/" className="back-link">
    &larr; Back to Courses
  </Link>
</div>

      <h2><FaWindows /> WINDOWS</h2>
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Windows</td>
            <td>B1</td>
          </tr>
          <tr>
            <td>Paint</td>
            <td>B2</td>
          </tr>
          <tr>
            <td>Notepad</td>
            <td>B3</td>
          </tr>
          <tr>
            <td>Wordpad</td>
            <td>B4</td>
          </tr>
        </tbody>
      </table>

      <h2><FaFileWord /> MS-WORD</h2>
      <table>
        <tr>
            <th>Topic</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>Word Intro</td>
            <td>w1</td>
        </tr>
        <tr>
            <td>Clipboard</td>
            <td>w2</td>
        </tr>
        <tr>
            <td>Font</td>
            <td>w3</td>
        </tr>
        <tr>
            <td>Paragraph</td>
            <td>w4</td>
        </tr>
        <tr>
            <td>Styles</td>
            <td>w5</td>
        </tr>
        <tr>
            <td>Editing</td>
            <td>w6</td>
        </tr>
        <tr>
            <td>Pages</td>
            <td>w7</td>
        </tr>
        <tr>
            <td>Tables</td>
            <td>w8</td>
        </tr>
        <tr>
            <td>Illustrations</td>
            <td>w9</td>
        </tr>
        <tr>
            <td>Links</td>
            <td>w10</td>
        </tr>
        <tr>
            <td>Header, footer</td>
            <td>w11</td>
        </tr>
        <tr>
            <td>text</td>
            <td>w12</td>
        </tr>
        <tr>
            <td>symbols</td>
            <td>w13</td>
        </tr>
        <tr>
            <td>themes</td>
            <td>w14</td>
        </tr>
        <tr>
            <td>pagesetup</td>
            <td>w15</td>
        </tr>
        <tr>
            <td>background</td>
            <td>w16</td>
        </tr>
        <tr>
            <td>paragraph</td>
            <td>w17</td>
        </tr>
        <tr>
            <td>arrange</td>
            <td>w18</td>
        </tr>
    </table>


      <div className="sub-assessment">Sub Assessment : WOR1</div>
       <table>
        <tr>
            <th>Topic</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>table of cont</td>
            <td>w19</td>
        </tr>
        <tr>
            <td>footnotes</td>
            <td>w20</td>
        </tr>
        <tr>
            <td>citations</td>
            <td>w21</td>
        </tr>
        <tr>
            <td>bibliography</td>
            <td>w22</td>
        </tr>
        <tr>
            <td>captions</td>
            <td>w23</td>
        </tr>
        <tr>
            <td>index</td>
            <td>w24</td>
        </tr>
        <tr>
            <td>table of auth</td>
            <td>w25</td>
        </tr>
        <tr>
            <td>Envelopes</td>
            <td>w26</td>
        </tr>
        <tr>
            <td>labels</td>
            <td>w27</td>
        </tr>
        <tr>
            <td>letters</td>
            <td>w28</td>
        </tr>
        <tr>
            <td>proofing</td>
            <td>w29</td>
        </tr>
        <tr>
            <td>comments</td>
            <td>w30</td>
        </tr>
        <tr>
            <td>track changes</td>
            <td>w31</td>
        </tr>
        <tr>
            <td>compare,protect</td>
            <td>w32</td>
        </tr>
        <tr>
            <td>Document view</td>
            <td>w33</td>
        </tr>
        <tr>
            <td>show/hide</td>
            <td>w34</td>
        </tr>
        <tr>
            <td>Zoom</td>
            <td>w35</td>
        </tr>
        <tr>
            <td>window</td>
            <td>w36</td>
        </tr>
        <tr>
            <td>macros</td>
            <td>w37</td>
        </tr>
    </table>
      
      <div className="sub-assessment">Sub Assessment : WOR2</div>
      <div className="main-assessment">Main Assessment</div>

      <h2><FaFileExcel /> MS-EXCEL</h2>
      <table>
        <tr>
            <th>Topic</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>Excel Intro</td>
            <td>E1</td>
        </tr>
        <tr>
            <td>Clipboard</td>
            <td>E2</td>
        </tr>
        <tr>
            <td>font</td>
            <td>E3</td>
        </tr>
        <tr>
            <td>alignment</td>
            <td>E4</td>
        </tr>
        <tr>
            <td>number</td>
            <td>E5</td>
        </tr>
        <tr>
            <td>styles</td>
            <td>E6</td>
        </tr>
        <tr>
            <td>cells</td>
            <td>E7</td>
        </tr>
        <tr>
            <td>editing</td>
            <td>E8</td>
        </tr>
        <tr>
            <td>tables</td>
            <td>E9</td>
        </tr>
        <tr>
            <td>Illustrations</td>
            <td>E10</td>
        </tr>
        <tr>
            <td>charts</td>
            <td>E11</td>
        </tr>
        <tr>
            <td>Links</td>
            <td>E12</td>
        </tr>
        <tr>
            <td>text</td>
            <td>E13</td>
        </tr>
        <tr>
            <td>themes</td>
            <td>E14</td>
        </tr>
        <tr>
            <td>page setup</td>
            <td>E15</td>
        </tr>
        <tr>
            <td>scale to fit</td>
            <td>E16</td>
        </tr>
        <tr>
            <td>sheet options</td>
            <td>E17</td>
        </tr>
        <tr>
            <td>arrange</td>
            <td>E18</td>
        </tr>
    </table>
      <div className="sub-assessment">Sub Assessment : EXC1</div>
       <table>
        <tr>
            <th>Topic</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>formulas</td>
            <td>E19</td>
        </tr>
        <tr>
            <td>names</td>
            <td>E20</td>
        </tr>
        <tr>
            <td>auditing</td>
            <td>E21</td>
        </tr>
        <tr>
            <td>calculation</td>
            <td>E22</td>
        </tr>
        <tr>
            <td>external data</td>
            <td>E23</td>
        </tr>
        <tr>
            <td>connections</td>
            <td>E24</td>
        </tr>
        <tr>
            <td>sort, filter</td>
            <td>E25</td>
        </tr>
        <tr>
            <td>data tools</td>
            <td>E26</td>
        </tr>
        <tr>
            <td>outline</td>
            <td>E27</td>
        </tr>
        <tr>
            <td>proofing</td>
            <td>E28</td>
        </tr>
        <tr>
            <td>comments</td>
            <td>E29</td>
        </tr>
        <tr>
            <td>changes</td>
            <td>E30</td>
        </tr>
        <tr>
            <td>views</td>
            <td>E31</td>
        </tr>
        <tr>
            <td>show/hide</td>
            <td>E32</td>
        </tr>
        <tr>
            <td>zoom</td>
            <td>E33</td>
        </tr>
        <tr>
            <td>window</td>
            <td>E34</td>
        </tr>
        <tr>
            <td>macros</td>
            <td>E35</td>
        </tr>
        <tr>
            <td>others</td>
            <td>E36</td>
        </tr>
    </table>
      <div className="sub-assessment">Sub Assessment : EXC2</div>
      <div className="main-assessment">Main Assessment</div>

      <style jsx>{`

.back-button {

  
  margin-bottom: 30px;
}

.back-link {
  
  color: #a0a0ff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 15px;
  border: 1px solid #3a3a7a;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.back-link:hover {
  background-color: #25254d;
  color: #e500ff;
}


        .dmo-curriculum {
          padding: 40px 20px;
          max-width: 800px;
          margin: 0 auto;
          background-color: #0f0f2d;
          color: white;
        }
        
        h1 {
          text-align: center;
          margin-bottom: 30px;
          color: white;
          position: relative;
          padding-bottom: 15px;
        }
        
        h1::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(135deg, #e500ff, #5d00ff);
        }
        
        h2 {
          background-color: #25254d;
          padding: 10px 15px;
          margin-top: 30px;
          border-left: 4px solid #5d00ff;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 30px;
          background-color: #1a1a3d;
        }
        
        th, td {
          border: 1px solid #3a3a7a;
          padding: 12px;
          text-align: left;
        }
        
        th {
          background-color: #25254d;
          color: #a0a0ff;
        }
        
        tr:nth-child(even) {
          background-color: #2a2a5a;
        }
        
        tr:hover {
          background-color: #3a3a7a;
        }
        
        .sub-assessment {
          font-weight: bold;
          color: #a0a0ff;
          margin: 15px 0;
          padding: 10px;
          background-color: rgba(93, 0, 255, 0.1);
          border-left: 3px solid #5d00ff;
        }
        
        .main-assessment {
          font-weight: bold;
          color: #e500ff;
          font-size: 1.2em;
          margin: 20px 0;
          text-align: center;
          padding: 15px;
          background-color: rgba(229, 0, 255, 0.1);
          border-radius: 5px;
        }
        
        @media (max-width: 768px) {
          .dmo-curriculum {
            padding: 20px 10px;
          }
          
          th, td {
            padding: 8px;
            font-size: 0.9em;
          }
        }
      `}</style>
    </div>
    </>
  );
};

export default DMOCurriculum;