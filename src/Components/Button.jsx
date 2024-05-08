import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, isActive, linkto }) => {
  return (
    <Link to={linkto}>
        <div
            className={`border rounded-full py-4 px-8 cursor-pointer
            text-lg
            ${isActive ? "font-semibold text-white outline-none bg-black hover:bg-[#4E4E4E]": "font-medium border-#FFFFFF hover:bg-[#F1F1F1]"}`}
        >
            {children}
        </div>
    </Link>
  )
}

export default Button