import React from 'react'
import skills from "./data/skills.json"
import "./skills.css"

const Skills = () => {
  return (
    <>
     <div className="sk"> <h1>SKILLS</h1></div>
      <div className="container skills">
      <div className="items">
      {skills.map((data)=>(
          <div className="item" key={data.title} data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
            <img src={data['image-src']} alt="" />
            <h3>{data.title}</h3>
          </div>
      ))}
      </div>
     </div>
    </>
  )
}

export default Skills
