import React from 'react'
import './Location.css'
import Footer from './Footer'

const Location = () => {
  return (
    <div>

      <h2 className='mt-5'>All Parking Locations</h2>
    
    <div id='main-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56070.621563425135!2d77.13064044863279!3d28.557333000000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce30b81e29071%3A0xa430e9b3e0492167!2sMulti%20level%20car%20parking!5e0!3m2!1sen!2sin!4v1708785405465!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='map' title="myFrame"></iframe>
    </div>
    <Footer/>

    </div>
  )
}

export default Location