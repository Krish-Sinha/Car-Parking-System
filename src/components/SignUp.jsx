import React from "react"
import axios from "axios"
import { useState } from "react"
import "./SignUp.css"

function SignUp() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	function submit(e) {
		e.preventDefault()

		axios.post("http://localhost:3000/sign-up", {
			email,
			password,
		})
	}

	return (
		<form className="main">
			<h3>Sign Up</h3>

			<div className="mb-3">
				<label>First name</label>
				<input
					type="text"
					className="form-control"
					placeholder="First name"
				/>
			</div>

			<div className="mb-3">
				<label>Last name</label>
				<input
					type="text"
					className="form-control"
					placeholder="Last name"
				/>
			</div>

			<div className="mb-3">
				<label>Email address</label>
				<input
					type="email"
					className="form-control"
					placeholder="Enter email"
					onChange={(e) => {
						setEmail(e.target.value)
					}}
				/>
			</div>

			<div className="mb-3">
				<label>Password</label>
				<input
					type="password"
					className="form-control"
					placeholder="Enter password"
					onChange={(e) => {
						setPassword(e.target.value)
					}}
				/>
			</div>

			<div className="d-grid">
				<button
					type="submit"
					className="btn btn-primary">
					Sign Up
				</button>
			</div>
			<p className="forgot-password text-right">
				Already registered <a href="/sign-in">sign in?</a>
			</p>
		</form>
	)
}

export default SignUp
