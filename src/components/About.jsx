import React from 'react'
import "./About.css"

const About = () => {
  return (
     <div id='features'>
        <div className='about-head'>About us</div>
        <ul className='accordion'>
            <li>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1t9aNuTDgKWO0I1cbjgxePcV0wyIm_xtY4SgGKvDOnAfGkpHdmHghIBuWgy9ncFrE9E&usqp=CAU' alt=''/>
                <div className='content'>
                    <span>
                        <h2>Our mission</h2>
                        <p>Empowering urban mobility through intelligent innovation, our smart car parking project strives to revolutionize the way we navigate and utilize urban spaces. </p>
                    </span>
                </div>
            </li>
            <li>
                <img src='https://media.istockphoto.com/id/537524508/photo/yellow-textured-paper-background.jpg?s=612x612&w=0&k=20&c=YePSEvthg5WhQzgAihJ55gsNz19Qadb0sIa8YDlMS2U%3D' alt=''/>
                <div className="content">
                    <span>
                        <h2>Our vision</h2>
                        <p>In envisioning the future of urban mobility, our smart car parking project aspires to become the beacon of innovation, seamlessly blending technology with convenience.</p>
                    </span>
                </div>
            </li>

             <li>
                <img src='https://t3.ftcdn.net/jpg/02/02/60/84/360_F_202608479_cjwreqdokYX5kfs6VM4erKStfM8b8Bmb.jpg' alt=''/>
                <div className="content">
                    <span>
                        <h2>Our values</h2>
                        <p>We embrace continuous innovation, leveraging cutting-edge technology to redefine the parking landscape and enhance the urban experience.</p>
                    </span>
                </div>
            </li>
            
        </ul>
    </div>
  )
}

export default About