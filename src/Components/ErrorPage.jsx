import React from 'react'
import { Link } from 'react-router-dom'


const ErrorPage = () => {
  return (
    <div className='h-full w-full flex flex-col items-center mt-32 gap-4'>
        <h1 className='text-5xl text-red-700'>
            Unauthorized Access
        </h1>
        <p className='text-xl'>
            You are not authorized to access this page. Please register first.
        </p>
        <Link to="/"
          className='font-bold'  
        >
          Click here to go to homepage
        </Link>
    </div>
  )
}

export default ErrorPage