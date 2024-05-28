import React from 'react'
import axios from "axios"
import { useState } from 'react'
import {Link} from 'react-router-dom';
import './Login.css'

function Login() {
  

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

     async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3000/sign-in",{
                email,password
            })

          }
        catch(e){
          console.log(e);
        }
        }


    return (
      <form className='main'>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
             onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          {/* <button href="/location" type="submit" className="btn btn-primary">
            Submit
          </button> */}
          <Link to='/location'>Sign In</Link>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }

  export default Login

