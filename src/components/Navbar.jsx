import React from 'react'
import "./navbar.css"
import { Link } from 'react-scroll'

const Navbar = ({ refs }) => {
    return (
        <div className='container'>
            <div className="nav_bar">
                <div className="left">Aarav Garg</div>
                <div className="right">
                    <Link to="home" smooth={true} duration={100} className="nav_items">Home</Link>
                    <Link to="skills" smooth={true} duration={100} className="nav_items">Skills</Link>
                    <Link to="projects" smooth={true} duration={100} className="nav_items">Projects</Link>
                    <Link to="contact" smooth={true} duration={500} className='nav_items'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
