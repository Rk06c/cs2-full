import CourseComponent from './CourseComponent';
import TechComponent from './TechComponent';
import ContactComponent from './ContactComponent';
//import DMOCurriculum from './DMOCurriculum';
//import ADJPCurriculum from './ADJPCurriculum';
import Header from './Header';
import FooterComponent from './FooterComponent';
import './App.css';

function App() {
  return (
    <>
     <Header />
      <CourseComponent />
      <TechComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}



export default App;
