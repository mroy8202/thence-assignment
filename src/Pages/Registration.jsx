import React from 'react'
import Navbar from '../Components/Navbar'
import Register from '../Components/Register'

const Registration = ({ setIsRegistered }) => {
  return (
    <div className='flex flex-col items-center'>
        <Navbar />
        <Register setIsRegistered={setIsRegistered} />
    </div>
  )
}

export default Registration