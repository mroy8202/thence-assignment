import './App.css'
import Homepage from './Pages/Homepage'
import { Routes, Route, Navigate } from 'react-router-dom'
import Registration from './Pages/Registration'
import SuccessReg from './Pages/SuccessReg'
import ErrorPage from './Components/ErrorPage'
import { useState } from 'react'

function App() {
  const [isRegistered, setIsRegistered] = useState(false)
  return (
    <div className='h-screen w-screen flex flex-col gap-2 font-manrope'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/registration" element={<Registration setIsRegistered={setIsRegistered} />} />
        <Route path='/success' element=
          {isRegistered ? <SuccessReg /> : <Navigate to='/error' />}  
        />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>

    </div>
  )
}

export default App
