import React, { useEffect, useState } from 'react'
import Success from '../Assets/Success.svg'
import ErrorImg from '../Assets/Error/Error.svg'
import { useLocation, useNavigate } from 'react-router-dom'

const Register = ({ setIsRegistered }) => {

  const currentPath = useLocation()

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullname: "",
    email: ""
  })

  const [emailError, setEmailError] = useState("")
  const [focusedField, setFocusedField] = useState("")
  const [buttonActive, setButtonActive] = useState(false)
  const [countdown, setCountdown] = useState(5)

  const {fullname, email} = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
    setEmailError("")
  }

  useEffect(() => {
    if(fullname && email) {
      setButtonActive(true)
    } else {
      setButtonActive(false)
    }
  }, [fullname, email])

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if(!validateEmail(email)) {
      setEmailError("Enter a valid email addesss")
      return
    }
    setIsRegistered(true)
    navigate("/success")
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleOnFocus = (fieldname) => {
    setFocusedField(fieldname)
  }

  useEffect(() => {
    if(currentPath.pathname === "/success" && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000)

      return () => clearInterval(timer);
    } else if(currentPath.pathname === "/success" && countdown === 0) {
      navigate("/")
    }
  }, [countdown, currentPath.pathname, navigate])
 
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
              <form onSubmit={handleOnSubmit}
                className='flex flex-col gap-4 px-32 w-full'
              >
                <input 
                  required
                  type = "text"
                  name = "fullname"
                  value = {fullname}
                  onChange = {handleOnChange}
                  placeholder = "Enter your name"
                  onFocus={() => handleOnFocus("fullname")}
                  autoComplete="name"
                  className={`outline-none border border-[#EFEFEF] 
                    rounded-full font-medium text-xl 
                    leading-7 text-[#827A7A] p-4
                    bg-[#EFEFEF]
                    ${focusedField === "fullname" ? "text-[#000000]": "text-[#827A7A]"}
                  `}
                />

                <input 
                  required
                  type = "text"
                  name = "email"
                  value = {email}
                  onChange = {handleOnChange}
                  placeholder = "Enter your email"
                  autoComplete="email"
                  className={`outline-none border border-[#EFEFEF] 
                    rounded-full font-medium text-xl 
                    leading-7 text-[#827A7A] p-4
                    bg-[#EFEFEF]
                    ${focusedField === "fullname" ? "text-[#000000]": "text-[#827A7A]"}
                  `}
                />

                {
                  emailError &&
                  <div className='flex gap-2'>
                    <img src={ErrorImg} alt='errorIcon.svg' />
                    <p className='text-[#FF0808]'>{emailError}</p>
                  </div>
                }

                <button
                  type = "submit"
                  className={`outline-none border 
                    rounded-full font-semibold text-lg
                    text-[#FFFFFF] p-4 mt-4 
                    ${buttonActive ? "cursor-pointer bg-black":
                    "cursor-not-allowed bg-[#C9C9C9]"}
                  `}
                  disabled={!buttonActive}
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
                Redirecting you to Homepage in <span className='font-medium text-[#1C1C1C]'>{countdown} Seconds</span>
              </div>
            }

            <div></div>
        </div>
    </div>
  )
}

export default Register