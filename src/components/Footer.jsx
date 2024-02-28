import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import {Link} from 'react-scroll'
import { Link } from "react-router-dom";
import Termsofuse from './Termsofuse';

const Footer = () => {
  return (
    <div className='footer-heading'>
    <div className='footer'>

    
   <div className='footer-main' >
    <div className='footer-head'>Smart Car Parking System</div>
    <div className='footer-info'>130+ million drivers and</div>
    <div className='footer-info-second'>riders who hate traffic, too</div>
    {/* <div>About</div>
    <div>Partners</div> */}
   </div>


   <div className='footer-second-main'>
    <div className='footer-second'>Support</div>
    <div className='margin-left'>Help Center</div>
    <div className='margin-left-second'>Fix a map issue</div>
    <div className='margin-left-second'>Community Forums</div>
   </div>

   <div className='footer-second-main'>
    <div className='footer-second'>Livemap</div>
    <div className='margin-left'>Search</div>
    <div className='margin-left-second'>Edit the map</div>
    <div className='margin-left-second'>Locations</div>
   </div>

   <div className='footer-second-main'>
    <div className='footer-second'>About</div>
    <div className='margin-left'>About Us</div>
    <div className='margin-left-second'>Contact Us</div>
    <div className='margin-left-second'>More Search</div>
    <div className='margin-left-second'>Jobs</div>
    <div className='margin-left-second'>Communities</div>
   </div>


   {/* <div className='footer-third-main'>
    <div className='footer-third'>riders who hate traffic, too</div>
    <div className='margin-left-third'>Fix a map issue</div>
    <div>Majot Events</div>
    <div>Jobs</div>
    <div>Broadcaster</div>
   </div> */}
   </div>
   <div className='footer-icons'>
    <div className='footer-icons-gap'><InstagramIcon onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.instagram.com/';
      }}/></div>
      
    <div className='footer-icons-gap'><XIcon onClick={(e) => {
      e.preventDefault();
      window.location.href='https://twitter.com/home'}}/></div>
    <div className='footer-icons-gap'><FacebookIcon onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.facebook.com/'}}/></div>
    <div className='footer-icons-gap '><YouTubeIcon onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.youtube.com/'}}/></div>
   </div>

   <div className='footer-last'>
    {/* <div className='terms'>Terms of use</div> */}
    <button className='terms'
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='http://google.com';
      }}> Terms of use</button>

    {/* <div className='privacy'>Privacy Policy</div> */}
    <button className='privacy'
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='http://google.com';
      }}>Privacy Policy</button>
    {/* <div className='notice'>Copyright Notice</div> */}
    <button className='notice'
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='http://google.com';
      }}>Privacy Policy</button>
   </div>

   </div>
  )
}

export default Footer