import { useRef , useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const homeRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <>
      <Navbar refs={{ homeRef, skillsRef, projectsRef, contactRef }} />
      <div className="container">
        <section id="home" ref={homeRef}><Home /></section>
        <section id="skills" ref={skillsRef}><Skills /></section>
        <section id="projects" ref={projectsRef}><Projects /></section>
        <section id="contact" ref={contactRef}><Contact /></section>
      </div>
    </>
  )
}

export default App
