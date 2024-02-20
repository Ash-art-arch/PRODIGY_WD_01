import React from 'react'
import "./nav.css"
const Navbar = () => {
  return (
    <nav>
        <div className='logo'><h1>Tran<span>sac</span>tify.</h1></div>
        <div className='mid'>
            <a href="/">Home</a>
            <a href="#">Features</a>
            <a href="/dashboard">Dashboard</a>
        </div>
        <div className='login'>
            <a href="/login">Login</a>
        </div>
    </nav>
  )
}

export default Navbar