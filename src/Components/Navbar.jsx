import React from 'react'
import logo from '../Assets/Logo/logo.svg'
import Button from './Button'
import { Link, useLocation } from 'react-router-dom'
import Left from '../Assets/Cross/leftCross.svg'
import Right from '../Assets/Cross/rightCross.svg'

const Navbar = () => {

    const currentPath = useLocation()

  return (
    <div className='w-full pt-[10px] h-[100px] flex justify-center'>
        <div className={`w-[95%] h-full flex items-center justify-between
            ${location.pathname === "/" ? "border border-#FFFFFF rounded-full": ""}
        `}
        >
            {/* logo */}
            <Link to="/">
                <img 
                    src={logo} alt='logo.png' 
                    className='pl-8'
                />
            </Link>

            {/* buttons */}
            {   
                currentPath.pathname === "/" && 
                <div className='flex pr-4 gap-4'>
                    <Button isActive={false} linkto={"/registration"}>
                        Get Projects
                    </Button>
                    <Button isActive={true} linkto={"/"}>
                        Onboard Talent
                    </Button>
                </div>
            }
            {
                currentPath.pathname === "/registration" && 
                <Link
                    to='/'
                    className='border border-#FFFFFF rounded-full p-6 relative mr-8 cursor-pointer hover:bg-[#F1F1F1]'
                >
                    <img src={Left} className='absolute' />
                    <img src={Right} className=''/>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar