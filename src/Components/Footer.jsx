import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-4 bg-[#D7D7D7] rounded-3xl flex px-8 py-16 justify-between'>
        <div className='font-medium text-[#1C1C1C] text-xl'>
            ©  Talup 2023. All rights reserved
        </div>

        <div className='flex gap-4'>
            <Link to="/" className='font-normal text-[#1C1C1C] text-lg'>
                Terms & Conditions
            </Link>
            <Link to="/" className='font-normal text-[#1C1C1C] text-lg'>
                Privacy Policy
            </Link>
        </div>
    </div>
  )
}

export default Footer