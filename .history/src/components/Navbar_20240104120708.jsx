import React from 'react'
import "./Navbar.css"
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='nav'>
        <nav className='nav-ele'>
            <ul className='nav-ele'>
                 <Link to='features' className='nav-heading' smooth={true} duration={1000} >About</Link>
            </ul>

            <ul className='nav-ele'>
                <Link to='https://www.google.com/maps/@28.5441706,77.2290188,15z?entry=ttu' className='nav-heading'>All Parking Locations</Link>
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