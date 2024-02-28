import React from 'react'
import "./Navbar.css"
import {Link} from 'react-scroll'

const Navbar = (props) => {
  return (
    <div className='nav'>
        <nav className='nav-ele'>
            <ul className='nav-ele'>
                 <Link to='features' className='nav-heading' smooth={true} duration={1000} >{props.title}</Link>
            </ul>

            <ul className='nav-ele'>
                <Link to='map' className='nav-heading' smooth={true} duration={1000}>All Parking Locations</Link>
            </ul>

             <ul className='nav-ele'>
               <Link to='login-main' className='nav-heading' smooth={true} duration={1000}>Login</Link>
            </ul>

             <ul className='nav-ele'>
                <Link to='features' className='nav-heading'>Signup</Link>
            </ul>

             <ul className='nav-ele'>
                <Link to='contact-main' className='nav-heading' smooth={true} duration={1000}>Contact Us</Link>
            </ul> 
        </nav>
    </div>
  )
}

export default Navbar