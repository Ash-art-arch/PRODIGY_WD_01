import React from 'react'
import Navbar from '../Components/Navbar'
import "./dashboard.css"
import lines from "../assets/lines.svg"
import User from '../Components/User'
const Dashboard = () => {
  return (
    <div className='dashboard' style={{backgroundImage:`url(${lines})`}}>
      <Navbar/>
      <div className='dashboard-container'>
        <div className='top'>
          <div className='balance'>
            Your Balance
            <h5>$5000</h5>
          </div>
          <div className='search'>
            <input type='text' placeholder='Search For Users'/>

          </div>

        </div>
      <div className='users'>
          <h1>USERS</h1>
          <User/>
          <User/>
          <User/>
          <User/>
      </div>
      </div>
    </div>
  )
}

export default Dashboard