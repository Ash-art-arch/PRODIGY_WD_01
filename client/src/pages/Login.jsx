import React from 'react'
import "./login.css"
import Navbar from '../Components/Navbar'
const Login = () => {
  return (
    <div className='loginpage'>
        <Navbar/>
        <div className='login-form'>
          <h1>LOGIN</h1>
          <p className='subheading'> Enter your Credentials to access<br/>your acoount</p>
          <form>
            <h5>Email</h5>
            <input type="text" placeholder='john@example.com'/>
            <h5>
              Password
            </h5>
            <input type="password" />
            <button >Login</button>
            <p>Dont Have a account? <a href='/register'>Register now</a></p> 
          </form>
          
        </div>
    </div>
  )
}

export default Login