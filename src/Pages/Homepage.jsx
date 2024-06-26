import React from 'react'
import Navbar from '../Components/Navbar'
import Section1 from '../Components/Section1'
import Section2 from '../Components/Section2'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <div className='w-screen pl-6 pr-8'>
        <Navbar />
        <Section1 />
        <Section2 />
        <Footer />
    </div>
  )
}

export default Homepage