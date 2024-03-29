import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Main from "./components/Main"
import Location from "./components/Location"
// import Login from "./components/Login"

const App = () => {
	return (
		<div className="app">
			<Navbar title="About" />
			<Main />
			<About />
			<Location />
			{/* <Login /> */}
			<Contact />
			<Footer />
		</div>
	)
}

export default App
