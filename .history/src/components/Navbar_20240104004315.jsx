import React from 'react'
import "./Navbar.css"
import {Link} from 'react-scroll'
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link,
// } from "react-router-dom";
import About from './About';
import Login from './Login';
// import Main from './Main';
// import home from './home';

const Navbar = () => {
  return (
    // <Router>
    //             <div className="nav">
    //                 <ul className="nav-ele">
    //                     <ul>
    //                         <Link className='nav-heading' to="features" smooth={true} duration={1000} >
    //                             About
    //                         </Link>
    //                     </ul>
    //                     <ul>
    //                         <Link className='nav-heading' to="https://www.google.com/maps/@28.5441706,77.2290188,15z?entry=ttu">
    //                             All parking locations
    //                         </Link>
    //                     </ul>

    //                      <ul>
    //                         <Link className='nav-heading' to="/login">
    //                             Login
    //                         </Link>
    //                     </ul>
    //                     <ul>
    //                         <Link className='nav-heading' to="">
    //                             Register
    //                         </Link>
    //                     </ul>

    //                     <ul>
    //                         <Link className='nav-heading' to="">
    //                             Contact Us
    //                         </Link>
    //                     </ul>

    //                 </ul>
    //                 <Routes>
    //                     <Route
    //                         exact
    //                         path="/"
    //                         // element={<Main/>}
    //                     ></Route>
    //                     <Route
    //                         exact
    //                         path="/features"
    //                         element={<About/>}
    //                     ></Route>
    //                     <Route
    //                         exact
    //                         path="https://www.google.com/maps/@28.5441706,77.2290188,15z?entry=ttu"
    //                         // element={<AllParkingLocation />}
    //                     ></Route>
    //                      <Route
    //                         exact
    //                         path="/login"
    //                         element={<Login/>}
    //                     ></Route>
    //                     <Route
    //                         exact
    //                         path=""
    //                         // element={<Register/>}
    //                     ></Route>
    //                     <Route
    //                         exact
    //                         path=""
    //                         // element={<Contact/>}
    //                     ></Route>
    //                 </Routes>
    //             </div>
    //         </Router>

    <div className='nav'>
        <nav className='nav-ele'>
            <ul className='nav-ele'>
                 <Link to='features' className='nav-heading' smooth={true} duration={1000} >About</Link>
            </ul>

            <ul className='nav-ele'>
                <Link to='https://www.google.com/maps/@28.5441706,77.2290188,15z?entry=ttu' className='nav-heading'>All Parking Locations</Link>
            </ul>

             <ul className='nav-ele'>
               <Link to='features' className='nav-heading'>Login</Link>
            </ul>

             <ul className='nav-ele'>
                <Link to='features' className='nav-heading'>Signup</Link>
            </ul>

             <ul className='nav-ele'>
                <Link to='features' className='nav-heading'>Contact Us</Link>
            </ul> 
        </nav>
    </div>
  )
}

export default Navbar