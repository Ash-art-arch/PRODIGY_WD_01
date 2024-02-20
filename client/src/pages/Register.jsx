import React from 'react'
import Navbar from '../Components/Navbar'
import "./register.css"
const Register = () => {
  return (
    <div className='registerpage'>
    <Navbar/>
    <div className='register-form'>
      <h1>Register</h1>
      <p className='subheading'> Enter your credentials to create<br/>your acoount</p>
      <form>
        <h5>First Name</h5>
        <input type="text" placeholder='First Name'/>
        <h5>Last Name</h5>
        <input type="text" placeholder='Last Name'/>
        <h5>Email</h5>
        <input type="text" placeholder='john@example.com'/>
        <h5>
          Password
        </h5>
        <input type="password" />
        <button >Register</button>
  
      </form>
      
    </div>
</div>
  )
}

export default Register