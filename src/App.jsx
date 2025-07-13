import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import CourseComponent from './CourseComponent';
import TechComponent from './TechComponent';
import ContactComponent from './ContactComponent';
import FooterComponent from './FooterComponent';
import DMOCurriculum from './DMOCurriculum';
import ADJPCurriculum from './ADJPCurriculum';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/" element={
            <>
             <Header />
              <CourseComponent />
              <TechComponent />
              <ContactComponent />
              <FooterComponent />
            </>
          } />
          <Route path="/dmo-curriculum" element={<DMOCurriculum />} />
           <Route path="/adjp-curriculum" element={<ADJPCurriculum />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;