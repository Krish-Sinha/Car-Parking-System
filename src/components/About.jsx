import React from 'react'
import "./About.css"

const About = () => {
  return (
     <div id='features'>
        <div className='bold'>
            How Smart Parking Systems Work
        </div>
        <p className='running'>The innovative solution developed by Intercomp for the efficient and complete management of on-street parking and all related activities and problems.</p>
        <img className='how' src='../how.jpg' alt='pict'/>

        <div className='flex'>
            <div>
            <iframe width="500" height="285" src="https://www.youtube.com/embed/WNwm9j9Cb7M?si=HoNXatsloOpslvGi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div>
            <iframe width="500" height="285" src="https://www.youtube.com/embed/3khw1UTurcw?si=JSlwp1GlvO1ZpRm1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            </div>
        </div>

       

        {/* <div className='about-head'>About us</div>
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
            
        </ul> */}
        {/* <div className='mission-main'>

            <div className='mission-statement'>
            <p className='mission-head' >Our mission</p>
            <p className='mission-desc'>A car parking system is a mechanical</p>
			<p className='mission-desc'> device that multiplies parking</p>
			<p className='mission-desc'> capacity inside a parking lot.Parking</p>
			<p className='mission-desc'>system are generally powered by</p>
			<p className='mission-desc'>electric motors or hydraulic pumps</p>
			<p className='mission-desc'> that move vehicles into a </p>
			<p className='mission-desc'>storage position.</p>
            </div>
            
            <div>
            <img className="mission-image" src="https://www.retratosbarcelona.com/wp-content/uploads/2022/09/Retratos_Barcelona_Corporate_Headshot_Iberent_3.jpg" alt="none"/>
            </div>
        </div> */}


        <div className='flex-2'>
        <div className="em2">
					{/* <img
						src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/attachment_82699937-e1536958057333.png?auto=format&q=60&fit=max&w=930"
						alt=""></img> */}
					<h4>Customer Management System</h4>
					<p>The Customer Management System component of our Smart Car Parking System website streamlines user experience. It allows customers to register, manage their accounts, and reserve parking spots seamlessly. With features like payment integration and booking history, users can efficiently navigate and enjoy a hassle-free parking experience.</p>

					
				</div>

                <div className="em2">
					{/* <img
						src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/attachment_66331995-e1536957618989.png?auto=format&q=60&fit=max&w=930"
						alt=""></img> */}
					<h4>User Management System</h4>
					<p>The User Management System component of our Smart Car Parking System website provides robust functionality for administrators. It enables user registration, authentication, and role-based access control.With features for account management and password recovery, administrators can efficiently oversee user interactions and ensure secure access to parking facilities.</p>

					
				</div>

                
				<div className="em2">
					{/* <img
						src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/attachment_76199455-e1536957658670.jpeg?auto=format&q=60&fit=max&w=930"
						alt=""></img> */}
					<h4>Parking Management System</h4>
					<p>The Parking Management System component of our Smart Car Parking System website offers comprehensive tools for efficient space allocation and monitoring. It enables real-time occupancy tracking, reservation management, and payment processing. With features like automated alerts and reporting, administrators can optimize parking availability and enhance user satisfaction.</p>
					
					
				</div>
        </div>
        
        </div>
  )
}

export default About