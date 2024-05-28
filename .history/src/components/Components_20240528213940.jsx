import React from "react"
import "./Components.css"

const Components = () => {
	return (
		<div>
			<div className="comp-header">Components of Smart Car Parking System</div>

			<div className="flex-2">
				<div className="em2">
					{/* <img
						src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/attachment_82699937-e1536958057333.png?auto=format&q=60&fit=max&w=930"
						alt=""></img> */}
					<div></div>
					<h4>Sensor</h4>
					<p>
						Buried under every kind of road surface, precisely set in order to
						give accurate information in real time about parking lot status free
						or busy.
					</p>
				</div>

				<div className="em2">
					{/* <img
						src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/attachment_66331995-e1536957618989.png?auto=format&q=60&fit=max&w=930"
						alt=""></img> */}
					<h4>Cameras</h4>
					<p>
						Placed on a lamppost or an high pointview, cameras for the smart
						parking detection activities are a technological evolution developed
						to face the new urban necessities.
					</p>
				</div>

				<div className="em2">
					{/* <img
						src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/attachment_76199455-e1536957658670.jpeg?auto=format&q=60&fit=max&w=930"
						alt=""></img> */}
					<h4>Mobile App</h4>
					<p>
						Smart Car Parking allows to manage payments and virtualized smart
						cards. It drives the user to the selected parking lot and allows to
						pay or to activate and end the parking stop.
					</p>
				</div>
			</div>

			<div className="flex-23">
				<div className="em231">
					{/* <img
						src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/attachment_82699937-e1536958057333.png?auto=format&q=60&fit=max&w=930"
						alt=""></img> */}
					<h4>Central servers</h4>
					<p>Where the data are collected. Communicating in realtime</p>
					<p> with sensors or Mobile APP are sent, through a radio</p>
					<p> communication network that uses alternative</p>
					<p> communication protocols or co-present.</p>
				</div>

				<div className="em23">
					{/* <img
						src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/attachment_66331995-e1536957618989.png?auto=format&q=60&fit=max&w=930"
						alt=""></img> */}
					<h4>Management Software</h4>
					<p>Processes the data received in real time and makes them</p>
					<p> available through the Internet network, on any type of user</p>
					<p> terminal (PC, notebook, smartphone, tablet, PDA) for use</p>
					<p> and consultation by stakeholders.</p>
				</div>
			</div>
			<div className="display-4  text-center ">Get more Information</div>

			<div class="text-center">
				<button
					href="/contact"
					type="button"
					class="btn btn-primary mb-3">
					Contact Us
				</button>
			</div>
		</div>
	)
}

export default Components
