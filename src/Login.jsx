import React from 'react'
import '../src/Login.css'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'

function Login() {
  return (
    <div><div className="login-container">
    <h2>Bill Splitter</h2>
    <p>Split your bills easily</p>
    <form action="#">
        <div className="input-group">
            <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="input-group">
            <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Login</button>
        <p><a href="#">Forgot Password?</a></p>
    </form>
    <p>Don't have an account? <Link to="/SignUp"><a href="#">Sign Up</a></Link></p>
    </div>
</div>
  )
}

export default Login