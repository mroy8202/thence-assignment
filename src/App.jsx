import './App.css'
import Homepage from './Pages/Homepage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='h-screen w-screen flex flex-col gap-2 font-manrope'>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>

    </div>
  )
}

export default App
