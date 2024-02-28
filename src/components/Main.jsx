import React,{useState} from 'react'
import { Link } from "react-router-dom";
import Features from './Features';
import "./Main.css"

const Main = () => {

	const[isopen,SetIsopen]=useState(false)

	// const handleClick=()=>{
	// 	console.log('You clicked it')
	// }
  return (
    <div>
    <div className="flexing">
				<div className="app-container">
					<p className="top">We are a full service</p>
					<span>SMART CAR</span>
					<br />
					<span className="name">PARKING SYSTEM</span>
					<p className="text">
						Project has been developed over the high end latest technology and
						works
					</p>
					<p className="text">
						on secure environment. Project has been developed over the high end
					</p>
					<p className="text">latest technology and works</p>

					<button class="button-39" onClick={()=>SetIsopen(!isopen)}>{isopen? 'LEARN LESS':'LEARN MORE'}</button>
				</div>
				<div className="app-image">
					<img
						src="https://i0.wp.com/www.coolingindia.in/wp-content/uploads/2021/12/automated-car-parking-system.jpg?fit=792%2C612&ssl=1"
						alt=""
					/>
				</div>
			</div>

			<div className="main_em_feature">
				<div className="em2">
					<img
						src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/attachment_82699937-e1536958057333.png?auto=format&q=60&fit=max&w=930"
						alt=""></img>
					<h4>Customer Management System</h4>
					<p>A car parking system is a mechanical</p>
					<p> device that multiplies parking</p>
					<p> capacity inside a parking lot.Parking</p>
					<p>system are generally powered by</p>
					<p>electric motors or hydraulic pumps</p>
					<p> that move vehicles into a </p>
					<p>storage position.</p>

					{/* <button className="btn">Learn More</button> */}
				</div>

				<div className="em2">
					<img
						src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/attachment_66331995-e1536957618989.png?auto=format&q=60&fit=max&w=930"
						alt=""></img>
					<h4>User Management System</h4>
					<p>A car parking system is a mechanical</p>
					<p> device that multiplies parking</p>
					<p> capacity inside a parking lot.Parking</p>
					<p>system are generally powered by</p>
					<p>electric motors or hydraulic pumps</p>
					<p> that move vehicles into a </p>
					<p>storage position.</p>

					{/* <button className="btn">Learn More</button> */}
				</div>

				<div className="em2">
					<img
						src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/attachment_76199455-e1536957658670.jpeg?auto=format&q=60&fit=max&w=930"
						alt=""></img>
					<h4>Parking Management System</h4>
					<p>A car parking system is a mechanical</p>
					<p> device that multiplies parking</p>
					<p> capacity inside a parking lot.Parking</p>
					<p>system are generally powered by</p>
					<p>electric motors or hydraulic pumps</p>
					<p> that move vehicles into a </p>
					<p>storage position.</p>
					{/* 
					<button className="btn">Learn More</button> */}
				</div>
			</div>

			<div className="features-main">
				<h2>FEATURES OF THE PROJECT</h2>
				<p className="sub">
					A car parking system is a mechanical device that multiplies parking
					capacity inside a parking lot. Parking system are generally powered by
				</p>
				<p className="subsub">
					electric motors or hydraulic pumps that move vehicles into a storage
					position.
				</p>

				<div className="feat-img">
					<img
						className=""
						src="https://i.pinimg.com/736x/25/5e/ed/255eedb8480ce733ec99d63402e44c78.jpg"
						alt=""
					/>

					<img
						src="https://designa.com/hubfs/Auto%20Geist%20PC.jpg"
						alt=""
					/>

					<img
						src="https://media.istockphoto.com/id/960714254/photo/autonomous-suv-is-parallel-parking-into-parking-lot-at-roadside.jpg?s=612x612&w=0&k=20&c=qTw44AGceW5Ikol6XopMkUBE2kifwGkfw1FYAEI0_0Y%3D"
						alt=""
					/>
				</div>
				<button className="button-60">See more</button>
				{/* <Link to=<Features/> className="button-60">See more</Link> */}
				
			</div>
      </div>
  )
}

export default Main