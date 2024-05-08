import React from 'react'
import logo from '../Assets/Logo/logo.svg'
import Button from './Button'

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
                <Button isActive={false} linkto={"/"}>
                    Get Projects
                </Button>
                <Button isActive={true} linkto={"/"}>
                    Onboard Talent
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar