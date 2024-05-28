import React from 'react'
import "./Navbar.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './Components'
import Login from './Login'
import SignUp from './SignUp'
import Location from './Location'
import Main from './Main'
import ContactHeader from './ContactHeader/ContactHeader'

const Navbar = (props) => {
  return (
    <div className=''>
        <nav className='nav-ele'>
           
      <Router>
      <div className="App">
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top `}>
          <div className="container ">
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ">
                <ul className="nav-item">
                  <Link  className={`nav-link fw-bolder text-${props.mode==='light'?'dark':'light'}`} to={'/'}>Home</Link>
                </ul>
                <ul className="nav-item">
                  <Link  className={`nav-link fw-bolder text-${props.mode==='light'?'dark':'light'}`} to={'/location'}>All Parking Locations</Link>
                </ul>
                <ul className="nav-item">
                  <Link className={`nav-link fw-bolder text-${props.mode==='light'?'dark':'light'}`} to={'/sign-in'}>
                    Login
                  </Link>
                </ul>
                <ul className="nav-item">
                  <Link className={`nav-link fw-bolder text-${props.mode==='light'?'dark':'light'}`} to={'/sign-up'}>
                    Sign up
                  </Link>
                </ul>
                <ul className="nav-item">
                  <Link  className={`nav-link fw-bolder text-${props.mode==='light'?'dark':'light'}`} to={'/contact'}>Contact Us</Link>
                </ul>
              </ul>
              <div className={`form-check form-switch ms-5 text-${props.mode==='light'?'dark':'light'}`}>
            {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
            {/* <label className="form-check-label fw-bolder" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark Mode':'Disable Dark Mode'}</label> */}
            </div>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/location" element={<Location/>} />
              <Route path="/sign-in" element={<Login/>} />
              <Route path="/sign-up" element={<SignUp/>} />
              <Route path="/contact" element={<ContactHeader/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>           
        </nav>
   
    </div>
  )
}



export default Navbar


