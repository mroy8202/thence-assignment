import React from 'react'
import logo from '../Assets/Logo/logo.svg'

const Navbar = () => {
  return (
    <div className='w-full pt-[24px] h-[135px] flex justify-center'>
        <div className='w-[95%] h-full border border-#FFFFFF rounded-full flex items-center justify-between'>
            {/* logo */}
            <div>
                <img 
                    src={logo} alt='logo.png' 
                    className='pl-8'
                />
            </div>

            {/* buttons */}
            <div className='flex pr-4 gap-4'>
                <div className='border border-#FFFFFF rounded-full py-6 px-8 cursor-pointer hover:bg-[#F1F1F1]'>
                    <p className='font-medium text-lg'>Get Projects</p>
                </div>
                <div className='border rounded-full outline-none py-6 px-8 bg-black cursor-pointer hover:bg-[#4E4E4E]'>
                    <p className='font-semibold text-lg text-white'>Onboard Talent</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar