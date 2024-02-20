import React from 'react'
import Navbar from '../Components/Navbar'
import "./home.css"
import hero from "../assets/hero.svg"
import lines from "../assets/lines.svg"
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='hero' style={{backgroundImage:`url(${lines})`}}>
            <div className='left'>
                <div className='text'>
                <h1>Secure Payment Gateway </h1>
                <h3>Your Trusted Platform for Seamless Transactions</h3>
                <button>LOGIN</button>
                </div>
            </div>
            <div className='right'>
                <img src={hero} alt="" />
            </div>
        </div>
            <h1 className='trust'>Companies Trusting Us</h1>
        <div className='carousel'>
            <div className='container'>
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
            </div>
            <div className='container'>
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
                <img src="logo-amazon-512.webp" alt="" className='company' />    
            </div>
         
        </div>
        
    </div>
  )
}

export default Home