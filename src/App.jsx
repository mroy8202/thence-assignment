import './App.css'
import Homepage from './Pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import Registration from './Pages/Registration'
import SuccessReg from './Pages/SuccessReg'

function App() {
  return (
    <div className='h-screen w-screen flex flex-col gap-2 font-manrope'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path='/success' element={<SuccessReg />} />
      </Routes>

    </div>
  )
}

export default App
