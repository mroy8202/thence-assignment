import React, { useState } from 'react'
import Success from '../Assets/Success.svg'
import { useLocation, useNavigate } from 'react-router-dom'

const Register = () => {

  const currentPath = useLocation()
  console.log("Current path: ", currentPath.pathname)

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullname: "",
    email: ""
  })

  const {fullname, email} = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    navigate("/success")
  }

  console.log("name: ", fullname)
  console.log("email: ", email)
 
  return (
    <div className='flex flex-col items-center'>
        <div className='h-[500px] w-[650px] mt-[10px] flex flex-col items-center gap-4'>

            {
              currentPath.pathname === "/success" &&
              <div>
                <img src={Success} />
              </div>
            }
  
            <div className='font-grace font-normal text-4xl leading-9 text-[#2DA950]'>
              {currentPath.pathname === "/registration"  ? "Registration Form" : "Success Submitted"}
            </div>

            
            <div className='font-manrope font-semibold text-[56px] text-center'>
              {/*  */}
              {currentPath.pathname === "/registration" ? "Start your success journey here!" : "Congratulations"}
            </div>

            {/* email verification */}
            {
              currentPath.pathname === "/registration" && 
              <form onSubmit={handleOnSubmit}>
                <input 
                  required
                  type = "text"
                  name = "fullname"
                  value = {fullname}
                  onChange = {handleOnChange}
                  placeholder = "Enter your name"
                  className=''
                />

                <input 
                  required
                  type = "text"
                  name = "email"
                  value = {email}
                  onChange = {handleOnChange}
                  placeholder = "Enter your email"
                  className=''
                />

                <button
                  type = "submit"
                  className=''
                >
                  Submit
                </button>
              </form>
            }
            


            {
              currentPath.pathname === "/success" && 
              <div className='font-manrope font-medium text-[27px] text-center text-[#727272] text-balance'>
                Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates
              </div>
            }

            {
              currentPath.pathname === "/success" && 
              <div className='font-manrope font-normal text-xl text-center text-[#727272] mt-12'>
                Redirecting you to Homepage in <span className='font-medium text-[#1C1C1C]'>5 Seconds</span>
              </div>
            }

            <div></div>
        </div>
    </div>
  )
}

export default Register