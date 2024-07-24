import React, { useRef, useEffect } from 'react'
import pdf from "./pdf/AARAV_GARG.pdf"
import "./home.css"
import Typed from 'typed.js'
import { useDeferredValue } from "react"

const Home = () => {
  const typedRef = useRef(null)

  React.useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Hi I am <b>Aarav Garg</b>', 'I am a Computer Science Engineering Student at GTBIT', 'and a  Full Stack Web Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop:true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home">
        <div className="left">
          <h1 ref={typedRef}>Lorem ipsum dolor sit amet consectetur adipisicing </h1>
          <a href={pdf} download="AaravResume.pdf" className="btn btn-outline-info">Download Resume</a>
        </div>
        <div className="right">
          <div className="image">
            <img src="./assets/hero.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
