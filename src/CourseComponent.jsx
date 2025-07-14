import React, { useState } from 'react';
import { FaChevronDown, FaDesktop, FaFileExcel, FaGlobe, FaAngleRight, 
  FaCode, FaLaptopCode, FaDatabase, FaProjectDiagram, FaInfoCircle,
  FaWindows, FaCalculator, FaTimes } from 'react-icons/fa';
import { 
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaBootstrap, 
  FaJsSquare, FaReact, FaPhp, FaLaravel 
} from 'react-icons/fa';

// Curriculum Modal Components
const DMOCurriculumModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <h1>DMO Course Curriculum</h1>
        
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

        <h2><FaFileExcel /> MS-WORD</h2>
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
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            padding: 20px;
          }
          
          .modal-content {
            background-color: #0f0f2d;
            color: white;
            padding: 30px;
            border-radius: 8px;
            max-width: 800px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
          }
          
          .modal-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            color: #a0a0ff;
            font-size: 1.5rem;
            cursor: pointer;
            transition: color 0.3s ease;
          }
          
          .modal-close:hover {
            color: #e500ff;
          }
          
          /* Rest of your existing DMO curriculum styles */
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


          
        `}</style>
      </div>
    </div>
  );
};

const ADJPCurriculumModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <h1>ADJP Course Curriculum</h1>
        
        <h2><FaJava /> Java Programming</h2>
         <table>
                <tr>
                    <th>Topic</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>Intro</td>
                    <td>C1</td>
                </tr>
                <tr>
                    <td>Basic</td>
                    <td>C2</td>
                </tr>
                <tr>
                    <td>Variables</td>
                    <td>C3</td>
                </tr>
                <tr>
                    <td>Data Types</td>
                    <td>C4</td>
                </tr>
                <tr>
                    <td>Input/Output Statements</td>
                    <td>C5</td>
                </tr>
                <tr>
                    <td>Escape Sequence</td>
                    <td>C6</td>
                </tr>
                <tr>
                    <td>Arithmetic Operators</td>
                    <td>C7</td>
                </tr>
                <tr>
                    <td>Relational Operators</td>
                    <td>C8</td>
                </tr>
                <tr>
                    <td>Logical Operators</td>
                    <td>C9</td>
                </tr>
                <tr>
                    <td>Other Operators</td>
                    <td>C10</td>
                </tr>
            </table>
        
                <div className="sub-assessment">Sub Assessment: CLA1</div>
                <table>
                <tr>
                    <th>Topic</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>If Statement</td>
                    <td>C11</td>
                </tr>
                <tr>
                    <td>If Else Statement</td>
                    <td>C12</td>
                </tr>
                <tr>
                    <td>If Else If Statement</td>
                    <td>C13</td>
                </tr>
                <tr>
                    <td>Nested If Statement</td>
                    <td>C14</td>
                </tr>
                <tr>
                    <td>Switch Statement</td>
                    <td>C15</td>
                </tr>
                <tr>
                    <td>Do Loop</td>
                    <td>C16</td>
                </tr>
                <tr>
                    <td>While Loop</td>
                    <td>C17</td>
                </tr>
                <tr>
                    <td>For Loop</td>
                    <td>C18</td>
                </tr>
                <tr>
                    <td>Break</td>
                    <td>C19</td>
                </tr>
                <tr>
                    <td>Continue</td>
                    <td>C20</td>
                </tr>
                <tr>
                    <td>Goto</td>
                    <td>C21</td>
                </tr>
                <tr>
                    <td>Arrays</td>
                    <td>C22</td>
                </tr>
                <tr>
                    <td>Two Dimensional Array</td>
                    <td>C23</td>
                </tr>
                <tr>
                    <td>Addition</td>
                    <td>C24</td>
                </tr>
                <tr>
                    <td>Multiplication</td>
                    <td>C25</td>
                </tr>
            </table>
              <div class="sub-assessment">Sub Assessment: CLA2</div>
        
            <table>
                <tr>
                    <th>Topic</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>Function</td>
                    <td>C26</td>
                </tr>
                <tr>
                    <td>No Return</td>
                    <td>C27</td>
                </tr>
                <tr>
                    <td>Parameter-No Return</td>
                    <td>C28</td>
                </tr>
                <tr>
                    <td>With Parameter, With Return</td>
                    <td>C29</td>
                </tr>
                <tr>
                    <td>No Parameter-With Return</td>
                    <td>C30</td>
                </tr>
                <tr>
                    <td>Recursive Function</td>
                    <td>C31</td>
                </tr>
                <tr>
                    <td>Storage Classes</td>
                    <td>C32</td>
                </tr>
                <tr>
                    <td>String Functions</td>
                    <td>C33</td>
                </tr>
                <tr>
                    <td>Math Functions</td>
                    <td>C34</td>
                </tr>
                <tr>
                    <td>Pointers</td>
                    <td>C35</td>
                </tr>
                <tr>
                    <td>Array of Pointers</td>
                    <td>C36</td>
                </tr>
                <tr>
                    <td>Function with Pointer</td>
                    <td>C37</td>
                </tr>
            </table>
        
            <div class="sub-assessment">Sub Assessment: CLA3</div>
        
            <table>
                <tr>
                    <th>Topic</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>Calloc</td>
                    <td>C38</td>
                </tr>
                <tr>
                    <td>Malloc</td>
                    <td>C39</td>
                </tr>
                <tr>
                    <td>Realloc</td>
                    <td>C40</td>
                </tr>
                <tr>
                    <td>Free</td>
                    <td>C41</td>
                </tr>
                <tr>
                    <td>Structure</td>
                    <td>C42</td>
                </tr>
                <tr>
                    <td>Nested Structure</td>
                    <td>C43</td>
                </tr>
                <tr>
                    <td>Structure with Pointer</td>
                    <td>C44</td>
                </tr>
                <tr>
                    <td>Union</td>
                    <td>C45</td>
                </tr>
                <tr>
                    <td>Files</td>
                    <td>C46</td>
                </tr>
                <tr>
                    <td>fgetc</td>
                    <td>C47</td>
                </tr>
                <tr>
                    <td>fputc</td>
                    <td>C48</td>
                </tr>
                <tr>
                    <td>fgets</td>
                    <td>C49</td>
                </tr>
                <tr>
                    <td>fputs</td>
                    <td>C50</td>
                </tr>
                <tr>
                    <td>fscanf</td>
                    <td>C51</td>
                </tr>
                <tr>
                    <td>fprintf</td>
                    <td>C52</td>
                </tr>
                <tr>
                    <td>Files - Others</td>
                    <td>C53</td>
                </tr>
                <tr>
                    <td>Graphics</td>
                    <td>C54</td>
                </tr>
            </table>
        
            <div class="sub-assessment">Sub Assessment: CLA4</div>
            <div class="main-assessment">Main Assessment</div>
                {/* Add remaining C language tables and assessments */}
        
                <h2><FaAngleRight /> C++</h2>
                  <table>
                <tr>
                    <th>Topic</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>intro</td>
                    <td>CP1</td>
                </tr>
                <tr>
                    <td>basics</td>
                    <td>CP2</td>
                </tr>
                <tr>
                    <td>manipulators</td>
                    <td>CP3</td>
                </tr>
                <tr>
                    <td>Act,For,Def Arg</td>
                    <td>CP4</td>
                </tr>
                <tr>
                    <td>fn overloding</td>
                    <td>CP5</td>
                </tr>
                <tr>
                    <td>inline fn</td>
                    <td>CP6</td>
                </tr>
                <tr>
                    <td>class</td>
                    <td>CP7</td>
                </tr>
                <tr>
                    <td>function inside class</td>
                    <td>CP8</td>
                </tr>
                <tr>
                    <td>fn outside class</td>
                    <td>CP9</td>
                </tr>
                <tr>
                    <td>private member</td>
                    <td>CP10</td>
                </tr>
                <tr>
                    <td>static variable</td>
                    <td>CP11</td>
                </tr>
                <tr>
                    <td>static fn</td>
                    <td>CP12</td>
                </tr>
                <tr>
                    <td>array of object</td>
                    <td>CP13</td>
                </tr>
                <tr>
                    <td>mem fn overloading</td>
                    <td>CP14</td>
                </tr>
                <tr>
                    <td>class with pointer</td>
                    <td>CP15</td>
                </tr>
            </table>
        
            <div class="sub-assessment">Sub Assessment : CPP1</div>
        
            <table>
                <tr>
                    <th>Topic</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>friend fn</td>
                    <td>CP16</td>
                </tr>
                <tr>
                    <td>friend class</td>
                    <td>CP17</td>
                </tr>
                <tr>
                    <td>default cons</td>
                    <td>CP18</td>
                </tr>
                <tr>
                    <td>para const</td>
                    <td>CP19</td>
                </tr>
                <tr>
                    <td>copy cons</td>
                    <td>CP20</td>
                </tr>
                <tr>
                    <td>cons overloading</td>
                    <td>CP21</td>
                </tr>
                <tr>
                    <td>destructor</td>
                    <td>CP22</td>
                </tr>
                <tr>
                    <td>single inheritance</td>
                    <td>CP23</td>
                </tr>
                <tr>
                    <td>multilevel</td>
                    <td>CP24</td>
                </tr>
                <tr>
                    <td>heirarchical</td>
                    <td>CP25</td>
                </tr>
                <tr>
                    <td>hybrid</td>
                    <td>CP26</td>
                </tr>
                <tr>
                    <td>multiple</td>
                    <td>CP27</td>
                </tr>
                <tr>
                    <td>overriding</td>
                    <td>CP28</td>
                </tr>
                <tr>
                    <td>order of execution</td>
                    <td>CP29</td>
                </tr>
                <tr>
                    <td>ambiguities</td>
                    <td>CP30</td>
                </tr>
            </table>
        
            <div class="sub-assessment">Sub Assessment : CPP2</div>
        
            <table>
                <tr>
                    <th>Topic</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>comp. time poly</td>
                    <td>CP31</td>
                </tr>
                <tr>
                    <td>runtime poly</td>
                    <td>CP32</td>
                </tr>
                <tr>
                    <td>virtual fn</td>
                    <td>CP33</td>
                </tr>
                <tr>
                    <td>unary op overloading</td>
                    <td>CP34</td>
                </tr>
                <tr>
                    <td>binary op overloading</td>
                    <td>CP35</td>
                </tr>
                <tr>
                    <td>overload with friend</td>
                    <td>CP36</td>
                </tr>
                <tr>
                    <td>fles</td>
                    <td>CP37</td>
                </tr>
                <tr>
                    <td>ifstream</td>
                    <td>CP38</td>
                </tr>
                <tr>
                    <td>ofstream</td>
                    <td>CP39</td>
                </tr>
                <tr>
                    <td>fstream</td>
                    <td>CP40</td>
                </tr>
                <tr>
                    <td>fn template</td>
                    <td>CP41</td>
                </tr>
                <tr>
                    <td>class template</td>
                    <td>CP42</td>
                </tr>
                <tr>
                    <td>others</td>
                    <td>CP43</td>
                </tr>
            </table>
        
            <div class="sub-assessment">Sub Assessment : CPP3</div>
            <div class="main-assessment">Main Assessment</div>
        
                {/* Add remaining C++ tables and assessments */}
        
                <h2><FaJava /> Java</h2>
                 <table>
                <tr>
                    <th>Topic</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>Intro -features</td>
                    <td>J1</td>
                </tr>
                <tr>
                    <td>Simpe Examples</td>
                    <td>J2</td>
                </tr>
                <tr>
                    <td>Datatypes</td>
                    <td>J3</td>
                </tr>
                <tr>
                    <td>Operators</td>
                    <td>J4</td>
                </tr>
                <tr>
                    <td>Type Casting</td>
                    <td>J5</td>
                </tr>
                <tr>
                    <td>Conditional .St</td>
                    <td>J6</td>
                </tr>
                <tr>
                    <td>Loops</td>
                    <td>J7</td>
                </tr>
                <tr>
                    <td>Arrays</td>
                    <td>J8</td>
                </tr>
                <tr>
                    <td>String Class</td>
                    <td>J9</td>
                </tr>
                <tr>
                    <td>String Buffer Class</td>
                    <td>J10</td>
                </tr>
                <tr>
                    <td>String Tokenizer Class</td>
                    <td>J11</td>
                </tr>
                <tr>
                    <td>Vector Class</td>
                    <td>J12</td>
                </tr>
                <tr>
                    <td>Stack Class</td>
                    <td>J13</td>
                </tr>
                <tr>
                    <td>Random Class</td>
                    <td>J14</td>
                </tr>
                <tr>
                    <td>LinkedList Class</td>
                    <td>J15</td>
                </tr>
                <tr>
                    <td>Comm.Line Args</td>
                    <td>J16</td>
                </tr>
                <tr>
                    <td>Exception Handling</td>
                    <td>J17</td>
                </tr>
            </table>
        
            <div class="sub-assessment">Sub Assessment :JAV1</div>
        
            <table>
                <tr>
                    <th>Topic</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>Class & Objects</td>
                    <td>J18</td>
                </tr>
                <tr>
                    <td>Overloading</td>
                    <td>J19</td>
                </tr>
                <tr>
                    <td>Default Const.</td>
                    <td>J20</td>
                </tr>
                <tr>
                    <td>Paramet.Cons</td>
                    <td>J21</td>
                </tr>
                <tr>
                    <td>Cons. Overloading</td>
                    <td>J22</td>
                </tr>
                <tr>
                    <td>private cons</td>
                    <td>J23</td>
                </tr>
                <tr>
                    <td>this keyword</td>
                    <td>J24</td>
                </tr>
                <tr>
                    <td>Static Keyword</td>
                    <td>J25</td>
                </tr>
                <tr>
                    <td>Inheritance</td>
                    <td>J26</td>
                </tr>
                <tr>
                    <td>Overriding</td>
                    <td>J27</td>
                </tr>
                <tr>
                    <td>Cons execu order</td>
                    <td>J28</td>
                </tr>
                <tr>
                    <td>super keyword</td>
                    <td>J29</td>
                </tr>
                <tr>
                    <td>final keyword</td>
                    <td>J30</td>
                </tr>
                <tr>
                    <td>abstract meth & class</td>
                    <td>J31</td>
                </tr>
                <tr>
                    <td>interface</td>
                    <td>J32</td>
                </tr>
                <tr>
                    <td>package</td>
                    <td>J33</td>
                </tr>
            </table>
        
            <div class="sub-assessment">Sub Assessment :JAV2</div>
        
            <table>
                <tr>
                    <th>Topic</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>File Class</td>
                    <td>J34</td>
                </tr>
                <tr>
                    <td>Directories</td>
                    <td>J35</td>
                </tr>
                <tr>
                    <td>FileInputStream</td>
                    <td>J36</td>
                </tr>
                <tr>
                    <td>FileOutputStream</td>
                    <td>J37</td>
                </tr>
                <tr>
                    <td>ByteArrayInputStream</td>
                    <td>J38</td>
                </tr>
                <tr>
                    <td>ByteArrayOutputStream</td>
                    <td>J39</td>
                </tr>
                <tr>
                    <td>BufferedInputStream,scanner</td>
                    <td>J40</td>
                </tr>
                <tr>
                    <td>BufferedOutputStream</td>
                    <td>J41</td>
                </tr>
                <tr>
                    <td>DataInputStream</td>
                    <td>J42</td>
                </tr>
                <tr>
                    <td>DataOutputStream</td>
                    <td>J43</td>
                </tr>
                <tr>
                    <td>RandomAccessFile</td>
                    <td>J44</td>
                </tr>
                <tr>
                    <td>StreamTokenizer</td>
                    <td>J45</td>
                </tr>
                <tr>
                    <td>FileReader</td>
                    <td>J46</td>
                </tr>
                <tr>
                    <td>FileWriter</td>
                    <td>J47</td>
                </tr>
                <tr>
                    <td>CharArrayReader</td>
                    <td>J48</td>
                </tr>
                <tr>
                    <td>CharArrayWriter</td>
                    <td>J49</td>
                </tr>
                <tr>
                    <td>BufferedReader</td>
                    <td>J50</td>
                </tr>
                <tr>
                    <td>MulttiThreading</td>
                    <td>J51</td>
                </tr>
                <tr>
                    <td>Simple Thread</td>
                    <td>J52</td>
                </tr>
                <tr>
                    <td>Thread Class</td>
                    <td>J53</td>
                </tr>
                <tr>
                    <td>Runnable Interface</td>
                    <td>J54</td>
                </tr>
                <tr>
                    <td>Mutiple Threads</td>
                    <td>J55</td>
                </tr>
                <tr>
                    <td>isAlive</td>
                    <td>J56</td>
                </tr>
                <tr>
                    <td>join</td>
                    <td>J57</td>
                </tr>
                <tr>
                    <td>Priorites</td>
                    <td>J58</td>
                </tr>
                <tr>
                    <td>Synchronozation</td>
                    <td>J59</td>
                </tr>
                <tr>
                    <td>notify, wait,...</td>
                    <td>J60</td>
                </tr>
            </table>
        
            <div class="sub-assessment">Sub Assessment :JAV3</div>
        
            <table>
                <tr>
                    <th>Topic</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>URL class</td>
                    <td>J61</td>
                </tr>
                <tr>
                    <td>URLConnection class</td>
                    <td>J62</td>
                </tr>
                <tr>
                    <td>Socket</td>
                    <td>J63</td>
                </tr>
                <tr>
                    <td>Datagram</td>
                    <td>J64</td>
                </tr>
                <tr>
                    <td>Applet</td>
                    <td>J65</td>
                </tr>
                <tr>
                    <td>Graphics Class</td>
                    <td>J66</td>
                </tr>
                <tr>
                    <td>AWT Components</td>
                    <td>J67</td>
                </tr>
                <tr>
                    <td>Layout</td>
                    <td>J68</td>
                </tr>
                <tr>
                    <td>Pannel</td>
                    <td>J69</td>
                </tr>
                <tr>
                    <td>Event Handling</td>
                    <td>J70</td>
                </tr>
                <tr>
                    <td>jdbc-odbc connectivity</td>
                    <td>J71</td>
                </tr>
            </table>
        
            <div class="sub-assessment">Sub Assessment :JAV4</div>
            <div class="main-assessment">Main Assessment</div>
        
        {/* Same styling as DMOCurriculumModal */}
        <style jsx>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            padding: 20px;
          }
          
          .modal-content {
            background-color: #0f0f2d;
            color: white;
            padding: 30px;
            border-radius: 8px;
            max-width: 800px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
          }
          
          .modal-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            color: #a0a0ff;
            font-size: 1.5rem;
            cursor: pointer;
            transition: color 0.3s ease;
          }
          
          .modal-close:hover {
            color: #e500ff;
          }
          
          /* Rest of your existing DMO curriculum styles */
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



          
        `}</style>
      </div>
    </div>
  );
};

const CourseComponent = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [showDMOModal, setShowDMOModal] = useState(false);
  const [showADJPModal, setShowADJPModal] = useState(false);

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
                <button 
                  className="curriculum-btn"
                  onClick={() => setShowDMOModal(true)}
                >
                  View Full Curriculum
                </button>
              )}
              {course.title === "Advanced Diploma in Java Programming (ADJP)" && (
                <button 
                  className="curriculum-btn"
                  onClick={() => setShowADJPModal(true)}
                >
                  View Full Curriculum
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Modals */}
      {showDMOModal && <DMOCurriculumModal onClose={() => setShowDMOModal(false)} />}
      {showADJPModal && <ADJPCurriculumModal onClose={() => setShowADJPModal(false)} />}

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