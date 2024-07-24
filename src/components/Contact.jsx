import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { SiLinkedin, SiFacebook } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdOutgoingMail } from "react-icons/md";
import "./contact.css"

const Contact = () => {
  return (
    <>
      <div className="container contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon">
          <a className="items" href='https://www.instagram.com/accounts/login/?hl=en' target='_blank' > < GrInstagram className='icon' /></a>
          <a className="items" href='https://www.linkedin.com/in/aarav-garg-5b1715273' target='_blank' >< SiLinkedin className='icon' /></a>
          <a className="items" href='https://www.facebook.com/' target='_blank'>< SiFacebook className='icon' /></a>
          <a className="items" href='https://github.com/aarav-gargg' target='_blank'>< TbBrandGithubFilled className='icon' /></a>
          <a className="items" href='mailto:aaravgarg975@gmail.com' target='_blank'>< MdOutgoingMail className='icon' /></a>
        </div>
      </div>

    </>
  )
}

export default Contact
