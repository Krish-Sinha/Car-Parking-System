import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Main from "./components/Main"
import Login from "./components/Login"

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Main />
			<About />
			<Login />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
