import React, { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"

const App = () => {
	const[mode,setMode]=useState('light')

	const toggleMode=()=>{
		if(mode==='light'){
			setMode('dark')
		}
		else{
			setMode('light')
		}
	}
	return (
		<div className="app">
			<Navbar title1="About"
					title2="All Parking Locations" 
					title3="Login/Register"  
					title4="Contact"
					mode={mode} toggleMode={toggleMode}/>
			
		</div>
	)
}

export default App
